export type LegacyModel = "pro" | "duo";
export type Iphone17Model =
  | "17-pro"
  | "17-pro-max"
  | "air"
  | "17"
  | "17e";
export type Iphone16Model =
  | "16-pro"
  | "16-pro-max"
  | "16"
  | "16-plus"
  | "16e";
export type Iphone15Model =
  | "15-pro"
  | "15-pro-max"
  | "15"
  | "15-plus";
export type IpadModel =
  | "ipad-pro-m5"
  | "ipad-air-m4"
  | "ipad-a16"
  | "ipad-mini-a17-pro";
export type NewModel = Iphone17Model | Iphone16Model | Iphone15Model | IpadModel;
export type Model = LegacyModel | NewModel;
export type IphoneSeries = "18" | "17" | "16" | "15";
export type IpadSeries = "ipad-pro" | "ipad-air" | "ipad" | "ipad-mini";
export type Series = IphoneSeries | IpadSeries;

export type Finish =
  | "burgundy"
  | "glacier"
  | "silver"
  | "black"
  | "night-sky"
  | "star-white"
  | "sky-blue"
  | "lavender"
  | "soft-pink"
  | "cosmic-orange"
  | "desert-titanium"
  | "natural-titanium"
  | "space-black"
  | "ultramarine"
  | "blue"
  | "purple"
  | "pink"
  | "white";

type ProductDefinition = {
  label: string;
  shortLabel: string;
  defaultFinish: Finish;
  isFoldable: boolean;
  sceneHeight: number;
  sceneRotationY?: number;
  sceneRotationZ?: number;
};

export const productCatalog: Record<Model, ProductDefinition> = {
  pro: {
    label: "iPhone 18 Pro",
    shortLabel: "18 Pro",
    defaultFinish: "burgundy",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  duo: {
    label: "iPhone Duo",
    shortLabel: "Duo",
    defaultFinish: "night-sky",
    isFoldable: true,
    sceneHeight: 6.1,
  },
  "17-pro": {
    label: "iPhone 17 Pro",
    shortLabel: "17 Pro",
    defaultFinish: "cosmic-orange",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "17-pro-max": {
    label: "iPhone 17 Pro Max",
    shortLabel: "17 Pro Max",
    defaultFinish: "cosmic-orange",
    isFoldable: false,
    sceneHeight: 6.99,
  },
  air: {
    label: "iPhone Air",
    shortLabel: "Air",
    defaultFinish: "sky-blue",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "17": {
    label: "iPhone 17",
    shortLabel: "17",
    defaultFinish: "lavender",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "17e": {
    label: "iPhone 17e",
    shortLabel: "17e",
    defaultFinish: "soft-pink",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "16-pro": {
    label: "iPhone 16 Pro",
    shortLabel: "16 Pro",
    defaultFinish: "desert-titanium",
    isFoldable: false,
    sceneHeight: 6.42,
  },
  "16-pro-max": {
    label: "iPhone 16 Pro Max",
    shortLabel: "16 Pro Max",
    defaultFinish: "desert-titanium",
    isFoldable: false,
    sceneHeight: 7,
  },
  "16": {
    label: "iPhone 16",
    shortLabel: "16",
    defaultFinish: "ultramarine",
    isFoldable: false,
    sceneHeight: 6.31,
  },
  "16-plus": {
    label: "iPhone 16 Plus",
    shortLabel: "16 Plus",
    defaultFinish: "ultramarine",
    isFoldable: false,
    sceneHeight: 6.9,
  },
  "16e": {
    label: "iPhone 16e",
    shortLabel: "16e",
    defaultFinish: "white",
    isFoldable: false,
    sceneHeight: 6.28,
  },
  "15-pro": {
    label: "iPhone 15 Pro",
    shortLabel: "15 Pro",
    defaultFinish: "natural-titanium",
    isFoldable: false,
    sceneHeight: 5.77,
  },
  "15-pro-max": {
    label: "iPhone 15 Pro Max",
    shortLabel: "15 Pro Max",
    defaultFinish: "natural-titanium",
    isFoldable: false,
    sceneHeight: 6.29,
  },
  "15": {
    label: "iPhone 15",
    shortLabel: "15",
    defaultFinish: "pink",
    isFoldable: false,
    sceneHeight: 5.81,
  },
  "15-plus": {
    label: "iPhone 15 Plus",
    shortLabel: "15 Plus",
    defaultFinish: "pink",
    isFoldable: false,
    sceneHeight: 6.33,
  },
  "ipad-pro-m5": {
    label: "iPad Pro (M5)",
    shortLabel: "Pro M5",
    defaultFinish: "space-black",
    isFoldable: false,
    sceneHeight: 7.2,
    sceneRotationY: 1.05,
    sceneRotationZ: Math.PI,
  },
  "ipad-air-m4": {
    label: "iPad Air (M4)",
    shortLabel: "Air M4",
    defaultFinish: "blue",
    isFoldable: false,
    sceneHeight: 7.1,
    sceneRotationY: 1.05,
    sceneRotationZ: Math.PI,
  },
  "ipad-a16": {
    label: "iPad (A16)",
    shortLabel: "A16",
    defaultFinish: "pink",
    isFoldable: false,
    sceneHeight: 6.9,
    sceneRotationY: 0.32,
  },
  "ipad-mini-a17-pro": {
    label: "iPad mini (A17 Pro)",
    shortLabel: "mini",
    defaultFinish: "purple",
    isFoldable: false,
    sceneHeight: 6.15,
  },
};

type SeriesDefinition = {
  label: string;
  shortLabel: string;
  defaultModel: Model;
  models: ReadonlyArray<Model>;
};

export const iphoneSeriesIds = ["18", "17", "16", "15"] as const satisfies ReadonlyArray<IphoneSeries>;
export const ipadSeriesIds = ["ipad-pro", "ipad-air", "ipad", "ipad-mini"] as const satisfies ReadonlyArray<IpadSeries>;
export const seriesIds = [...iphoneSeriesIds, ...ipadSeriesIds] as const satisfies ReadonlyArray<Series>;

export const seriesCatalog: Record<Series, SeriesDefinition> = {
  "18": {
    label: "iPhone 18",
    shortLabel: "18",
    defaultModel: "pro",
    models: ["pro", "duo"],
  },
  "17": {
    label: "iPhone 17",
    shortLabel: "17",
    defaultModel: "17-pro",
    models: ["17-pro", "17-pro-max", "air", "17", "17e"],
  },
  "16": {
    label: "iPhone 16",
    shortLabel: "16",
    defaultModel: "16-pro",
    models: ["16-pro", "16-pro-max", "16", "16-plus", "16e"],
  },
  "15": {
    label: "iPhone 15",
    shortLabel: "15",
    defaultModel: "15-pro",
    models: ["15-pro", "15-pro-max", "15", "15-plus"],
  },
  "ipad-pro": {
    label: "iPad Pro",
    shortLabel: "Pro",
    defaultModel: "ipad-pro-m5",
    models: ["ipad-pro-m5"],
  },
  "ipad-air": {
    label: "iPad Air",
    shortLabel: "Air",
    defaultModel: "ipad-air-m4",
    models: ["ipad-air-m4"],
  },
  ipad: {
    label: "iPad",
    shortLabel: "iPad",
    defaultModel: "ipad-a16",
    models: ["ipad-a16"],
  },
  "ipad-mini": {
    label: "iPad mini",
    shortLabel: "mini",
    defaultModel: "ipad-mini-a17-pro",
    models: ["ipad-mini-a17-pro"],
  },
};

export const modelIds: ReadonlyArray<Model> = seriesIds.flatMap(
  (series) => seriesCatalog[series].models,
);

export const finishes: Record<Finish, { name: string; color: string; accent: string }> = {
  burgundy: { name: "Burgundy", color: "#5b1828", accent: "#d38491" },
  glacier: { name: "Glacier", color: "#c7dce1", accent: "#9eeeff" },
  silver: { name: "Silver", color: "#d7d7d2", accent: "#ffffff" },
  black: { name: "Black", color: "#202226", accent: "#737985" },
  "night-sky": { name: "Night Sky", color: "#172231", accent: "#829cc1" },
  "star-white": { name: "Star White", color: "#e9e7df", accent: "#ffffff" },
  "sky-blue": { name: "Sky Blue", color: "#c9d8e5", accent: "#e9f6ff" },
  lavender: { name: "Lavender", color: "#b8afd1", accent: "#eee9ff" },
  "soft-pink": { name: "Soft Pink", color: "#e7c1bd", accent: "#fff0ec" },
  "cosmic-orange": { name: "Cosmic Orange", color: "#e95d22", accent: "#ffad82" },
  "desert-titanium": { name: "Desert Titanium", color: "#b9a08e", accent: "#ead3c1" },
  "natural-titanium": { name: "Natural Titanium", color: "#8f897f", accent: "#d5cec2" },
  "space-black": { name: "Space Black", color: "#3a3a3c", accent: "#a5a5aa" },
  ultramarine: { name: "Ultramarine", color: "#5463c6", accent: "#a8b0ff" },
  blue: { name: "Blue", color: "#9eb7c6", accent: "#dceef7" },
  purple: { name: "Purple", color: "#aaa5bd", accent: "#e8e4f3" },
  pink: { name: "Pink", color: "#e8c2c8", accent: "#fff0f2" },
  white: { name: "White", color: "#f2f1ed", accent: "#ffffff" },
};

export const modelFinishes: Record<Model, ReadonlyArray<Finish>> = {
  pro: ["burgundy", "glacier", "silver", "black"],
  duo: ["night-sky", "star-white"],
  "17-pro": ["cosmic-orange"],
  "17-pro-max": ["cosmic-orange"],
  air: ["sky-blue"],
  "17": ["lavender"],
  "17e": ["soft-pink"],
  "16-pro": ["desert-titanium"],
  "16-pro-max": ["desert-titanium"],
  "16": ["ultramarine"],
  "16-plus": ["ultramarine"],
  "16e": ["white"],
  "15-pro": ["natural-titanium"],
  "15-pro-max": ["natural-titanium"],
  "15": ["pink"],
  "15-plus": ["pink"],
  "ipad-pro-m5": ["space-black"],
  "ipad-air-m4": ["blue"],
  "ipad-a16": ["pink"],
  "ipad-mini-a17-pro": ["purple"],
};

export function isModel(value: string): value is Model {
  return modelIds.some((model) => model === value);
}

export function isSeries(value: string): value is Series {
  return seriesIds.some((series) => series === value);
}

export function getSeriesForModel(model: Model): Series {
  return seriesIds.find((series) =>
    seriesCatalog[series].models.some((candidate) => candidate === model)) ?? "18";
}

export function isIphone16Model(model: Model): model is Iphone16Model {
  return model === "16-pro"
    || model === "16-pro-max"
    || model === "16"
    || model === "16-plus"
    || model === "16e";
}

export function isIphone15Model(model: Model): model is Iphone15Model {
  return model === "15-pro"
    || model === "15-pro-max"
    || model === "15"
    || model === "15-plus";
}

export function isIpadModel(model: Model): model is IpadModel {
  return model === "ipad-pro-m5"
    || model === "ipad-air-m4"
    || model === "ipad-a16"
    || model === "ipad-mini-a17-pro";
}

export function isFinish(value: string): value is Finish {
  return value in finishes;
}
