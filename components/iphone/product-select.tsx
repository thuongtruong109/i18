"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Glasses,
  Headphones,
  Laptop,
  Smartphone,
  Tablet,
  Watch,
  type LucideIcon,
} from "lucide-react";
import {
  isProductCategory,
  productCategoryCatalog,
  productCategoryIds,
  type ProductCategory,
} from "./product-category-data";

const categoryIcons: Record<ProductCategory, LucideIcon> = {
  iphone: Smartphone,
  ipad: Tablet,
  "apple-watch": Watch,
  mac: Laptop,
  airpods: Headphones,
  "apple-vision": Glasses,
};

type ProductSelectProps = {
  label: string;
  value: ProductCategory;
  onChange: (category: ProductCategory) => void;
};

export function ProductSelect({ label, value, onChange }: ProductSelectProps) {
  const ActiveIcon = categoryIcons[value];

  return (
    <Select
      value={value}
      onValueChange={(next) => {
        if (isProductCategory(next)) onChange(next);
      }}
    >
      <SelectTrigger
        className="device-select-trigger product-select-trigger"
        aria-label={label}
      >
        <ActiveIcon aria-hidden="true" />
        <SelectValue>{productCategoryCatalog[value].shortLabel}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="device-select-content product-select-content"
        position="popper"
        align="start"
      >
        {productCategoryIds.map((category) => {
          const Icon = categoryIcons[category];
          return (
            <SelectItem
              key={category}
              value={category}
              className="device-select-item product-select-item"
            >
              <Icon aria-hidden="true" />
              <span>{productCategoryCatalog[category].label}</span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
