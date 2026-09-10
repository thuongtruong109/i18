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

export const modelCopy = {
  pro: {
    name: "iPhone 18 Pro",
    eyebrow: "PRO FURTHER.",
    intro: "Nhôm nguyên khối. Ba camera Fusion 48MP. Một cỗ máy A20 Pro được làm mát bằng buồng hơi.",
    display: "6.3″ / 6.9″",
    camera: "3 × 48MP",
    battery: "45 giờ",
  },
  duo: {
    name: "iPhone Duo",
    eyebrow: "HELLO, HELLO.",
    intro: "Hai màn hình, một bản lề titanium. Gập, mở và đứng ở đúng góc bạn muốn.",
    display: "Màn hình kép",
    camera: "Dual Fusion 48MP",
    battery: "Pin kép",
  },
} as const;
