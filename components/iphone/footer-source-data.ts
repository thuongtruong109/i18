type ProductSeriesSource = {
  label: string;
  href: string;
};

type ProductSourceGroup = {
  product: string;
  series: ReadonlyArray<ProductSeriesSource>;
};

export const productSourceGroups: ReadonlyArray<ProductSourceGroup> = [
  {
    product: "iPhone",
    series: [
      { label: "18", href: "https://www.apple.com/iphone/" },
      { label: "17", href: "https://www.apple.com/iphone-17/" },
      {
        label: "16",
        href: "https://www.apple.com/iphone/compare/?modelList=iphone-16-pro%2Ciphone-16-pro-max%2Ciphone-16",
      },
      {
        label: "15",
        href: "https://www.apple.com/iphone/compare/?modelList=iphone-15-pro%2Ciphone-15-pro-max%2Ciphone-15%2Ciphone-15-plus",
      },
    ],
  },
  {
    product: "iPad",
    series: [
      { label: "Pro", href: "https://www.apple.com/ipad-pro/" },
      { label: "Air", href: "https://www.apple.com/ipad-air/" },
      { label: "iPad", href: "https://www.apple.com/ipad-11/" },
      { label: "mini", href: "https://www.apple.com/ipad-mini/" },
    ],
  },
  {
    product: "Apple Watch",
    series: [
      {
        label: "Series",
        href: "https://www.apple.com/newsroom/2025/09/apple-debuts-apple-watch-series-11-featuring-groundbreaking-health-insights/",
      },
      {
        label: "Ultra",
        href: "https://www.apple.com/newsroom/2025/09/introducing-apple-watch-ultra-3/",
      },
      {
        label: "SE",
        href: "https://www.apple.com/newsroom/2025/09/apple-introduces-apple-watch-se-3/",
      },
    ],
  },
  {
    product: "AirPods",
    series: [
      { label: "AirPods", href: "https://www.apple.com/airpods-5/" },
      { label: "Pro", href: "https://www.apple.com/airpods-pro/" },
      { label: "Max", href: "https://www.apple.com/airpods-max/" },
    ],
  },
];
