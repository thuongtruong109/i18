"use client";

import { useEffect, type Dispatch, type SetStateAction } from "react";
import {
  finishes,
  isFinish,
  isModel,
  modelFinishes,
  modelIds,
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
  setModel: Dispatch<SetStateAction<Model>>,
  setFinish: Dispatch<SetStateAction<Finish>>,
) {
  useEffect(() => {
    const registerTool = document.modelContext?.registerTool;
    if (!registerTool) return;
    const lifecycle = new AbortController();

    void Promise.resolve(registerTool({
      name: "configure_iphone_concept",
      title: "Cấu hình trải nghiệm iPhone 3D",
      description: "Chọn dòng iPhone và lớp hoàn thiện đang hiển thị trong trải nghiệm.",
      inputSchema: {
        type: "object",
        properties: {
          model: { type: "string", enum: modelIds },
          finish: { type: "string", enum: Object.keys(finishes) },
        },
        required: ["model", "finish"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input) {
        const value = input as { model?: string; finish?: string };
        const requestedModel = value?.model ?? "";
        const requestedFinish = value?.finish ?? "";
        if (!isModel(requestedModel)) throw new Error("Dòng máy không hợp lệ.");
        if (!isFinish(requestedFinish) || !modelFinishes[requestedModel].includes(requestedFinish)) {
          throw new Error("Màu không phù hợp với dòng máy đã chọn.");
        }
        setModel(requestedModel);
        setFinish(requestedFinish);
        return { configured: true, model: value.model, finish: value.finish };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);

    return () => lifecycle.abort();
  }, [setFinish, setModel]);
}
