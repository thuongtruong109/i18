export type LegacyModel = "pro" | "duo";
export type NewModel = "17-pro" | "17-pro-max" | "air" | "17" | "17e";
export type Model = LegacyModel | NewModel;

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
  | "cosmic-orange";

type ProductDefinition = {
  label: string;
  shortLabel: string;
  defaultFinish: Finish;
  isFoldable: boolean;
  sceneHeight: number;
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
};

export const modelIds = [
  "pro",
  "duo",
  "17-pro",
  "17-pro-max",
  "air",
  "17",
  "17e",
] as const satisfies ReadonlyArray<Model>;

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
};

export const modelFinishes: Record<Model, ReadonlyArray<Finish>> = {
  pro: ["burgundy", "glacier", "silver", "black"],
  duo: ["night-sky", "star-white"],
  "17-pro": ["cosmic-orange"],
  "17-pro-max": ["cosmic-orange"],
  air: ["sky-blue"],
  "17": ["lavender"],
  "17e": ["soft-pink"],
};

export function isModel(value: string): value is Model {
  return modelIds.some((model) => model === value);
}

export function isFinish(value: string): value is Finish {
  return value in finishes;
}
