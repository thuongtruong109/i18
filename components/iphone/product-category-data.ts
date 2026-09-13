import {
  airPodsSeriesIds,
  appleVisionSeriesIds,
  appleWatchSeriesIds,
  ipadSeriesIds,
  iphoneSeriesIds,
  macSeriesIds,
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
    defaultModel: "apple-watch-series-11",
    series: appleWatchSeriesIds,
    plannedSeries: [],
  },
  mac: {
    label: "Mac",
    shortLabel: "Mac",
    defaultModel: "macbook-air-m5",
    series: macSeriesIds,
    plannedSeries: [],
  },
  airpods: {
    label: "AirPods",
    shortLabel: "AirPods",
    defaultModel: "airpods-5",
    series: airPodsSeriesIds,
    plannedSeries: [],
  },
  "apple-vision": {
    label: "Apple Vision",
    shortLabel: "Vision",
    defaultModel: "apple-vision-pro-m5",
    series: appleVisionSeriesIds,
    plannedSeries: [],
  },
};

export function isProductCategory(value: string): value is ProductCategory {
  return productCategoryIds.some((category) => category === value);
}

export function hasProductModels(category: ProductCategory) {
  return productCategoryCatalog[category].defaultModel !== null;
}
