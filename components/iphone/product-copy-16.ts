import type { Language } from "./i18n";
import type { Iphone16Model } from "./product-data";
import type { ProductCopy } from "./product-copy-types";

type ProductCopyBase = Omit<ProductCopy, "name" | "display" | "battery">;
type ProductCopyVariant = Pick<ProductCopy, "name" | "display" | "battery">;

function productVariants<ModelId extends Iphone16Model>(
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

const iphone16ProductCopy: Record<Language, Record<Iphone16Model, ProductCopy>> = {
  en: {
    ...productVariants(
      {
        eyebrow: "HELLO, APPLE INTELLIGENCE.",
        intro: "A titanium design, A18 Pro, Camera Control, and a more advanced Pro camera system.",
        camera: "48MP Pro",
        designTitle: "Titanium. Strong, light, and thoroughly Pro.",
        designBody: "Grade 5 titanium and a refined internal structure make room for larger batteries while improving heat dissipation.",
        cameraTitle: "So far. So close.",
        cameraBody: "A 48MP Fusion camera, 48MP Ultra Wide, and 5x Telephoto deliver detailed images from macro to 120 mm.",
        performanceTitle: "A18 Pro. A phenomenally powerful chip.",
        performanceBody: "A18 Pro powers Apple Intelligence, console-class games, advanced video features, and efficient all-day battery life.",
      },
      {
        "16-pro": { name: "iPhone 16 Pro", display: "6.3″ ProMotion", battery: "27 hours" },
        "16-pro-max": { name: "iPhone 16 Pro Max", display: "6.9″ ProMotion", battery: "33 hours" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "HELLO, APPLE INTELLIGENCE.",
        intro: "The A18 chip, Camera Control, and a versatile 48MP Fusion camera in a durable aluminum design.",
        camera: "Dual Fusion",
        designTitle: "Beautiful. Durable. Built to last.",
        designBody: "Aerospace-grade aluminum, color-infused glass, and Ceramic Shield create a colorful design ready for everyday life.",
        cameraTitle: "Take total Camera Control.",
        cameraBody: "The 48MP Fusion Main and Ultra Wide cameras cover macro, 0.5x, 1x, and optical-quality 2x perspectives.",
        performanceTitle: "A18. Future-proof power.",
        performanceBody: "A18 brings Apple Intelligence, hardware-accelerated ray tracing, and excellent efficiency to iPhone 16.",
      },
      {
        "16": { name: "iPhone 16", display: "6.1″ XDR", battery: "22 hours" },
        "16-plus": { name: "iPhone 16 Plus", display: "6.7″ XDR", battery: "27 hours" },
      },
    ),
    "16e": {
      name: "iPhone 16e",
      eyebrow: "LATEST IPHONE. GREATEST PRICE.",
      intro: "A18, Apple Intelligence, a 48MP Fusion camera, and supersized battery life in a durable 6.1-inch design.",
      display: "6.1″ XDR",
      camera: "48MP Fusion",
      battery: "26 hours",
      designTitle: "Made to last. And last.",
      designBody: "A durable aluminum enclosure, Ceramic Shield front, and water resistance make iPhone 16e ready for everyday use.",
      cameraTitle: "A two-in-one camera system.",
      cameraBody: "The 48MP Fusion camera captures super-high-resolution photos and optical-quality 2x Telephoto from one lens.",
      performanceTitle: "A18. Fast into the future.",
      performanceBody: "A18 powers Apple Intelligence, demanding games, and remarkable efficiency for up to 26 hours of video playback.",
    },
  },
  vi: {
    ...productVariants(
      {
        eyebrow: "XIN CHÀO, APPLE INTELLIGENCE.",
        intro: "Thiết kế titan, A18 Pro, Điều Khiển Camera và hệ thống camera Pro tiên tiến hơn.",
        camera: "Pro 48MP",
        designTitle: "Titan. Bền, nhẹ và đậm chất Pro.",
        designBody: "Titan Grade 5 cùng cấu trúc bên trong tinh chỉnh tạo chỗ cho pin lớn hơn và cải thiện khả năng tản nhiệt.",
        cameraTitle: "Xa thật xa. Gần thật gần.",
        cameraBody: "Fusion 48MP, Ultra Wide 48MP và Telephoto 5x ghi lại chi tiết từ ảnh macro đến tiêu cự 120 mm.",
        performanceTitle: "A18 Pro. Chip mạnh mẽ phi thường.",
        performanceBody: "A18 Pro vận hành Apple Intelligence, game chuẩn console, video chuyên nghiệp và pin dùng cả ngày hiệu quả.",
      },
      {
        "16-pro": { name: "iPhone 16 Pro", display: "6,3″ ProMotion", battery: "27 giờ" },
        "16-pro-max": { name: "iPhone 16 Pro Max", display: "6,9″ ProMotion", battery: "33 giờ" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "XIN CHÀO, APPLE INTELLIGENCE.",
        intro: "Chip A18, Điều Khiển Camera và camera Fusion 48MP linh hoạt trong thiết kế nhôm bền bỉ.",
        camera: "Fusion Kép",
        designTitle: "Tuyệt đẹp. Bền bỉ. Dùng dài lâu.",
        designBody: "Nhôm chuẩn hàng không, kính pha màu và Ceramic Shield tạo nên thiết kế rực rỡ, sẵn sàng cho mỗi ngày.",
        cameraTitle: "Toàn quyền Điều Khiển Camera.",
        cameraBody: "Fusion Main 48MP và Ultra Wide hỗ trợ macro cùng các góc nhìn 0,5x, 1x và 2x chất lượng quang học.",
        performanceTitle: "A18. Sức mạnh cho tương lai.",
        performanceBody: "A18 mang Apple Intelligence, ray tracing tăng tốc phần cứng và hiệu suất năng lượng vượt trội lên iPhone 16.",
      },
      {
        "16": { name: "iPhone 16", display: "6,1″ XDR", battery: "22 giờ" },
        "16-plus": { name: "iPhone 16 Plus", display: "6,7″ XDR", battery: "27 giờ" },
      },
    ),
    "16e": {
      name: "iPhone 16e",
      eyebrow: "IPHONE MỚI NHẤT. GIÁ TUYỆT VỜI.",
      intro: "A18, Apple Intelligence, camera Fusion 48MP và thời lượng pin vượt trội trong thiết kế 6,1 inch bền bỉ.",
      display: "6,1″ XDR",
      camera: "Fusion 48MP",
      battery: "26 giờ",
      designTitle: "Bền bỉ dài lâu.",
      designBody: "Khung nhôm chắc chắn, Ceramic Shield ở mặt trước và khả năng kháng nước giúp iPhone 16e sẵn sàng cho mỗi ngày.",
      cameraTitle: "Một hệ thống camera hai trong một.",
      cameraBody: "Camera Fusion 48MP chụp ảnh siêu phân giải và Telephoto 2x chất lượng quang học chỉ với một ống kính.",
      performanceTitle: "A18. Nhanh tiến vào tương lai.",
      performanceBody: "A18 vận hành Apple Intelligence, game nặng và tối ưu hiệu năng để phát video đến 26 giờ.",
    },
  },
  pt: {
    ...productVariants(
      {
        eyebrow: "OLÁ, APPLE INTELLIGENCE.",
        intro: "Design em titânio, A18 Pro, Controle da Câmera e um sistema de câmera Pro ainda mais avançado.",
        camera: "Pro de 48 MP",
        designTitle: "Titânio. Forte, leve e totalmente Pro.",
        designBody: "O titânio grau 5 e a estrutura interna refinada abrem espaço para baterias maiores e melhor dissipação de calor.",
        cameraTitle: "Tão longe. Tão perto.",
        cameraBody: "Fusion de 48 MP, ultra-angular de 48 MP e teleobjetiva 5x registram detalhes do macro aos 120 mm.",
        performanceTitle: "A18 Pro. Um chip fenomenal.",
        performanceBody: "O A18 Pro move Apple Intelligence, jogos de console, vídeo avançado e uma bateria eficiente para o dia todo.",
      },
      {
        "16-pro": { name: "iPhone 16 Pro", display: "6,3″ ProMotion", battery: "27 horas" },
        "16-pro-max": { name: "iPhone 16 Pro Max", display: "6,9″ ProMotion", battery: "33 horas" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "OLÁ, APPLE INTELLIGENCE.",
        intro: "Chip A18, Controle da Câmera e câmera Fusion de 48 MP em um design resistente de alumínio.",
        camera: "Fusion dupla",
        designTitle: "Bonito. Resistente. Feito para durar.",
        designBody: "Alumínio aeroespacial, vidro colorido por infusão e Ceramic Shield criam um design vibrante para todos os dias.",
        cameraTitle: "Controle total da câmera.",
        cameraBody: "As câmeras Fusion principal de 48 MP e ultra-angular cobrem macro e perspectivas 0,5x, 1x e 2x.",
        performanceTitle: "A18. Potência para o futuro.",
        performanceBody: "O A18 traz Apple Intelligence, ray tracing acelerado por hardware e excelente eficiência ao iPhone 16.",
      },
      {
        "16": { name: "iPhone 16", display: "6,1″ XDR", battery: "22 horas" },
        "16-plus": { name: "iPhone 16 Plus", display: "6,7″ XDR", battery: "27 horas" },
      },
    ),
    "16e": {
      name: "iPhone 16e",
      eyebrow: "O IPHONE MAIS RECENTE. UM PREÇO INCRÍVEL.",
      intro: "A18, Apple Intelligence, câmera Fusion de 48 MP e bateria gigante em um design resistente de 6,1 polegadas.",
      display: "6,1″ XDR",
      camera: "Fusion de 48 MP",
      battery: "26 horas",
      designTitle: "Feito para durar muito.",
      designBody: "Estrutura de alumínio, Ceramic Shield frontal e resistência à água deixam o iPhone 16e pronto para o dia a dia.",
      cameraTitle: "Sistema de câmera dois em um.",
      cameraBody: "A Fusion de 48 MP faz fotos em alta resolução e teleobjetiva 2x com qualidade óptica usando uma só lente.",
      performanceTitle: "A18. Rápido rumo ao futuro.",
      performanceBody: "O A18 move Apple Intelligence e jogos exigentes com eficiência para até 26 horas de vídeo.",
    },
  },
  es: {
    ...productVariants(
      {
        eyebrow: "HOLA, APPLE INTELLIGENCE.",
        intro: "Diseño de titanio, A18 Pro, Control de Cámara y un sistema de cámaras Pro aún más avanzado.",
        camera: "Pro de 48 MP",
        designTitle: "Titanio. Fuerte, ligero y totalmente Pro.",
        designBody: "El titanio de grado 5 y la estructura interna refinada dejan espacio para baterías más grandes y mejor disipación térmica.",
        cameraTitle: "Tan lejos. Tan cerca.",
        cameraBody: "Fusion de 48 MP, ultra gran angular de 48 MP y teleobjetivo 5x capturan detalle desde macro hasta 120 mm.",
        performanceTitle: "A18 Pro. Un chip extraordinario.",
        performanceBody: "A18 Pro mueve Apple Intelligence, juegos de consola, vídeo avanzado y una batería eficiente para todo el día.",
      },
      {
        "16-pro": { name: "iPhone 16 Pro", display: "6,3″ ProMotion", battery: "27 horas" },
        "16-pro-max": { name: "iPhone 16 Pro Max", display: "6,9″ ProMotion", battery: "33 horas" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "HOLA, APPLE INTELLIGENCE.",
        intro: "Chip A18, Control de Cámara y cámara Fusion de 48 MP en un resistente diseño de aluminio.",
        camera: "Fusion dual",
        designTitle: "Bonito. Resistente. Hecho para durar.",
        designBody: "Aluminio aeroespacial, vidrio tintado y Ceramic Shield crean un diseño lleno de color para cada día.",
        cameraTitle: "Control total de la cámara.",
        cameraBody: "Fusion principal de 48 MP y ultra gran angular cubren macro y perspectivas 0,5x, 1x y 2x.",
        performanceTitle: "A18. Potencia para el futuro.",
        performanceBody: "A18 incorpora Apple Intelligence, ray tracing por hardware y una excelente eficiencia al iPhone 16.",
      },
      {
        "16": { name: "iPhone 16", display: "6,1″ XDR", battery: "22 horas" },
        "16-plus": { name: "iPhone 16 Plus", display: "6,7″ XDR", battery: "27 horas" },
      },
    ),
    "16e": {
      name: "iPhone 16e",
      eyebrow: "EL IPHONE MÁS RECIENTE. UN PRECIO INCREÍBLE.",
      intro: "A18, Apple Intelligence, cámara Fusion de 48 MP y enorme autonomía en un resistente diseño de 6,1 pulgadas.",
      display: "6,1″ XDR",
      camera: "Fusion de 48 MP",
      battery: "26 horas",
      designTitle: "Hecho para durar y durar.",
      designBody: "La carcasa de aluminio, Ceramic Shield frontal y resistencia al agua preparan al iPhone 16e para el día a día.",
      cameraTitle: "Un sistema de cámara dos en uno.",
      cameraBody: "La Fusion de 48 MP captura alta resolución y teleobjetivo 2x de calidad óptica con una sola lente.",
      performanceTitle: "A18. Rápido hacia el futuro.",
      performanceBody: "A18 mueve Apple Intelligence y juegos exigentes con eficiencia para ofrecer hasta 26 horas de vídeo.",
    },
  },
  zh: {
    ...productVariants(
      {
        eyebrow: "你好，APPLE 智能。",
        intro: "钛金属设计、A18 Pro、相机控制，以及更先进的 Pro 级相机系统。",
        camera: "4800 万像素 Pro",
        designTitle: "钛金属，坚固轻盈，处处 Pro。",
        designBody: "5 级钛金属与优化内部结构，为更大电池腾出空间，同时提升散热表现。",
        cameraTitle: "远近之间，清晰呈现。",
        cameraBody: "4800 万像素 Fusion、4800 万像素超广角和 5 倍长焦，从微距到 120 毫米都能细腻捕捉。",
        performanceTitle: "A18 Pro，实力非凡。",
        performanceBody: "A18 Pro 驱动 Apple 智能、主机级游戏和先进视频功能，同时带来高效全天续航。",
      },
      {
        "16-pro": { name: "iPhone 16 Pro", display: "6.3″ ProMotion", battery: "27 小时" },
        "16-pro-max": { name: "iPhone 16 Pro Max", display: "6.9″ ProMotion", battery: "33 小时" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "你好，APPLE 智能。",
        intro: "A18 芯片、相机控制，以及灵活的 4800 万像素 Fusion 相机，尽在耐用铝金属设计中。",
        camera: "双 Fusion 相机",
        designTitle: "亮眼、耐用，经得起时间。",
        designBody: "航空级铝金属、融色玻璃与 Ceramic Shield，打造缤纷且适合日常使用的设计。",
        cameraTitle: "相机控制，尽在指尖。",
        cameraBody: "4800 万像素 Fusion 主摄与超广角支持微距，以及 0.5 倍、1 倍和光学品质 2 倍视角。",
        performanceTitle: "A18，为未来蓄力。",
        performanceBody: "A18 为 iPhone 16 带来 Apple 智能、硬件加速光线追踪与出色能效。",
      },
      {
        "16": { name: "iPhone 16", display: "6.1″ XDR", battery: "22 小时" },
        "16-plus": { name: "iPhone 16 Plus", display: "6.7″ XDR", battery: "27 小时" },
      },
    ),
    "16e": {
      name: "iPhone 16e",
      eyebrow: "新款 IPHONE，超值之选。",
      intro: "A18、Apple 智能、4800 万像素 Fusion 相机与超长续航，装进耐用的 6.1 英寸设计。",
      display: "6.1″ XDR",
      camera: "4800 万像素 Fusion",
      battery: "26 小时",
      designTitle: "经久耐用，再久一点。",
      designBody: "坚固铝金属机身、正面 Ceramic Shield 与抗水性能，让 iPhone 16e 从容应对日常。",
      cameraTitle: "二合一相机系统。",
      cameraBody: "4800 万像素 Fusion 相机以一颗镜头拍摄超高分辨率照片和光学品质 2 倍长焦。",
      performanceTitle: "A18，快步迈向未来。",
      performanceBody: "A18 高效驱动 Apple 智能与大型游戏，并支持最长 26 小时视频播放。",
    },
  },
  ja: {
    ...productVariants(
      {
        eyebrow: "APPLE INTELLIGENCEのために。",
        intro: "チタニウムデザイン、A18 Pro、カメラコントロール、さらに進化したProカメラシステム。",
        camera: "48MP Pro",
        designTitle: "強く、軽く、どこまでもPro。",
        designBody: "Grade 5チタニウムと洗練された内部構造により、大容量バッテリーと優れた放熱性能を実現しました。",
        cameraTitle: "遠くも、近くも。",
        cameraBody: "48MP Fusion、48MP超広角、5倍望遠が、マクロから120mmまで精細に捉えます。",
        performanceTitle: "A18 Pro。驚異的なパワー。",
        performanceBody: "A18 ProがApple Intelligence、コンソール級ゲーム、高度なビデオ機能、一日中使える効率を支えます。",
      },
      {
        "16-pro": { name: "iPhone 16 Pro", display: "6.3″ ProMotion", battery: "27時間" },
        "16-pro-max": { name: "iPhone 16 Pro Max", display: "6.9″ ProMotion", battery: "33時間" },
      },
    ),
    ...productVariants(
      {
        eyebrow: "APPLE INTELLIGENCEのために。",
        intro: "A18チップ、カメラコントロール、多才な48MP Fusionカメラを頑丈なアルミニウムボディに。",
        camera: "デュアルFusion",
        designTitle: "美しく、頑丈。長く使える設計。",
        designBody: "航空宇宙産業レベルのアルミニウム、カラーインフューズドガラス、Ceramic Shieldを採用しました。",
        cameraTitle: "カメラを自在にコントロール。",
        cameraBody: "48MP Fusionメインと超広角が、マクロ、0.5倍、1倍、光学品質の2倍に対応します。",
        performanceTitle: "A18。未来を動かすパワー。",
        performanceBody: "A18がApple Intelligence、ハードウェアアクセラレーテッドレイトレーシング、優れた効率をもたらします。",
      },
      {
        "16": { name: "iPhone 16", display: "6.1″ XDR", battery: "22時間" },
        "16-plus": { name: "iPhone 16 Plus", display: "6.7″ XDR", battery: "27時間" },
      },
    ),
    "16e": {
      name: "iPhone 16e",
      eyebrow: "最新のIPHONEを、最高にうれしいプライスで。",
      intro: "A18、Apple Intelligence、48MP Fusionカメラ、驚異的なバッテリーを頑丈な6.1インチボディに。",
      display: "6.1″ XDR",
      camera: "48MP Fusion",
      battery: "26時間",
      designTitle: "いつまでも使える頑丈さ。",
      designBody: "丈夫なアルミニウム、前面Ceramic Shield、耐水性能により、iPhone 16eは毎日に応えます。",
      cameraTitle: "一台二役のカメラシステム。",
      cameraBody: "48MP Fusionカメラ一つで、超高解像度写真と光学品質の2倍望遠を撮影できます。",
      performanceTitle: "A18。未来へ高速前進。",
      performanceBody: "A18がApple Intelligenceと高負荷ゲームを効率よく動かし、最大26時間のビデオ再生を実現します。",
    },
  },
};

export function getIphone16ProductCopy(
  language: Language,
  model: Iphone16Model,
): ProductCopy {
  return iphone16ProductCopy[language][model];
}
