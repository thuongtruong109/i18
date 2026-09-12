"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Smartphone } from "lucide-react";
import type { CSSProperties } from "react";
import {
  finishes,
  isModel,
  productCatalog,
  type Model,
} from "./product-data";

type DeviceSelectProps = {
  label: string;
  value: Model;
  models: ReadonlyArray<Model>;
  onChange: (model: Model) => void;
};

export function DeviceSelect({ label, value, models, onChange }: DeviceSelectProps) {
  return (
    <Select
      value={value}
      onValueChange={(next) => {
        if (isModel(next) && models.includes(next)) onChange(next);
      }}
    >
      <SelectTrigger className="device-select-trigger" aria-label={label}>
        <Smartphone aria-hidden="true" />
        <SelectValue>{productCatalog[value].shortLabel}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="device-select-content"
        position="popper"
        align="start"
      >
        {models.map((model) => {
          const product = productCatalog[model];
          const finish = finishes[product.defaultFinish];

          return (
            <SelectItem key={model} value={model} className="device-select-item">
              <span
                className="device-select-swatch"
                style={{ "--device-color": finish.color } as CSSProperties}
                aria-hidden="true"
              />
              <span>{product.label}</span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
