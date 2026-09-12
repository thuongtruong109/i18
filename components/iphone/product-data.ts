export type LegacyModel = "pro" | "duo";
export type NewModel = "air" | "17" | "17e";
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
  | "soft-pink";

type ProductDefinition = {
  label: string;
  shortLabel: string;
  defaultFinish: Finish;
  isFoldable: boolean;
};

export const productCatalog: Record<Model, ProductDefinition> = {
  pro: {
    label: "iPhone 18 Pro",
    shortLabel: "18 Pro",
    defaultFinish: "burgundy",
    isFoldable: false,
  },
  duo: {
    label: "iPhone Duo",
    shortLabel: "Duo",
    defaultFinish: "night-sky",
    isFoldable: true,
  },
  air: {
    label: "iPhone Air",
    shortLabel: "Air",
    defaultFinish: "sky-blue",
    isFoldable: false,
  },
  "17": {
    label: "iPhone 17",
    shortLabel: "17",
    defaultFinish: "lavender",
    isFoldable: false,
  },
  "17e": {
    label: "iPhone 17e",
    shortLabel: "17e",
    defaultFinish: "soft-pink",
    isFoldable: false,
  },
};

export const modelIds = ["pro", "duo", "air", "17", "17e"] as const satisfies ReadonlyArray<Model>;

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
};

export const modelFinishes: Record<Model, ReadonlyArray<Finish>> = {
  pro: ["burgundy", "glacier", "silver", "black"],
  duo: ["night-sky", "star-white"],
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
