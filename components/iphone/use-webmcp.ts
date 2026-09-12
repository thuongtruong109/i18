"use client";

import { useEffect, type Dispatch, type SetStateAction } from "react";
import {
  isProductCategory,
  productCategoryCatalog,
  productCategoryIds,
  type ProductCategory,
} from "./product-category-data";
import {
  finishes,
  getSeriesForModel,
  isFinish,
  isModel,
  modelFinishes,
  modelIds,
  productCatalog,
  type Finish,
  type Model,
} from "./product-data";

type RegisterTool = (tool: {
  name: string;
  title: string;
  description: string;
  inputSchema: object;
  annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
  execute(input: unknown): Promise<object>;
}, options?: { signal?: AbortSignal }) => void | Promise<void>;

declare global {
  interface Document {
    modelContext?: { registerTool?: RegisterTool };
  }
}

export function useConceptTool(
  setCategory: Dispatch<SetStateAction<ProductCategory>>,
  setModel: Dispatch<SetStateAction<Model>>,
  setFinish: Dispatch<SetStateAction<Finish>>,
) {
  useEffect(() => {
    const registerTool = document.modelContext?.registerTool;
    if (!registerTool) return;
    const lifecycle = new AbortController();

    void Promise.resolve(registerTool({
      name: "configure_apple_product_experience",
      title: "Cấu hình trải nghiệm sản phẩm Apple",
      description: "Chọn nhóm sản phẩm Apple, model và màu hoàn thiện đang hiển thị.",
      inputSchema: {
        type: "object",
        properties: {
          product: { type: "string", enum: productCategoryIds },
          model: { type: "string", enum: modelIds },
          finish: { type: "string", enum: Object.keys(finishes) },
        },
        required: ["product"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input) {
        const value = input as { product?: string; model?: string; finish?: string };
        const requestedCategory = value?.product ?? "";
        if (!isProductCategory(requestedCategory)) {
          throw new Error("Nhóm sản phẩm không hợp lệ.");
        }

        const categoryDefinition = productCategoryCatalog[requestedCategory];
        if (!categoryDefinition.defaultModel) {
          setCategory(requestedCategory);
          return { configured: true, product: requestedCategory };
        }

        const requestedModel = value.model ?? categoryDefinition.defaultModel;
        if (
          !isModel(requestedModel)
          || !categoryDefinition.series.includes(getSeriesForModel(requestedModel))
        ) {
          throw new Error("Model không thuộc nhóm sản phẩm đã chọn.");
        }
        const requestedFinish = value.finish ?? productCatalog[requestedModel].defaultFinish;
        if (!isFinish(requestedFinish) || !modelFinishes[requestedModel].includes(requestedFinish)) {
          throw new Error("Màu không phù hợp với dòng máy đã chọn.");
        }
        setCategory(requestedCategory);
        setModel(requestedModel);
        setFinish(requestedFinish);
        return {
          configured: true,
          product: requestedCategory,
          model: requestedModel,
          finish: requestedFinish,
        };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);

    return () => lifecycle.abort();
  }, [setCategory, setFinish, setModel]);
}
