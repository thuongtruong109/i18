export type Model = "pro" | "duo";
export type Finish = "burgundy" | "glacier" | "silver" | "black" | "night-sky" | "star-white";

export const finishes: Record<Finish, { name: string; color: string; accent: string }> = {
  burgundy: { name: "Burgundy", color: "#5b1828", accent: "#d38491" },
  glacier: { name: "Băng Thanh", color: "#c7dce1", accent: "#9eeeff" },
  silver: { name: "Bạc", color: "#d7d7d2", accent: "#ffffff" },
  black: { name: "Đen", color: "#202226", accent: "#737985" },
  "night-sky": { name: "Night Sky", color: "#172231", accent: "#829cc1" },
  "star-white": { name: "Star White", color: "#e9e7df", accent: "#ffffff" },
};

export const modelFinishes: Record<Model, Finish[]> = {
  pro: ["burgundy", "glacier", "silver", "black"],
  duo: ["night-sky", "star-white"],
};
