"use client";

import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { Finish, Model } from "./product-data";

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
      title: "Cấu hình concept iPhone 18",
      description: "Chọn phiên bản và lớp hoàn thiện đang hiển thị trong landing page.",
      inputSchema: {
        type: "object",
        properties: {
          model: { type: "string", enum: ["pro", "duo"] },
          finish: { type: "string", enum: ["burgundy", "glacier", "silver", "black", "night-sky", "star-white"] },
        },
        required: ["model", "finish"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input) {
        const value = input as { model?: string; finish?: string };
        if (!value || !["pro", "duo"].includes(value.model ?? "")) throw new Error("Phiên bản không hợp lệ.");
        const validFinishes = value.model === "pro"
          ? ["burgundy", "glacier", "silver", "black"]
          : ["night-sky", "star-white"];
        if (!validFinishes.includes(value.finish ?? "")) throw new Error("Màu không phù hợp với phiên bản đã chọn.");
        setModel(value.model as Model);
        setFinish(value.finish as Finish);
        return { configured: true, model: value.model, finish: value.finish };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);

    return () => lifecycle.abort();
  }, [setFinish, setModel]);
}
