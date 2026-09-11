import type { Finish, Model } from "./product-data";

export type Language = "en" | "vi" | "pt" | "es" | "zh" | "ja";

type ModelContent = {
  name: string;
  eyebrow: string;
  intro: string;
  display: string;
  camera: string;
  battery: string;
};

export type Translation = {
  meta: { title: string; description: string };
  header: {
    homeLabel: string;
    productLab: string;
    sources: string;
    language: string;
  };
  gesture: { rotate: string; zoom: string };
  controls: {
    panelLabel: string;
    model: string;
    finish: string;
    pose: string;
    closed: string;
    landscape: string;
    collapse: string;
    explode: string;
    resetView: string;
    chooseFinish: (name: string) => string;
    display: string;
    camera: string;
    power: string;
  };
  journey: {
    introKicker: string;
    scrollCue: string;
    designKicker: string;
    cameraKicker: string;
    performanceKicker: string;
    turnKicker: string;
    designTitle: Record<Model, string>;
    designBody: Record<Model, string>;
    cameraTitle: Record<Model, string>;
    cameraBody: Record<Model, string>;
    performanceTitle: string;
    performanceBody: string;
    finalTitle: readonly [string, string];
    finalBody: string;
    finalAction: string;
  };
  sources: {
    badge: string;
    title: string;
    description: string;
    navLabel: string;
    resources: string;
    experience: string;
    backToTop: string;
    conceptNote: string;
  };
  finishes: Record<Finish, string>;
  models: Record<Model, ModelContent>;
};

export const languageOptions: ReadonlyArray<{
  value: Language;
  label: string;
  flagCode: string;
}> = [
  { value: "en", label: "English", flagCode: "gb" },
  { value: "vi", label: "Tiếng Việt", flagCode: "vn" },
  { value: "pt", label: "Português", flagCode: "pt" },
  { value: "es", label: "Español", flagCode: "es" },
  { value: "zh", label: "简体中文", flagCode: "cn" },
  { value: "ja", label: "日本語", flagCode: "jp" },
];

export const htmlLanguage: Record<Language, string> = {
  en: "en",
  vi: "vi",
  pt: "pt",
  es: "es",
  zh: "zh-Hans",
  ja: "ja",
};

export const translations: Record<Language, Translation> = {
  en: {
    meta: {
      title: "iPhone 18 Pro + iPhone Duo — Interactive 3D",
      description: "An interactive 3D experience for iPhone 18 Pro, Pro Max, and iPhone Duo.",
    },
    header: {
      homeLabel: "iPhone 18 interactive, return to the start",
      productLab: "INTERACTIVE PRODUCT LAB",
      sources: "SOURCES",
      language: "Choose display language",
    },
    gesture: { rotate: "DRAG TO ROTATE", zoom: "+ / − KEYS TO ZOOM" },
    controls: {
      panelLabel: "3D model controls",
      model: "MODEL",
      finish: "FINISH",
      pose: "POSE",
      closed: "Closed",
      landscape: "Landscape",
      collapse: "Collapse",
      explode: "Explode",
      resetView: "Reset view",
      chooseFinish: (name) => `Choose ${name} finish`,
      display: "DISPLAY",
      camera: "CAMERA",
      power: "POWER",
    },
    journey: {
      introKicker: "APPLE / 2026",
      scrollCue: "SCROLL TO DISASSEMBLE ↓",
      designKicker: "DESIGN / 01",
      cameraKicker: "CAMERA / 02",
      performanceKicker: "PERFORMANCE / 03",
      turnKicker: "YOUR TURN / 04",
      designTitle: {
        pro: "Our finest unibody of work.",
        duo: "A new iPhone enters the fold.",
      },
      designBody: {
        pro: "A seamless aluminum unibody wraps around Ceramic Shield 2. The Pro camera system flows into a continuous plateau across the back.",
        duo: "Two balanced halves pivot around a Grade 5 titanium hinge. Open it flat for the largest display ever on iPhone.",
      },
      cameraTitle: {
        pro: "Variable aperture. Total control.",
        duo: "Shoot from front to back.",
      },
      cameraBody: {
        pro: "Three 48MP Fusion cameras, an ƒ/1.48–ƒ/4.0 aperture, and 8x optical zoom. Rotate the model to explore the optical system.",
        duo: "Dual 48MP Fusion cameras, Duo Preview, and perspectives only a foldable design can create.",
      },
      performanceTitle: "Vapor-cooled A20 Pro.",
      performanceBody: "A next-generation vapor chamber. Dual 16-core Neural Engines. Sustained performance, even while running AI directly on the device.",
      finalTitle: ["Don’t just look.", "Take control."],
      finalBody: "Use the controls to switch models, finishes, and poses, then separate every layer of hardware in 3D space.",
      finalAction: "Explode the hardware",
    },
    sources: {
      badge: "APPLE AR MESH / THREE.JS",
      title: "Shaped from real geometry.",
      description: "Topology, curves, camera geometry, UVs, and materials are converted directly from Apple’s public AR assets.",
      navLabel: "Reference sources",
      resources: "RESOURCES",
      experience: "EXPERIENCE",
      backToTop: "Back to the top",
      conceptNote: "Independent product concept visualization.",
    },
    finishes: {
      burgundy: "Burgundy",
      glacier: "Glacier",
      silver: "Silver",
      black: "Black",
      "night-sky": "Night Sky",
      "star-white": "Star White",
    },
    models: {
      pro: {
        name: "iPhone 18 Pro",
        eyebrow: "PRO FURTHER.",
        intro: "Aluminum unibody. Three 48MP Fusion cameras. An A20 Pro powerhouse cooled by a vapor chamber.",
        display: "6.3″ / 6.9″",
        camera: "3 × 48MP",
        battery: "45 hours",
      },
      duo: {
        name: "iPhone Duo",
        eyebrow: "HELLO, HELLO.",
        intro: "Two displays, one titanium hinge. Fold it, open it, and set it at exactly the angle you want.",
        display: "Dual display",
        camera: "Dual Fusion 48MP",
        battery: "Dual battery",
      },
    },
  },
  vi: {
    meta: {
      title: "iPhone 18 Pro + iPhone Duo — Trải nghiệm 3D",
      description: "Trải nghiệm 3D tương tác dành cho iPhone 18 Pro, Pro Max và iPhone Duo.",
    },
    header: {
      homeLabel: "iPhone 18 tương tác, về đầu trải nghiệm",
      productLab: "PHÒNG LAB SẢN PHẨM TƯƠNG TÁC",
      sources: "NGUỒN",
      language: "Chọn ngôn ngữ hiển thị",
    },
    gesture: { rotate: "KÉO ĐỂ XOAY", zoom: "PHÍM + / − ĐỂ ZOOM" },
    controls: {
      panelLabel: "Điều khiển mô hình 3D",
      model: "PHIÊN BẢN",
      finish: "MÀU",
      pose: "TƯ THẾ",
      closed: "Đóng",
      landscape: "Ngang",
      collapse: "Chập lớp",
      explode: "Tách lớp",
      resetView: "Đặt lại góc nhìn",
      chooseFinish: (name) => `Chọn màu ${name}`,
      display: "MÀN HÌNH",
      camera: "CAMERA",
      power: "PIN",
    },
    journey: {
      introKicker: "APPLE / 2026",
      scrollCue: "CUỘN ĐỂ THÁO TÁCH ↓",
      designKicker: "THIẾT KẾ / 01",
      cameraKicker: "CAMERA / 02",
      performanceKicker: "HIỆU NĂNG / 03",
      turnKicker: "ĐẾN LƯỢT BẠN / 04",
      designTitle: {
        pro: "Thiết kế nguyên khối tinh tế nhất.",
        duo: "Một iPhone mới bước vào kỷ nguyên gập.",
      },
      designBody: {
        pro: "Khung nhôm nguyên khối ôm lấy Ceramic Shield 2. Cụm camera Pro hòa vào một cao nguyên liền mạch ở mặt lưng.",
        duo: "Hai nửa cân bằng quanh bản lề titanium Grade 5. Mở phẳng thành màn hình lớn nhất từng có trên iPhone.",
      },
      cameraTitle: {
        pro: "Khẩu độ biến thiên. Toàn quyền kiểm soát.",
        duo: "Chụp từ trước ra sau.",
      },
      cameraBody: {
        pro: "Ba camera Fusion 48MP, khẩu độ ƒ/1.48 đến ƒ/4.0 và zoom quang học 8x. Xoay mô hình để xem cụm quang học.",
        duo: "Dual Fusion 48MP, Duo Preview và những góc chụp chỉ thiết kế gập mới tạo ra được.",
      },
      performanceTitle: "A20 Pro làm mát bằng buồng hơi.",
      performanceBody: "Buồng hơi thế hệ mới. Hai Neural Engine 16 lõi. Hiệu năng được giữ ổn định, kể cả khi xử lý AI trực tiếp trên máy.",
      finalTitle: ["Đừng chỉ ngắm.", "Hãy điều khiển."],
      finalBody: "Dùng bảng điều khiển để đổi phiên bản, màu sắc, tư thế và tách từng lớp phần cứng trong không gian 3D.",
      finalAction: "Tách phần cứng",
    },
    sources: {
      badge: "APPLE AR MESH / THREE.JS",
      title: "Tạo hình từ hình học nguyên bản.",
      description: "Topology, độ bo, cụm camera, UV và vật liệu được chuyển trực tiếp từ asset AR công khai của Apple.",
      navLabel: "Nguồn tham chiếu",
      resources: "NGUỒN THAM KHẢO",
      experience: "TRẢI NGHIỆM",
      backToTop: "Về đầu trang",
      conceptNote: "Trực quan hóa concept sản phẩm độc lập.",
    },
    finishes: {
      burgundy: "Đỏ Burgundy",
      glacier: "Băng Thanh",
      silver: "Bạc",
      black: "Đen",
      "night-sky": "Trời Đêm",
      "star-white": "Trắng Sao",
    },
    models: {
      pro: {
        name: "iPhone 18 Pro",
        eyebrow: "PRO HƠN NỮA.",
        intro: "Nhôm nguyên khối. Ba camera Fusion 48MP. Một cỗ máy A20 Pro được làm mát bằng buồng hơi.",
        display: "6.3″ / 6.9″",
        camera: "3 × 48MP",
        battery: "45 giờ",
      },
      duo: {
        name: "iPhone Duo",
        eyebrow: "XIN CHÀO, XIN CHÀO.",
        intro: "Hai màn hình, một bản lề titanium. Gập, mở và đứng ở đúng góc bạn muốn.",
        display: "Màn hình kép",
        camera: "Dual Fusion 48MP",
        battery: "Pin kép",
      },
    },
  },
  pt: {
    meta: {
      title: "iPhone 18 Pro + iPhone Duo — Experiência 3D interativa",
      description: "Uma experiência 3D interativa para iPhone 18 Pro, Pro Max e iPhone Duo.",
    },
    header: {
      homeLabel: "iPhone 18 interativo, voltar ao início",
      productLab: "LABORATÓRIO INTERATIVO DE PRODUTOS",
      sources: "FONTES",
      language: "Escolher idioma de exibição",
    },
    gesture: { rotate: "ARRASTE PARA GIRAR", zoom: "TECLAS + / − PARA ZOOM" },
    controls: {
      panelLabel: "Controles do modelo 3D",
      model: "MODELO",
      finish: "ACABAMENTO",
      pose: "POSIÇÃO",
      closed: "Fechado",
      landscape: "Paisagem",
      collapse: "Recolher",
      explode: "Separar",
      resetView: "Redefinir visualização",
      chooseFinish: (name) => `Escolher acabamento ${name}`,
      display: "TELA",
      camera: "CÂMERA",
      power: "BATERIA",
    },
    journey: {
      introKicker: "APPLE / 2026",
      scrollCue: "ROLE PARA DESMONTAR ↓",
      designKicker: "DESIGN / 01",
      cameraKicker: "CÂMERA / 02",
      performanceKicker: "DESEMPENHO / 03",
      turnKicker: "SUA VEZ / 04",
      designTitle: {
        pro: "Nossa melhor obra em peça única.",
        duo: "Um novo iPhone entra na era dobrável.",
      },
      designBody: {
        pro: "Uma estrutura contínua de alumínio envolve o Ceramic Shield 2. O sistema de câmeras Pro flui por uma plataforma integrada na traseira.",
        duo: "Duas metades equilibradas giram em torno de uma dobradiça de titânio Grau 5. Aberto, revela a maior tela já vista em um iPhone.",
      },
      cameraTitle: {
        pro: "Abertura variável. Controle total.",
        duo: "Fotografe de frente a fundo.",
      },
      cameraBody: {
        pro: "Três câmeras Fusion de 48 MP, abertura de ƒ/1.48 a ƒ/4.0 e zoom óptico de 8x. Gire o modelo para explorar o conjunto óptico.",
        duo: "Duas câmeras Fusion de 48 MP, Duo Preview e perspectivas que só um design dobrável pode criar.",
      },
      performanceTitle: "A20 Pro com câmara de vapor.",
      performanceBody: "Câmara de vapor de última geração. Dois Neural Engines de 16 núcleos. Desempenho sustentado até ao processar IA diretamente no aparelho.",
      finalTitle: ["Não fique só olhando.", "Assuma o controle."],
      finalBody: "Use os controles para trocar modelo, acabamento e posição, e separar cada camada de hardware no espaço 3D.",
      finalAction: "Separar o hardware",
    },
    sources: {
      badge: "MALHA AR APPLE / THREE.JS",
      title: "Criado a partir de geometria real.",
      description: "Topologia, curvas, câmeras, UVs e materiais são convertidos diretamente dos recursos públicos de AR da Apple.",
      navLabel: "Fontes de referência",
      resources: "RECURSOS",
      experience: "EXPERIÊNCIA",
      backToTop: "Voltar ao início",
      conceptNote: "Visualização independente de um conceito de produto.",
    },
    finishes: {
      burgundy: "Borgonha",
      glacier: "Glacial",
      silver: "Prateado",
      black: "Preto",
      "night-sky": "Céu Noturno",
      "star-white": "Branco Estelar",
    },
    models: {
      pro: {
        name: "iPhone 18 Pro",
        eyebrow: "AINDA MAIS PRO.",
        intro: "Estrutura de alumínio. Três câmeras Fusion de 48 MP. A potência do A20 Pro refrigerada por câmara de vapor.",
        display: "6.3″ / 6.9″",
        camera: "3 × 48 MP",
        battery: "45 horas",
      },
      duo: {
        name: "iPhone Duo",
        eyebrow: "OLÁ, OLÁ.",
        intro: "Duas telas, uma dobradiça de titânio. Dobre, abra e ajuste exatamente no ângulo desejado.",
        display: "Tela dupla",
        camera: "Dual Fusion 48 MP",
        battery: "Bateria dupla",
      },
    },
  },
  es: {
    meta: {
      title: "iPhone 18 Pro + iPhone Duo — Experiencia 3D interactiva",
      description: "Una experiencia 3D interactiva para iPhone 18 Pro, Pro Max y iPhone Duo.",
    },
    header: {
      homeLabel: "iPhone 18 interactivo, volver al inicio",
      productLab: "LABORATORIO INTERACTIVO DE PRODUCTOS",
      sources: "FUENTES",
      language: "Elegir idioma de visualización",
    },
    gesture: { rotate: "ARRASTRA PARA GIRAR", zoom: "TECLAS + / − PARA ZOOM" },
    controls: {
      panelLabel: "Controles del modelo 3D",
      model: "MODELO",
      finish: "ACABADO",
      pose: "POSICIÓN",
      closed: "Cerrado",
      landscape: "Horizontal",
      collapse: "Replegar",
      explode: "Separar",
      resetView: "Restablecer vista",
      chooseFinish: (name) => `Elegir acabado ${name}`,
      display: "PANTALLA",
      camera: "CÁMARA",
      power: "BATERÍA",
    },
    journey: {
      introKicker: "APPLE / 2026",
      scrollCue: "DESPLÁZATE PARA DESMONTAR ↓",
      designKicker: "DISEÑO / 01",
      cameraKicker: "CÁMARA / 02",
      performanceKicker: "RENDIMIENTO / 03",
      turnKicker: "TU TURNO / 04",
      designTitle: {
        pro: "Nuestra mejor obra en una sola pieza.",
        duo: "Un nuevo iPhone entra en la era plegable.",
      },
      designBody: {
        pro: "Una estructura continua de aluminio envuelve Ceramic Shield 2. El sistema de cámaras Pro se integra en una meseta uniforme en la parte trasera.",
        duo: "Dos mitades equilibradas giran alrededor de una bisagra de titanio de grado 5. Ábrelo por completo para descubrir la pantalla más grande en un iPhone.",
      },
      cameraTitle: {
        pro: "Apertura variable. Control total.",
        duo: "Captura de un lado al otro.",
      },
      cameraBody: {
        pro: "Tres cámaras Fusion de 48 MP, apertura de ƒ/1.48 a ƒ/4.0 y zoom óptico de 8x. Gira el modelo para explorar el sistema óptico.",
        duo: "Dos cámaras Fusion de 48 MP, Duo Preview y perspectivas que solo un diseño plegable puede crear.",
      },
      performanceTitle: "A20 Pro con cámara de vapor.",
      performanceBody: "Cámara de vapor de última generación. Dos Neural Engine de 16 núcleos. Rendimiento sostenido incluso al procesar IA directamente en el dispositivo.",
      finalTitle: ["No te limites a mirar.", "Toma el control."],
      finalBody: "Usa los controles para cambiar de modelo, acabado y posición, y separar cada capa de hardware en el espacio 3D.",
      finalAction: "Separar el hardware",
    },
    sources: {
      badge: "MALLA AR DE APPLE / THREE.JS",
      title: "Creado a partir de geometría real.",
      description: "La topología, las curvas, las cámaras, los UV y los materiales se convierten directamente desde los recursos AR públicos de Apple.",
      navLabel: "Fuentes de referencia",
      resources: "RECURSOS",
      experience: "EXPERIENCIA",
      backToTop: "Volver al inicio",
      conceptNote: "Visualización independiente de un concepto de producto.",
    },
    finishes: {
      burgundy: "Borgoña",
      glacier: "Glaciar",
      silver: "Plateado",
      black: "Negro",
      "night-sky": "Cielo Nocturno",
      "star-white": "Blanco Estelar",
    },
    models: {
      pro: {
        name: "iPhone 18 Pro",
        eyebrow: "MÁS PRO QUE NUNCA.",
        intro: "Estructura de aluminio. Tres cámaras Fusion de 48 MP. Toda la potencia del A20 Pro refrigerada por cámara de vapor.",
        display: "6.3″ / 6.9″",
        camera: "3 × 48 MP",
        battery: "45 horas",
      },
      duo: {
        name: "iPhone Duo",
        eyebrow: "HOLA, HOLA.",
        intro: "Dos pantallas, una bisagra de titanio. Pliégalo, ábrelo y colócalo exactamente en el ángulo que quieras.",
        display: "Pantalla doble",
        camera: "Dual Fusion 48 MP",
        battery: "Batería doble",
      },
    },
  },
  zh: {
    meta: {
      title: "iPhone 18 Pro + iPhone Duo — 互动 3D 体验",
      description: "为 iPhone 18 Pro、Pro Max 和 iPhone Duo 打造的互动 3D 体验。",
    },
    header: {
      homeLabel: "iPhone 18 互动体验，返回开头",
      productLab: "互动产品实验室",
      sources: "资料来源",
      language: "选择显示语言",
    },
    gesture: { rotate: "拖动以旋转", zoom: "按 + / − 键缩放" },
    controls: {
      panelLabel: "3D 模型控制",
      model: "机型",
      finish: "外观",
      pose: "形态",
      closed: "闭合",
      landscape: "横向",
      collapse: "合并",
      explode: "拆解",
      resetView: "重置视角",
      chooseFinish: (name) => `选择${name}外观`,
      display: "显示屏",
      camera: "相机",
      power: "电池",
    },
    journey: {
      introKicker: "APPLE / 2026",
      scrollCue: "滚动以拆解 ↓",
      designKicker: "设计 / 01",
      cameraKicker: "相机 / 02",
      performanceKicker: "性能 / 03",
      turnKicker: "由你掌控 / 04",
      designTitle: {
        pro: "一体成型，精工之作。",
        duo: "新一代 iPhone，折叠登场。",
      },
      designBody: {
        pro: "一体式铝金属机身环抱 Ceramic Shield 2，Pro 相机系统自然融入背部连贯的平台。",
        duo: "两侧机身围绕 5 级钛金属铰链保持平衡，完全展开后呈现 iPhone 史上最大的显示屏。",
      },
      cameraTitle: {
        pro: "可变光圈，全面掌控。",
        duo: "前后皆可拍。",
      },
      cameraBody: {
        pro: "三颗 4800 万像素 Fusion 相机，ƒ/1.48 至 ƒ/4.0 可变光圈与 8 倍光学变焦。旋转模型，探索完整光学系统。",
        duo: "双 4800 万像素 Fusion 相机、Duo Preview，以及只有折叠设计才能实现的独特视角。",
      },
      performanceTitle: "蒸汽室散热 A20 Pro。",
      performanceBody: "新一代蒸汽室，双 16 核神经网络引擎。即使在设备端直接运行 AI，也能保持稳定性能。",
      finalTitle: ["不只是观看。", "现在，由你掌控。"],
      finalBody: "使用控制面板切换机型、外观与形态，并在 3D 空间中拆解每一层硬件。",
      finalAction: "拆解硬件",
    },
    sources: {
      badge: "APPLE AR 网格 / THREE.JS",
      title: "源自真实几何结构。",
      description: "拓扑结构、曲面、相机组件、UV 和材质均直接转换自 Apple 公开的 AR 资源。",
      navLabel: "参考资料",
      resources: "参考资料",
      experience: "体验",
      backToTop: "返回顶部",
      conceptNote: "独立制作的产品概念可视化。",
    },
    finishes: {
      burgundy: "勃艮第红",
      glacier: "冰川色",
      silver: "银色",
      black: "黑色",
      "night-sky": "夜空色",
      "star-white": "星光白",
    },
    models: {
      pro: {
        name: "iPhone 18 Pro",
        eyebrow: "专业，更进一步。",
        intro: "一体式铝金属机身。三颗 4800 万像素 Fusion 相机。蒸汽室散热加持的 A20 Pro 强大核心。",
        display: "6.3″ / 6.9″",
        camera: "3 × 4800 万像素",
        battery: "45 小时",
      },
      duo: {
        name: "iPhone Duo",
        eyebrow: "双面精彩。",
        intro: "两块显示屏，一枚钛金属铰链。折叠、展开，随心停在理想角度。",
        display: "双显示屏",
        camera: "双 Fusion 4800 万像素",
        battery: "双电池",
      },
    },
  },
  ja: {
    meta: {
      title: "iPhone 18 Pro + iPhone Duo — インタラクティブ3D",
      description: "iPhone 18 Pro、Pro Max、iPhone Duoのためのインタラクティブな3D体験。",
    },
    header: {
      homeLabel: "iPhone 18 インタラクティブ体験の先頭へ戻る",
      productLab: "インタラクティブ・プロダクトラボ",
      sources: "情報源",
      language: "表示言語を選択",
    },
    gesture: { rotate: "ドラッグして回転", zoom: "+ / − キーでズーム" },
    controls: {
      panelLabel: "3Dモデルの操作",
      model: "モデル",
      finish: "仕上げ",
      pose: "スタイル",
      closed: "閉じる",
      landscape: "横向き",
      collapse: "元に戻す",
      explode: "分解する",
      resetView: "視点をリセット",
      chooseFinish: (name) => `${name}の仕上げを選択`,
      display: "ディスプレイ",
      camera: "カメラ",
      power: "バッテリー",
    },
    journey: {
      introKicker: "APPLE / 2026",
      scrollCue: "スクロールして分解 ↓",
      designKicker: "デザイン / 01",
      cameraKicker: "カメラ / 02",
      performanceKicker: "パフォーマンス / 03",
      turnKicker: "あなたの番です / 04",
      designTitle: {
        pro: "究極のユニボディ。",
        duo: "新しいiPhoneが、折りたたみの世界へ。",
      },
      designBody: {
        pro: "アルミニウムのユニボディがCeramic Shield 2を包み込み、Proカメラシステムは背面の連続したプレートへ自然に溶け込みます。",
        duo: "2つのボディをGrade 5チタニウムのヒンジでバランスよく接続。フラットに開けば、iPhone史上最大のディスプレイが現れます。",
      },
      cameraTitle: {
        pro: "可変絞り。自在なコントロール。",
        duo: "前から後ろまで、自由に撮影。",
      },
      cameraBody: {
        pro: "3つの48MP Fusionカメラ、ƒ/1.48からƒ/4.0の可変絞り、8倍光学ズーム。モデルを回転させて光学システムをご覧ください。",
        duo: "デュアル48MP Fusionカメラ、Duo Preview、そして折りたたみデザインだからこそ生まれるアングル。",
      },
      performanceTitle: "ベイパーチャンバー冷却のA20 Pro。",
      performanceBody: "次世代のベイパーチャンバー。2基の16コアNeural Engine。デバイス上でAIを処理している時も、安定した性能を保ちます。",
      finalTitle: ["見るだけで終わらない。", "思いのままに操作しよう。"],
      finalBody: "コントロールを使ってモデル、仕上げ、スタイルを切り替え、3D空間でハードウェアの各層を分解できます。",
      finalAction: "ハードウェアを分解",
    },
    sources: {
      badge: "APPLE ARメッシュ / THREE.JS",
      title: "実際のジオメトリから生まれた造形。",
      description: "トポロジー、曲面、カメラ形状、UV、マテリアルは、Appleが公開するARアセットから直接変換されています。",
      navLabel: "参照元",
      resources: "リソース",
      experience: "体験",
      backToTop: "ページの先頭へ",
      conceptNote: "独自に制作した製品コンセプトのビジュアライゼーションです。",
    },
    finishes: {
      burgundy: "バーガンディ",
      glacier: "グレイシャー",
      silver: "シルバー",
      black: "ブラック",
      "night-sky": "ナイトスカイ",
      "star-white": "スターホワイト",
    },
    models: {
      pro: {
        name: "iPhone 18 Pro",
        eyebrow: "PROを、さらに先へ。",
        intro: "アルミニウムのユニボディ。3つの48MP Fusionカメラ。ベイパーチャンバーで冷却されるA20 Proの圧倒的なパワー。",
        display: "6.3″ / 6.9″",
        camera: "3 × 48MP",
        battery: "45時間",
      },
      duo: {
        name: "iPhone Duo",
        eyebrow: "ふたつの世界に、こんにちは。",
        intro: "2つのディスプレイ、1つのチタニウムヒンジ。折りたたみ、開き、好きな角度で止められます。",
        display: "デュアルディスプレイ",
        camera: "デュアルFusion 48MP",
        battery: "デュアルバッテリー",
      },
    },
  },
};
