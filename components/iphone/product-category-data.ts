import {
  ipadSeriesIds,
  iphoneSeriesIds,
  type Model,
  type Series,
} from "./product-data";

export const productCategoryIds = [
  "iphone",
  "ipad",
  "apple-watch",
  "mac",
  "airpods",
  "apple-vision",
] as const;

export type ProductCategory = (typeof productCategoryIds)[number];

type ProductCategoryDefinition = {
  label: string;
  shortLabel: string;
  defaultModel: Model | null;
  series: ReadonlyArray<Series>;
  plannedSeries: ReadonlyArray<string>;
};

export const productCategoryCatalog: Record<
  ProductCategory,
  ProductCategoryDefinition
> = {
  iphone: {
    label: "iPhone",
    shortLabel: "iPhone",
    defaultModel: "pro",
    series: iphoneSeriesIds,
    plannedSeries: [],
  },
  ipad: {
    label: "iPad",
    shortLabel: "iPad",
    defaultModel: "ipad-pro-m5",
    series: ipadSeriesIds,
    plannedSeries: [],
  },
  "apple-watch": {
    label: "Apple Watch",
    shortLabel: "Watch",
    defaultModel: null,
    series: [],
    plannedSeries: ["Apple Watch Ultra", "Apple Watch Series", "Apple Watch SE"],
  },
  mac: {
    label: "Mac",
    shortLabel: "Mac",
    defaultModel: null,
    series: [],
    plannedSeries: ["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro"],
  },
  airpods: {
    label: "AirPods",
    shortLabel: "AirPods",
    defaultModel: null,
    series: [],
    plannedSeries: ["AirPods", "AirPods Pro", "AirPods Max"],
  },
  "apple-vision": {
    label: "Apple Vision",
    shortLabel: "Vision",
    defaultModel: null,
    series: [],
    plannedSeries: ["Apple Vision Pro"],
  },
};

export function isProductCategory(value: string): value is ProductCategory {
  return productCategoryIds.some((category) => category === value);
}

export function hasProductModels(category: ProductCategory) {
  return productCategoryCatalog[category].defaultModel !== null;
}
