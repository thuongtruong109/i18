import type { Language } from "./i18n";
import type { Iphone15Model } from "./product-data";
import type { ProductCopy } from "./product-copy-types";

type ProductCopyBase = Omit<ProductCopy, "name" | "display" | "battery">;
type ProductCopyVariant = Pick<ProductCopy, "name" | "display" | "battery">;

function productVariants<ModelId extends Iphone15Model>(
  base: ProductCopyBase,
  variants: Record<ModelId, ProductCopyVariant>,
): Record<ModelId, ProductCopy> {
  return Object.fromEntries(
    (Object.keys(variants) as ModelId[]).map((model) => [
      model,
      { ...base, ...variants[model] },
    ]),
  ) as Record<ModelId, ProductCopy>;
}

const iphone15ProductCopy: Record<Language, Record<Iphone15Model, ProductCopy>> = {
  en: {
    ...productVariants(
      {
        eyebrow: "TITANIUM. SO STRONG. SO LIGHT. SO PRO.",
        intro: "Aerospace-grade titanium, A17 Pro, the Action button, and a versatile Pro camera system with up to 5x Telephoto.",
        camera: "48MP Pro",
        designTitle: "Titanium enters the frame.",
        designBody: "A titanium band is bonded to an internal aluminum frame, while contoured edges make the lightest Pro generation more comfortable to hold.",
        cameraTitle: "Seven pro lenses. One pocket.",
        cameraBody: "A 48MP Main, Ultra Wide, optical-quality 2x, and dedicated Telephoto cover macro through 120 mm on iPhone 15 Pro Max.",
        performanceTitle: "A17 Pro. A game-changing chip.",
        performanceBody: "A17 Pro brings a 6-core pro-class GPU, hardware-accelerated ray tracing, efficient all-day performance, and USB 3 speeds up to 10Gb/s.",
      },
      {
        "15-pro": { name: "iPhone 15 Pro", display: "6.1″ ProMotion", battery: "23 hours" },
        "15-pro-max": { name: "iPhone 15 Pro Max", display: "6.7″ ProMotion", battery: "29 hours" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "NEW CAMERA. NEW DESIGN. NEWPHORIA.",
        intro: "Dynamic Island, a 48MP Main camera, USB-C, and durable color-infused glass in an aluminum design.",
        camera: "48MP + 12MP",
        designTitle: "Color through and through.",
        designBody: "Color is infused throughout the back glass, framed by aerospace-grade aluminum with new contoured edges and Ceramic Shield up front.",
        cameraTitle: "48MP. Super-high resolution. Super versatile.",
        cameraBody: "The 48MP Main camera captures rich detail and adds an optical-quality 2x Telephoto, while Ultra Wide expands the view to 0.5x.",
        performanceTitle: "A16 Bionic. Proven power.",
        performanceBody: "A16 Bionic drives computational photography, Dynamic Island, smooth graphics, and efficient all-day battery life.",
      },
      {
        "15": { name: "iPhone 15", display: "6.1″ XDR", battery: "20 hours" },
        "15-plus": { name: "iPhone 15 Plus", display: "6.7″ XDR", battery: "26 hours" },
      },
    ),
  },
  vi: {
    ...productVariants(
      {
        eyebrow: "TITANIUM. BỀN CHẮC. NHẸ TÊNH. ĐẬM CHẤT PRO.",
        intro: "Titanium chuẩn hàng không vũ trụ, A17 Pro, nút Tác Vụ và hệ thống camera Pro linh hoạt với Telephoto đến 5x.",
        camera: "Pro 48MP",
        designTitle: "Titanium lên khung.",
        designBody: "Dải titanium liên kết với khung nhôm bên trong; các cạnh bo cong giúp thế hệ Pro nhẹ nhất cầm thoải mái hơn.",
        cameraTitle: "Bảy ống kính Pro. Trong một chiếc túi.",
        cameraBody: "Camera Chính 48MP, Ultra Wide, 2x chất lượng quang học và Telephoto chuyên dụng phủ từ macro đến 120 mm trên iPhone 15 Pro Max.",
        performanceTitle: "A17 Pro. Chip thay đổi cuộc chơi.",
        performanceBody: "A17 Pro mang đến GPU 6 lõi chuẩn Pro, dò tia tăng tốc phần cứng, hiệu năng tiết kiệm cả ngày và USB 3 đến 10Gb/s.",
      },
      {
        "15-pro": { name: "iPhone 15 Pro", display: "6,1″ ProMotion", battery: "23 giờ" },
        "15-pro-max": { name: "iPhone 15 Pro Max", display: "6,7″ ProMotion", battery: "29 giờ" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "CAMERA MỚI. THIẾT KẾ MỚI. MÊ LY.",
        intro: "Dynamic Island, camera Chính 48MP, USB-C và kính pha màu bền bỉ trong thiết kế nhôm.",
        camera: "48MP + 12MP",
        designTitle: "Sắc màu xuyên suốt.",
        designBody: "Màu sắc được pha xuyên suốt mặt kính sau, bao quanh bởi nhôm chuẩn hàng không vũ trụ, cạnh bo mới và Ceramic Shield phía trước.",
        cameraTitle: "48MP. Siêu phân giải. Siêu linh hoạt.",
        cameraBody: "Camera Chính 48MP ghi lại chi tiết phong phú và bổ sung Telephoto 2x chất lượng quang học; Ultra Wide mở rộng góc nhìn đến 0,5x.",
        performanceTitle: "A16 Bionic. Sức mạnh đã được chứng minh.",
        performanceBody: "A16 Bionic vận hành nhiếp ảnh điện toán, Dynamic Island, đồ họa mượt mà và thời lượng pin hiệu quả cả ngày.",
      },
      {
        "15": { name: "iPhone 15", display: "6,1″ XDR", battery: "20 giờ" },
        "15-plus": { name: "iPhone 15 Plus", display: "6,7″ XDR", battery: "26 giờ" },
      },
    ),
  },
  pt: {
    ...productVariants(
      {
        eyebrow: "TITÂNIO. FORTE. LEVE. PRO.",
        intro: "Titânio aeroespacial, A17 Pro, botão de Ação e um sistema de câmera Pro versátil com teleobjetiva de até 5x.",
        camera: "Pro de 48 MP",
        designTitle: "O titânio entra em cena.",
        designBody: "A faixa de titânio se une à estrutura interna de alumínio, e as bordas arredondadas deixam a geração Pro mais leve ainda mais confortável.",
        cameraTitle: "Sete lentes Pro. No seu bolso.",
        cameraBody: "Principal de 48 MP, ultra-angular, 2x de qualidade óptica e teleobjetiva dedicada cobrem do macro aos 120 mm no iPhone 15 Pro Max.",
        performanceTitle: "A17 Pro. Um chip revolucionário.",
        performanceBody: "O A17 Pro traz GPU de 6 núcleos, ray tracing acelerado por hardware, eficiência para o dia todo e USB 3 de até 10 Gb/s.",
      },
      {
        "15-pro": { name: "iPhone 15 Pro", display: "6,1″ ProMotion", battery: "23 horas" },
        "15-pro-max": { name: "iPhone 15 Pro Max", display: "6,7″ ProMotion", battery: "29 horas" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "NOVA CÂMERA. NOVO DESIGN. NOVA EMOÇÃO.",
        intro: "Dynamic Island, câmera principal de 48 MP, USB-C e vidro colorido por infusão em um design de alumínio.",
        camera: "48 MP + 12 MP",
        designTitle: "Cor por inteiro.",
        designBody: "A cor atravessa o vidro traseiro, emoldurado por alumínio aeroespacial, novas bordas arredondadas e Ceramic Shield na frente.",
        cameraTitle: "48 MP. Altíssima resolução. Superversátil.",
        cameraBody: "A câmera principal de 48 MP registra muitos detalhes e oferece teleobjetiva 2x de qualidade óptica; a ultra-angular amplia a visão para 0,5x.",
        performanceTitle: "A16 Bionic. Potência comprovada.",
        performanceBody: "O A16 Bionic move fotografia computacional, Dynamic Island, gráficos fluidos e bateria eficiente para o dia todo.",
      },
      {
        "15": { name: "iPhone 15", display: "6,1″ XDR", battery: "20 horas" },
        "15-plus": { name: "iPhone 15 Plus", display: "6,7″ XDR", battery: "26 horas" },
      },
    ),
  },
  es: {
    ...productVariants(
      {
        eyebrow: "TITANIO. FUERTE. LIGERO. PRO.",
        intro: "Titanio de calidad aeroespacial, A17 Pro, botón Acción y un versátil sistema de cámaras Pro con teleobjetivo de hasta 5x.",
        camera: "Pro de 48 MP",
        designTitle: "El titanio entra en escena.",
        designBody: "La banda de titanio se une a una estructura interna de aluminio y los bordes contorneados hacen más cómoda la generación Pro más ligera.",
        cameraTitle: "Siete lentes Pro. En tu bolsillo.",
        cameraBody: "Principal de 48 MP, ultra gran angular, 2x de calidad óptica y teleobjetivo dedicado cubren desde macro hasta 120 mm en el iPhone 15 Pro Max.",
        performanceTitle: "A17 Pro. Un chip revolucionario.",
        performanceBody: "El A17 Pro incorpora GPU de 6 núcleos, trazado de rayos por hardware, eficiencia para todo el día y USB 3 de hasta 10 Gb/s.",
      },
      {
        "15-pro": { name: "iPhone 15 Pro", display: "6,1″ ProMotion", battery: "23 horas" },
        "15-pro-max": { name: "iPhone 15 Pro Max", display: "6,7″ ProMotion", battery: "29 horas" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "NUEVA CÁMARA. NUEVO DISEÑO. NUEVA EMOCIÓN.",
        intro: "Dynamic Island, cámara principal de 48 MP, USB-C y vidrio tintado en masa dentro de un diseño de aluminio.",
        camera: "48 MP + 12 MP",
        designTitle: "Color de principio a fin.",
        designBody: "El color impregna el vidrio trasero, enmarcado por aluminio aeroespacial, nuevos bordes contorneados y Ceramic Shield delante.",
        cameraTitle: "48 MP. Altísima resolución. Súper versátil.",
        cameraBody: "La cámara principal de 48 MP captura gran detalle y añade teleobjetivo 2x de calidad óptica; el ultra gran angular amplía la vista a 0,5x.",
        performanceTitle: "A16 Bionic. Potencia demostrada.",
        performanceBody: "El A16 Bionic impulsa la fotografía computacional, Dynamic Island, gráficos fluidos y una batería eficiente para todo el día.",
      },
      {
        "15": { name: "iPhone 15", display: "6,1″ XDR", battery: "20 horas" },
        "15-plus": { name: "iPhone 15 Plus", display: "6,7″ XDR", battery: "26 horas" },
      },
    ),
  },
  zh: {
    ...productVariants(
      {
        eyebrow: "钛金属，坚固、轻盈、超 Pro。",
        intro: "航空级钛金属、A17 Pro、操作按钮，以及最高支持 5 倍长焦的多功能 Pro 相机系统。",
        camera: "4800 万像素 Pro",
        designTitle: "钛金属，登场。",
        designBody: "钛金属边框与内部铝金属结构牢固结合，圆润边缘让这一代最轻的 Pro 握持更舒适。",
        cameraTitle: "七个 Pro 级镜头，尽在口袋。",
        cameraBody: "4800 万像素主摄、超广角、光学品质 2 倍与专用长焦，从微距一路覆盖至 iPhone 15 Pro Max 的 120 毫米焦段。",
        performanceTitle: "A17 Pro，改变游戏规则。",
        performanceBody: "A17 Pro 带来 6 核 Pro 级图形处理器、硬件加速光线追踪、全天高效表现，以及最高 10Gb/s 的 USB 3。",
      },
      {
        "15-pro": { name: "iPhone 15 Pro", display: "6.1″ ProMotion", battery: "23 小时" },
        "15-pro-max": { name: "iPhone 15 Pro Max", display: "6.7″ ProMotion", battery: "29 小时" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "新相机，新设计，新欢喜。",
        intro: "灵动岛、4800 万像素主摄、USB-C，以及融色玻璃与铝金属设计。",
        camera: "4800 万 + 1200 万像素",
        designTitle: "色彩，由内而外。",
        designBody: "色彩融入整个背板玻璃，配合航空级铝金属边框、全新圆润边缘与正面 Ceramic Shield。",
        cameraTitle: "4800 万像素，超高分辨率，超灵活。",
        cameraBody: "4800 万像素主摄捕捉丰富细节，并支持光学品质 2 倍长焦；超广角则将视野扩展到 0.5 倍。",
        performanceTitle: "A16 仿生，实力久经验证。",
        performanceBody: "A16 仿生驱动计算摄影、灵动岛与流畅图形表现，同时带来高效的全天续航。",
      },
      {
        "15": { name: "iPhone 15", display: "6.1″ XDR", battery: "20 小时" },
        "15-plus": { name: "iPhone 15 Plus", display: "6.7″ XDR", battery: "26 小时" },
      },
    ),
  },
  ja: {
    ...productVariants(
      {
        eyebrow: "チタニウム。強く、軽く、Pro。",
        intro: "航空宇宙産業レベルのチタニウム、A17 Pro、アクションボタン、最大5倍望遠の多彩なProカメラシステム。",
        camera: "48MP Pro",
        designTitle: "チタニウム、登場。",
        designBody: "チタニウムバンドを内側のアルミニウムフレームに接合。丸みのあるエッジで、最も軽いPro世代を持ちやすくしました。",
        cameraTitle: "7つのProレンズを、ポケットに。",
        cameraBody: "48MPメイン、超広角、光学品質の2倍、専用望遠が、マクロからiPhone 15 Pro Maxの120mmまでカバーします。",
        performanceTitle: "A17 Pro。ゲームを変えるチップ。",
        performanceBody: "A17 Proは6コアGPU、ハードウェアアクセラレーテッドレイトレーシング、一日中の効率、最大10Gb/sのUSB 3を実現します。",
      },
      {
        "15-pro": { name: "iPhone 15 Pro", display: "6.1″ ProMotion", battery: "23時間" },
        "15-pro-max": { name: "iPhone 15 Pro Max", display: "6.7″ ProMotion", battery: "29時間" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "新しいカメラ。新しいデザイン。新しい喜び。",
        intro: "Dynamic Island、48MPメインカメラ、USB-C、そしてアルミニウムとカラーインフューズドガラスのデザイン。",
        camera: "48MP + 12MP",
        designTitle: "内側まで、色鮮やか。",
        designBody: "背面ガラス全体に色を浸透させ、航空宇宙産業レベルのアルミニウム、新しい曲線、前面Ceramic Shieldを組み合わせました。",
        cameraTitle: "48MP。超高解像度。驚くほど多才。",
        cameraBody: "48MPメインは豊かなディテールと光学品質の2倍望遠に対応。超広角は視野を0.5倍まで広げます。",
        performanceTitle: "A16 Bionic。確かなパワー。",
        performanceBody: "A16 Bionicがコンピュテーショナルフォトグラフィ、Dynamic Island、なめらかなグラフィックス、一日中の効率を支えます。",
      },
      {
        "15": { name: "iPhone 15", display: "6.1″ XDR", battery: "20時間" },
        "15-plus": { name: "iPhone 15 Plus", display: "6.7″ XDR", battery: "26時間" },
      },
    ),
  },
};

export function getIphone15ProductCopy(
  language: Language,
  model: Iphone15Model,
): ProductCopy {
  return iphone15ProductCopy[language][model];
}
