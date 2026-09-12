import type { Language } from "./i18n";
import type { IpadModel } from "./product-data";
import type { ProductCopy } from "./product-copy-types";

const ipadProductCopy: Record<Language, Record<IpadModel, ProductCopy>> = {
  en: {
    "ipad-pro-m5": {
      name: "iPad Pro",
      eyebrow: "POWER, MADE PORTABLE.",
      intro: "M5 performance, an Ultra Retina XDR display, and an exceptionally thin aluminum design for ambitious creative work.",
      display: "11″ / 13″ XDR",
      camera: "12MP Wide",
      battery: "10 hours",
      designTitle: "Pro capability. Impossibly thin.",
      designBody: "The 13-inch model measures just 5.1 mm thin. Its recycled aluminum enclosure stays light enough to take a complete studio anywhere.",
      cameraTitle: "Capture, scan, and create.",
      cameraBody: "A 12MP Wide camera records 4K ProRes, while the landscape 12MP Center Stage camera keeps calls naturally framed.",
      performanceTitle: "M5. A giant leap for AI.",
      performanceBody: "A next-generation CPU, GPU Neural Accelerators, and a faster media engine accelerate demanding graphics, AI, and video workflows.",
    },
    "ipad-air-m4": {
      name: "iPad Air",
      eyebrow: "FRESH AIR. SERIOUS POWER.",
      intro: "The M4 chip, two versatile sizes, Apple Intelligence, and Apple Pencil Pro support in a thin, colorful design.",
      display: "11″ / 13″ Retina",
      camera: "12MP Wide",
      battery: "10 hours",
      designTitle: "Two sizes. Four colors.",
      designBody: "Choose an ultraportable 11-inch canvas or a spacious 13-inch display, both in a light aluminum enclosure built for everyday mobility.",
      cameraTitle: "Centered from every angle.",
      cameraBody: "The landscape 12MP Center Stage camera follows the conversation, while the rear 12MP Wide camera captures detailed photos and 4K video.",
      performanceTitle: "M4 moves everything forward.",
      performanceBody: "A fast CPU, hardware-accelerated ray tracing, and a 16-core Neural Engine bring fluid creation and powerful on-device intelligence.",
    },
    "ipad-a16": {
      name: "iPad",
      eyebrow: "COLORFUL. CAPABLE. FUN.",
      intro: "An 11-inch Liquid Retina display, the A16 chip, and an all-screen design made for work, play, and creativity.",
      display: "11″ Retina",
      camera: "12MP Wide",
      battery: "10 hours",
      designTitle: "All screen. All color.",
      designBody: "A slim aluminum enclosure comes in Silver, Blue, Pink, and Yellow, with Touch ID and USB-C built into a simple all-screen design.",
      cameraTitle: "Look sharp. Stay centered.",
      cameraBody: "The 12MP Wide camera captures 4K video, and the landscape Center Stage camera makes video calls feel more natural.",
      performanceTitle: "A16. More joy in store.",
      performanceBody: "The efficient A16 chip keeps apps, games, multitasking, and creative tools responsive throughout the day.",
    },
    "ipad-mini-a17-pro": {
      name: "iPad mini",
      eyebrow: "SMALL SIZE. HUGE POSSIBILITIES.",
      intro: "An 8.3-inch Liquid Retina display, A17 Pro, and Apple Pencil Pro support in an ultraportable one-hand design.",
      display: "8.3″ Retina",
      camera: "12MP Wide",
      battery: "10 hours",
      designTitle: "The full iPad experience, miniaturized.",
      designBody: "A compact recycled aluminum enclosure slips into small bags while keeping a bright P3 display, USB-C, and Touch ID close at hand.",
      cameraTitle: "Scan it. Shoot it. Share it.",
      cameraBody: "The rear 12MP Wide camera records crisp 4K video, while the 12MP Center Stage camera keeps people in frame during calls.",
      performanceTitle: "A17 Pro. Pocket powerhouse.",
      performanceBody: "Hardware-accelerated ray tracing and a fast Neural Engine power advanced games, creative apps, and Apple Intelligence anywhere.",
    },
  },
  vi: {
    "ipad-pro-m5": {
      name: "iPad Pro",
      eyebrow: "SỨC MẠNH PRO. LUÔN BÊN BẠN.",
      intro: "Hiệu năng M5, màn hình Ultra Retina XDR và thiết kế nhôm siêu mỏng dành cho những quy trình sáng tạo đầy tham vọng.",
      display: "11″ / 13″ XDR",
      camera: "Góc Rộng 12MP",
      battery: "10 giờ",
      designTitle: "Năng lực Pro. Mỏng khó tin.",
      designBody: "Phiên bản 13 inch chỉ mỏng 5,1 mm. Vỏ nhôm tái chế đủ nhẹ để bạn mang cả studio đi khắp nơi.",
      cameraTitle: "Ghi hình, quét và sáng tạo.",
      cameraBody: "Camera Góc Rộng 12MP quay 4K ProRes, còn camera Center Stage 12MP nằm ngang luôn giữ bạn ở giữa khung hình.",
      performanceTitle: "M5. Bước tiến lớn cho AI.",
      performanceBody: "CPU thế hệ mới, Neural Accelerator trong GPU và Media Engine nhanh hơn tăng tốc đồ họa, AI và video chuyên nghiệp.",
    },
    "ipad-air-m4": {
      name: "iPad Air",
      eyebrow: "NHẸ NHÀNG. MẠNH MẼ.",
      intro: "Chip M4, hai kích thước linh hoạt, Apple Intelligence và Apple Pencil Pro trong một thiết kế mỏng nhẹ, đầy màu sắc.",
      display: "11″ / 13″ Retina",
      camera: "Góc Rộng 12MP",
      battery: "10 giờ",
      designTitle: "Hai kích thước. Bốn màu sắc.",
      designBody: "Chọn khung vẽ 11 inch cơ động hoặc màn hình 13 inch rộng rãi, cùng thiết kế nhôm nhẹ để luôn sẵn sàng di chuyển.",
      cameraTitle: "Luôn ở giữa mọi góc nhìn.",
      cameraBody: "Camera Center Stage 12MP nằm ngang bám theo cuộc trò chuyện, còn camera sau 12MP ghi ảnh chi tiết và video 4K.",
      performanceTitle: "M4 đưa mọi việc tiến xa.",
      performanceBody: "CPU nhanh, ray tracing tăng tốc phần cứng và Neural Engine 16 lõi mang đến sáng tạo mượt mà cùng AI trên thiết bị.",
    },
    "ipad-a16": {
      name: "iPad",
      eyebrow: "ĐA SẮC. ĐA NĂNG. ĐẦY HỨNG KHỞI.",
      intro: "Màn hình Liquid Retina 11 inch, chip A16 và thiết kế toàn màn hình cho công việc, giải trí và sáng tạo.",
      display: "11″ Retina",
      camera: "Góc Rộng 12MP",
      battery: "10 giờ",
      designTitle: "Toàn màn hình. Trọn màu sắc.",
      designBody: "Vỏ nhôm mỏng có các màu Bạc, Xanh Dương, Hồng và Vàng, tích hợp Touch ID cùng USB-C trong thiết kế tối giản.",
      cameraTitle: "Sắc nét. Luôn ở trung tâm.",
      cameraBody: "Camera Góc Rộng 12MP quay video 4K và camera Center Stage nằm ngang giúp các cuộc gọi tự nhiên hơn.",
      performanceTitle: "A16. Thêm nhiều niềm vui.",
      performanceBody: "Chip A16 hiệu quả giúp ứng dụng, trò chơi, đa nhiệm và công cụ sáng tạo luôn phản hồi nhanh suốt ngày dài.",
    },
    "ipad-mini-a17-pro": {
      name: "iPad mini",
      eyebrow: "NHỎ GỌN. KHẢ NĂNG KHỔNG LỒ.",
      intro: "Màn hình Liquid Retina 8,3 inch, A17 Pro và hỗ trợ Apple Pencil Pro trong thiết kế siêu cơ động dùng bằng một tay.",
      display: "8,3″ Retina",
      camera: "Góc Rộng 12MP",
      battery: "10 giờ",
      designTitle: "Trọn trải nghiệm iPad trong kích thước mini.",
      designBody: "Vỏ nhôm tái chế nhỏ gọn dễ dàng nằm trong túi nhỏ, đồng thời vẫn có màn hình P3, USB-C và Touch ID.",
      cameraTitle: "Quét. Chụp. Chia sẻ.",
      cameraBody: "Camera sau 12MP quay video 4K sắc nét, trong khi camera Center Stage 12MP giữ mọi người trong khung hình.",
      performanceTitle: "A17 Pro. Sức mạnh bỏ túi.",
      performanceBody: "Ray tracing tăng tốc phần cứng và Neural Engine nhanh giúp vận hành game, ứng dụng sáng tạo và Apple Intelligence ở mọi nơi.",
    },
  },
  pt: {
    "ipad-pro-m5": {
      name: "iPad Pro", eyebrow: "POTÊNCIA PRO. SEMPRE COM VOCÊ.", intro: "Desempenho M5, tela Ultra Retina XDR e estrutura de alumínio ultrafina para fluxos criativos exigentes.", display: "11″ / 13″ XDR", camera: "Grande-angular 12 MP", battery: "10 horas", designTitle: "Capacidade Pro. Incrivelmente fino.", designBody: "O modelo de 13 polegadas tem apenas 5,1 mm e leva um estúdio completo numa estrutura leve de alumínio reciclado.", cameraTitle: "Capture, digitalize e crie.", cameraBody: "A câmera de 12 MP grava ProRes 4K, enquanto a Center Stage horizontal mantém as chamadas enquadradas.", performanceTitle: "M5. Um salto enorme para a IA.", performanceBody: "CPU, aceleradores neurais na GPU e Media Engine avançados aceleram gráficos, IA e vídeo profissional.",
    },
    "ipad-air-m4": {
      name: "iPad Air", eyebrow: "LEVE. E MUITO POTENTE.", intro: "Chip M4, dois tamanhos, Apple Intelligence e Apple Pencil Pro num design fino e colorido.", display: "11″ / 13″ Retina", camera: "Grande-angular 12 MP", battery: "10 horas", designTitle: "Dois tamanhos. Quatro cores.", designBody: "Escolha a mobilidade de 11 polegadas ou o espaço de 13 polegadas, ambos numa estrutura leve de alumínio.", cameraTitle: "Sempre no centro.", cameraBody: "A Center Stage horizontal acompanha a conversa e a câmera traseira de 12 MP captura fotos detalhadas e vídeo 4K.", performanceTitle: "M4 faz tudo avançar.", performanceBody: "CPU rápida, ray tracing e Neural Engine de 16 núcleos dão fluidez à criação e à IA no aparelho.",
    },
    "ipad-a16": {
      name: "iPad", eyebrow: "COLORIDO. CAPAZ. DIVERTIDO.", intro: "Tela Liquid Retina de 11 polegadas, chip A16 e design de ponta a ponta para trabalhar, jogar e criar.", display: "11″ Retina", camera: "Grande-angular 12 MP", battery: "10 horas", designTitle: "Tudo tela. Toda cor.", designBody: "A estrutura fina de alumínio combina quatro cores com Touch ID e USB-C.", cameraTitle: "Nítido e centralizado.", cameraBody: "A câmera de 12 MP grava em 4K e a Center Stage horizontal torna as chamadas mais naturais.", performanceTitle: "A16. Mais possibilidades.", performanceBody: "O eficiente A16 mantém apps, jogos, multitarefa e criação responsivos ao longo do dia.",
    },
    "ipad-mini-a17-pro": {
      name: "iPad mini", eyebrow: "PEQUENO NO TAMANHO. GIGANTE NAS POSSIBILIDADES.", intro: "Tela Liquid Retina de 8,3 polegadas, A17 Pro e Apple Pencil Pro num design ultraportátil.", display: "8,3″ Retina", camera: "Grande-angular 12 MP", battery: "10 horas", designTitle: "Toda a experiência iPad em miniatura.", designBody: "A estrutura compacta de alumínio mantém tela P3, USB-C e Touch ID sempre à mão.", cameraTitle: "Digitalize, fotografe e compartilhe.", cameraBody: "A câmera traseira grava vídeo 4K e a Center Stage de 12 MP mantém todos no enquadramento.", performanceTitle: "A17 Pro. Potência de bolso.", performanceBody: "Ray tracing e Neural Engine rápidos impulsionam jogos, criação e Apple Intelligence em qualquer lugar.",
    },
  },
  es: {
    "ipad-pro-m5": {
      name: "iPad Pro", eyebrow: "POTENCIA PRO. SIEMPRE CONTIGO.", intro: "Rendimiento M5, pantalla Ultra Retina XDR y estructura de aluminio ultrafina para flujos creativos exigentes.", display: "11″ / 13″ XDR", camera: "Gran angular 12 MP", battery: "10 horas", designTitle: "Capacidad Pro. Increíblemente fino.", designBody: "El modelo de 13 pulgadas mide solo 5,1 mm y lleva un estudio completo en una estructura ligera de aluminio reciclado.", cameraTitle: "Captura, escanea y crea.", cameraBody: "La cámara de 12 MP graba ProRes 4K y la cámara Center Stage horizontal mantiene las llamadas bien encuadradas.", performanceTitle: "M5. Un gran salto para la IA.", performanceBody: "La nueva CPU, los aceleradores neuronales de la GPU y el Media Engine aceleran gráficos, IA y vídeo profesional.",
    },
    "ipad-air-m4": {
      name: "iPad Air", eyebrow: "LIGERO. MUY POTENTE.", intro: "Chip M4, dos tamaños, Apple Intelligence y Apple Pencil Pro en un diseño fino y colorido.", display: "11″ / 13″ Retina", camera: "Gran angular 12 MP", battery: "10 horas", designTitle: "Dos tamaños. Cuatro colores.", designBody: "Elige la movilidad de 11 pulgadas o el espacio de 13 pulgadas, ambos en una ligera estructura de aluminio.", cameraTitle: "Siempre en el centro.", cameraBody: "Center Stage horizontal sigue la conversación y la cámara trasera de 12 MP captura fotos detalladas y vídeo 4K.", performanceTitle: "M4 lo impulsa todo.", performanceBody: "CPU rápida, ray tracing y Neural Engine de 16 núcleos aportan fluidez creativa e IA en el dispositivo.",
    },
    "ipad-a16": {
      name: "iPad", eyebrow: "COLORIDO. CAPAZ. DIVERTIDO.", intro: "Pantalla Liquid Retina de 11 pulgadas, chip A16 y diseño todo pantalla para trabajar, jugar y crear.", display: "11″ Retina", camera: "Gran angular 12 MP", battery: "10 horas", designTitle: "Todo pantalla. Todo color.", designBody: "La fina estructura de aluminio combina cuatro colores con Touch ID y USB-C.", cameraTitle: "Nítido y centrado.", cameraBody: "La cámara de 12 MP graba vídeo 4K y Center Stage horizontal hace que las llamadas sean más naturales.", performanceTitle: "A16. Más por disfrutar.", performanceBody: "El eficiente A16 mantiene ágiles las apps, los juegos, la multitarea y las herramientas creativas.",
    },
    "ipad-mini-a17-pro": {
      name: "iPad mini", eyebrow: "PEQUEÑO TAMAÑO. ENORMES POSIBILIDADES.", intro: "Pantalla Liquid Retina de 8,3 pulgadas, A17 Pro y Apple Pencil Pro en un diseño ultraportátil.", display: "8,3″ Retina", camera: "Gran angular 12 MP", battery: "10 horas", designTitle: "Toda la experiencia iPad en miniatura.", designBody: "La compacta estructura de aluminio conserva pantalla P3, USB-C y Touch ID siempre a mano.", cameraTitle: "Escanea, captura y comparte.", cameraBody: "La cámara trasera graba vídeo 4K y Center Stage de 12 MP mantiene a todos en el encuadre.", performanceTitle: "A17 Pro. Potencia de bolsillo.", performanceBody: "Ray tracing y Neural Engine rápido impulsan juegos, creación y Apple Intelligence en cualquier lugar.",
    },
  },
  zh: {
    "ipad-pro-m5": {
      name: "iPad Pro", eyebrow: "PRO 级实力，随身而行。", intro: "M5 芯片、超视网膜 XDR 显示屏与超薄铝金属设计，为专业创作提供强大性能。", display: "11″ / 13″ XDR", camera: "1200 万像素广角", battery: "10 小时", designTitle: "Pro 级能力，薄得惊人。", designBody: "13 英寸机型仅薄 5.1 毫米，轻巧的再生铝金属机身让完整工作室随你出发。", cameraTitle: "拍摄、扫描、创作。", cameraBody: "1200 万像素广角相机可录制 4K ProRes，横向 Center Stage 相机让视频通话始终居中。", performanceTitle: "M5，AI 能力大步跃升。", performanceBody: "新一代 CPU、GPU 神经网络加速器与媒体引擎，加速图形、AI 和专业视频工作流。",
    },
    "ipad-air-m4": {
      name: "iPad Air", eyebrow: "轻盈，更强大。", intro: "M4 芯片、两种尺寸、Apple 智能与 Apple Pencil Pro 支持，融入轻薄多彩设计。", display: "11″ / 13″ Retina", camera: "1200 万像素广角", battery: "10 小时", designTitle: "两种尺寸，四款配色。", designBody: "可选便携的 11 英寸或宽阔的 13 英寸显示屏，两者都采用轻巧铝金属机身。", cameraTitle: "始终保持居中。", cameraBody: "横向 Center Stage 相机自动跟随交流，后置 1200 万像素相机拍摄细腻照片与 4K 视频。", performanceTitle: "M4，推动一切向前。", performanceBody: "高速 CPU、硬件加速光线追踪与 16 核神经网络引擎带来流畅创作和设备端 AI。",
    },
    "ipad-a16": {
      name: "iPad", eyebrow: "多彩、多能、妙趣横生。", intro: "11 英寸 Liquid 视网膜显示屏、A16 芯片和全面屏设计，工作娱乐创作都得心应手。", display: "11″ Retina", camera: "1200 万像素广角", battery: "10 小时", designTitle: "全面屏，满目多彩。", designBody: "纤薄铝金属机身提供四款配色，并集成 Touch ID 与 USB-C。", cameraTitle: "清晰出镜，始终居中。", cameraBody: "1200 万像素广角相机录制 4K 视频，横向 Center Stage 相机令通话更自然。", performanceTitle: "A16，乐趣再加码。", performanceBody: "高效 A16 让应用、游戏、多任务和创作工具全天保持灵敏响应。",
    },
    "ipad-mini-a17-pro": {
      name: "iPad mini", eyebrow: "小巧机身，大有可能。", intro: "8.3 英寸 Liquid 视网膜显示屏、A17 Pro 与 Apple Pencil Pro 支持，单手即可轻松携带。", display: "8.3″ Retina", camera: "1200 万像素广角", battery: "10 小时", designTitle: "完整 iPad 体验，浓缩于小巧机身。", designBody: "紧凑铝金属机身保留 P3 显示屏、USB-C 与 Touch ID，轻松装入小包。", cameraTitle: "扫描、拍摄、分享。", cameraBody: "后置相机录制清晰 4K 视频，1200 万像素 Center Stage 相机让所有人保持在画面中。", performanceTitle: "A17 Pro，口袋里的强大性能。", performanceBody: "硬件加速光线追踪与高速神经网络引擎随时驱动游戏、创作和 Apple 智能。",
    },
  },
  ja: {
    "ipad-pro-m5": {
      name: "iPad Pro", eyebrow: "PROのパワーを、どこへでも。", intro: "M5の性能、Ultra Retina XDRディスプレイ、驚くほど薄いアルミニウムボディで高度な制作を支えます。", display: "11″ / 13″ XDR", camera: "12MP広角", battery: "10時間", designTitle: "Proの能力。信じられない薄さ。", designBody: "13インチモデルはわずか5.1mm。軽量な再生アルミニウムのボディでスタジオを持ち運べます。", cameraTitle: "撮影、スキャン、制作。", cameraBody: "12MP広角カメラは4K ProResに対応し、横向きのセンターフレームカメラが通話を自然に保ちます。", performanceTitle: "M5。AIの大きな飛躍。", performanceBody: "次世代CPU、GPUのNeural Accelerator、高速Media Engineがグラフィックス、AI、映像制作を加速します。",
    },
    "ipad-air-m4": {
      name: "iPad Air", eyebrow: "軽やかに、パワフルに。", intro: "M4、2つのサイズ、Apple Intelligence、Apple Pencil Proへの対応を薄くカラフルなデザインに。", display: "11″ / 13″ Retina", camera: "12MP広角", battery: "10時間", designTitle: "2つのサイズ。4つのカラー。", designBody: "携帯性に優れた11インチと広々した13インチ。どちらも軽いアルミニウムボディです。", cameraTitle: "いつでも画面の中心に。", cameraBody: "横向きセンターフレームが会話を追い、背面12MPカメラが精細な写真と4Kビデオを撮影します。", performanceTitle: "M4で、すべてを前へ。", performanceBody: "高速CPU、レイトレーシング、16コアNeural Engineが制作とデバイス上のAIを滑らかにします。",
    },
    "ipad-a16": {
      name: "iPad", eyebrow: "カラフル。万能。楽しい。", intro: "11インチLiquid Retinaディスプレイ、A16、オールスクリーンデザインで仕事も遊びも創作も。", display: "11″ Retina", camera: "12MP広角", battery: "10時間", designTitle: "画面いっぱい。カラーいっぱい。", designBody: "薄いアルミニウムボディに4つのカラー、Touch ID、USB-Cを備えています。", cameraTitle: "鮮明に、いつも中心に。", cameraBody: "12MP広角カメラで4Kビデオを撮影し、横向きセンターフレームが通話を自然にします。", performanceTitle: "A16。楽しさをさらに。", performanceBody: "効率的なA16がアプリ、ゲーム、マルチタスク、制作ツールを一日中軽快に動かします。",
    },
    "ipad-mini-a17-pro": {
      name: "iPad mini", eyebrow: "小さなサイズ。大きな可能性。", intro: "8.3インチLiquid Retinaディスプレイ、A17 Pro、Apple Pencil Proへの対応を片手サイズに。", display: "8.3″ Retina", camera: "12MP広角", battery: "10時間", designTitle: "iPadのすべてを、ミニサイズに。", designBody: "コンパクトなアルミニウムボディにP3ディスプレイ、USB-C、Touch IDを搭載しています。", cameraTitle: "スキャン、撮影、共有。", cameraBody: "背面カメラは鮮明な4Kビデオを撮影し、12MPセンターフレームが全員を画面内に収めます。", performanceTitle: "A17 Pro。ポケットサイズの実力。", performanceBody: "レイトレーシングと高速Neural Engineがゲーム、制作、Apple Intelligenceをどこでも動かします。",
    },
  },
};

export function getIpadProductCopy(language: Language, model: IpadModel) {
  return ipadProductCopy[language][model];
}
