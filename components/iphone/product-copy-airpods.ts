import { resolveContentLanguage, type ContentLanguage, type Language } from "./i18n";
import type { AirPodsModel } from "./product-data";
import type { ProductCopy } from "./product-copy-types";

const airPodsProductCopy: Record<
  ContentLanguage,
  Record<AirPodsModel, ProductCopy>
> = {
  en: {
    "airpods-5": {
      name: "AirPods 5",
      eyebrow: "OPEN-EAR. WIDE OPEN.",
      intro: "Best-in-class open-ear Active Noise Cancellation, improved sound, Siri AI, and Live Translation in the most affordable AirPods.",
      display: "Open-ear",
      primarySpecLabel: "FIT",
      camera: "50% more",
      secondarySpecLabel: "ANC",
      battery: "5 hr ANC",
      designTitle: "All-day comfort. Ready for more.",
      designBody: "A refined open-ear shape is built for a comfortable fit, with improved resistance to dust, sweat, and water for everyday listening.",
      cameraTitle: "Open-ear ANC takes a leap.",
      cameraBody: "Advanced computational audio removes up to 50 percent more external noise than AirPods 4 with ANC, while Transparency sounds more natural.",
      secondarySectionKicker: "AUDIO / 02",
      performanceTitle: "A new acoustic architecture.",
      performanceBody: "A multiport acoustic architecture and next-generation Adaptive EQ deliver more immersive sound, joined by hands-free Siri AI and Live Translation.",
    },
    "airpods-pro-3": {
      name: "AirPods Pro 3",
      eyebrow: "THE ULTIMATE AUDIO EXPERIENCE.",
      intro: "Powerful in-ear ANC, a more secure fit, heart rate sensing for workouts, and extended battery life.",
      display: "5 tip sizes",
      primarySpecLabel: "FIT",
      camera: "2× more",
      secondarySpecLabel: "ANC",
      battery: "8 hr ANC",
      designTitle: "Smaller shape. More secure fit.",
      designBody: "Re-engineered earbuds and foam-infused tips in five sizes improve stability, while IP57 resistance helps handle tough workouts and changing weather.",
      cameraTitle: "Deeper quiet. Wider sound.",
      cameraBody: "Ultra-low-noise microphones, computational audio, and a multiport acoustic architecture remove up to twice as much noise as AirPods Pro 2.",
      secondarySectionKicker: "AUDIO / 02",
      performanceTitle: "Heart rate joins H2.",
      performanceBody: "A custom heart rate sensor supports more than 50 workout types, while H2 powers Adaptive Audio, hearing health features, and Live Translation.",
    },
    "airpods-max-2": {
      name: "AirPods Max 2",
      eyebrow: "LISTENING. REMASTERED.",
      intro: "H2, improved high-fidelity sound, smarter listening modes, and more effective ANC in an iconic over-ear design.",
      display: "Over-ear",
      primarySpecLabel: "FIT",
      camera: "1.5× more",
      secondarySpecLabel: "ANC",
      battery: "20 hours",
      designTitle: "Iconic comfort, precisely balanced.",
      designBody: "A breathable knit-mesh canopy and memory-foam cushions distribute weight and create an immersive acoustic seal for long listening sessions.",
      cameraTitle: "High fidelity, rebuilt around H2.",
      cameraBody: "A new high-dynamic-range amplifier brings cleaner sound, precise bass, natural mids, crisp highs, and more accurate Spatial Audio localization.",
      secondarySectionKicker: "AUDIO / 02",
      performanceTitle: "Adaptive intelligence. USB-C precision.",
      performanceBody: "Adaptive Audio, Conversation Awareness, Live Translation, and Siri AI join lossless, ultra-low-latency audio over USB-C.",
    },
  },
  vi: {
    "airpods-5": {
      name: "AirPods 5",
      eyebrow: "THIẾT KẾ MỞ. ÂM THANH RỘNG MỞ.",
      intro: "Chống Ồn Chủ Động hàng đầu cho thiết kế open-ear, âm thanh cải tiến, Siri AI và Dịch Trực Tiếp trên AirPods dễ tiếp cận nhất.",
      display: "Open-ear",
      primarySpecLabel: "KIỂU ĐEO",
      camera: "Hơn 50%",
      secondarySpecLabel: "ANC",
      battery: "5 giờ ANC",
      designTitle: "Thoải mái cả ngày. Sẵn sàng hơn.",
      designBody: "Dáng open-ear tinh chỉnh mang lại cảm giác đeo dễ chịu, cùng khả năng kháng bụi, mồ hôi và nước tốt hơn cho việc nghe mỗi ngày.",
      cameraTitle: "ANC open-ear tiến một bước dài.",
      cameraBody: "Âm thanh điện toán tiên tiến loại bỏ tiếng ồn bên ngoài nhiều hơn đến 50% so với AirPods 4 có ANC, đồng thời chế độ Xuyên Âm tự nhiên hơn.",
      secondarySectionKicker: "ÂM THANH / 02",
      performanceTitle: "Kiến trúc âm học hoàn toàn mới.",
      performanceBody: "Kiến trúc âm học đa cổng và Adaptive EQ thế hệ mới tạo âm thanh đắm chìm hơn, bên cạnh Siri AI rảnh tay và Dịch Trực Tiếp.",
    },
    "airpods-pro-3": {
      name: "AirPods Pro 3",
      eyebrow: "TRẢI NGHIỆM ÂM THANH ĐỈNH CAO.",
      intro: "ANC in-ear mạnh mẽ, độ vừa vặn chắc chắn hơn, đo nhịp tim khi tập luyện và thời lượng pin dài hơn.",
      display: "5 cỡ nút tai",
      primarySpecLabel: "ĐỘ VỪA VẶN",
      camera: "Mạnh gấp 2×",
      secondarySpecLabel: "ANC",
      battery: "8 giờ ANC",
      designTitle: "Nhỏ gọn hơn. Chắc chắn hơn.",
      designBody: "Tai nghe được thiết kế lại cùng nút tai pha foam năm kích cỡ giúp tăng độ ổn định; chuẩn IP57 hỗ trợ các buổi tập nặng và thời tiết thất thường.",
      cameraTitle: "Tĩnh lặng sâu hơn. Âm trường rộng hơn.",
      cameraBody: "Micro có độ nhiễu cực thấp, âm thanh điện toán và kiến trúc âm học đa cổng loại bỏ tiếng ồn nhiều gấp hai lần AirPods Pro 2.",
      secondarySectionKicker: "ÂM THANH / 02",
      performanceTitle: "Cảm biến nhịp tim kết hợp H2.",
      performanceBody: "Cảm biến nhịp tim tùy chỉnh hỗ trợ hơn 50 loại bài tập, còn H2 vận hành Âm Thanh Thích Ứng, các tính năng sức khỏe thính giác và Dịch Trực Tiếp.",
    },
    "airpods-max-2": {
      name: "AirPods Max 2",
      eyebrow: "TRẢI NGHIỆM NGHE. ĐƯỢC TÁI TẠO.",
      intro: "H2, âm thanh hi-fi cải tiến, các chế độ nghe thông minh hơn và ANC hiệu quả hơn trong thiết kế over-ear biểu tượng.",
      display: "Over-ear",
      primarySpecLabel: "KIỂU ĐEO",
      camera: "Mạnh gấp 1,5×",
      secondarySpecLabel: "ANC",
      battery: "20 giờ",
      designTitle: "Thoải mái biểu tượng, cân bằng chính xác.",
      designBody: "Vòm lưới dệt thoáng khí và đệm tai memory foam phân bổ trọng lượng, tạo độ kín âm đắm chìm cho những phiên nghe dài.",
      cameraTitle: "Hi-fi, tái thiết quanh H2.",
      cameraBody: "Bộ khuếch đại dải động cao mới đem lại âm thanh sạch hơn, bass chính xác, mid tự nhiên, treble trong trẻo và định vị Âm Thanh Không Gian chuẩn hơn.",
      secondarySectionKicker: "ÂM THANH / 02",
      performanceTitle: "Thông minh thích ứng. USB-C chính xác.",
      performanceBody: "Âm Thanh Thích Ứng, Nhận Biết Cuộc Hội Thoại, Dịch Trực Tiếp và Siri AI kết hợp âm thanh lossless, độ trễ cực thấp qua USB-C.",
    },
  },
  pt: {
    "airpods-5": {
      name: "AirPods 5", eyebrow: "ABERTOS. SOM SEM LIMITES.", intro: "O melhor Cancelamento Ativo de Ruído em formato aberto, som aprimorado, Siri AI e Tradução ao Vivo nos AirPods mais acessíveis.", display: "Formato aberto", primarySpecLabel: "AJUSTE", camera: "50% mais", secondarySpecLabel: "ANC", battery: "5 h com ANC", designTitle: "Conforto o dia todo.", designBody: "O formato aberto refinado oferece conforto, com maior resistência a poeira, suor e água para ouvir todos os dias.", cameraTitle: "Um salto no ANC aberto.", cameraBody: "O áudio computacional remove até 50% mais ruído externo que os AirPods 4 com ANC e deixa o modo Ambiente mais natural.", secondarySectionKicker: "ÁUDIO / 02", performanceTitle: "Nova arquitetura acústica.", performanceBody: "A arquitetura acústica multiportas e o Adaptive EQ de nova geração entregam som mais imersivo, Siri AI e Tradução ao Vivo.",
    },
    "airpods-pro-3": {
      name: "AirPods Pro 3", eyebrow: "A EXPERIÊNCIA DE ÁUDIO DEFINITIVA.", intro: "ANC intra-auricular potente, ajuste mais firme, medição de frequência cardíaca e bateria estendida.", display: "5 tamanhos", primarySpecLabel: "AJUSTE", camera: "2× mais", secondarySpecLabel: "ANC", battery: "8 h com ANC", designTitle: "Menores. Mais firmes.", designBody: "O novo formato e as pontas com espuma em cinco tamanhos aumentam a estabilidade, com resistência IP57 para treinos e mudanças do tempo.", cameraTitle: "Mais silêncio. Som mais amplo.", cameraBody: "Microfones de ultrabaixo ruído, áudio computacional e arquitetura multiportas removem até duas vezes mais ruído que os AirPods Pro 2.", secondarySectionKicker: "ÁUDIO / 02", performanceTitle: "Frequência cardíaca com H2.", performanceBody: "O sensor cardíaco suporta mais de 50 exercícios, enquanto o H2 move Áudio Adaptativo, recursos de saúde auditiva e Tradução ao Vivo.",
    },
    "airpods-max-2": {
      name: "AirPods Max 2", eyebrow: "ESCUTA. REMASTERIZADA.", intro: "H2, som de alta fidelidade melhorado, modos inteligentes e ANC mais eficaz em um design over-ear icônico.", display: "Over-ear", primarySpecLabel: "AJUSTE", camera: "1,5× mais", secondarySpecLabel: "ANC", battery: "20 horas", designTitle: "Conforto icônico, equilíbrio preciso.", designBody: "A cobertura de malha respirável e as almofadas de espuma viscoelástica distribuem o peso e criam isolamento acústico imersivo.", cameraTitle: "Alta fidelidade com H2.", cameraBody: "O novo amplificador traz som mais limpo, graves precisos, médios naturais, agudos nítidos e Áudio Espacial mais exato.", secondarySectionKicker: "ÁUDIO / 02", performanceTitle: "Inteligência adaptativa. Precisão USB-C.", performanceBody: "Áudio Adaptativo, Detecção de Conversa, Tradução ao Vivo e Siri AI se unem ao áudio sem perdas e de ultrabaixa latência via USB-C.",
    },
  },
  es: {
    "airpods-5": {
      name: "AirPods 5", eyebrow: "DISEÑO ABIERTO. SONIDO SIN LÍMITES.", intro: "La mejor cancelación activa de ruido en diseño abierto, sonido mejorado, Siri AI y Traducción en Tiempo Real en los AirPods más asequibles.", display: "Diseño abierto", primarySpecLabel: "AJUSTE", camera: "50 % más", secondarySpecLabel: "ANC", battery: "5 h con ANC", designTitle: "Comodidad todo el día.", designBody: "El diseño abierto refinado ofrece comodidad y mejora la resistencia al polvo, el sudor y el agua para escuchar a diario.", cameraTitle: "Un salto para el ANC abierto.", cameraBody: "El audio computacional elimina hasta un 50 % más de ruido externo que los AirPods 4 con ANC y mejora el modo Transparencia.", secondarySectionKicker: "AUDIO / 02", performanceTitle: "Nueva arquitectura acústica.", performanceBody: "La arquitectura acústica multipuerto y Adaptive EQ de nueva generación ofrecen sonido más inmersivo, Siri AI y Traducción en Tiempo Real.",
    },
    "airpods-pro-3": {
      name: "AirPods Pro 3", eyebrow: "LA EXPERIENCIA DE AUDIO DEFINITIVA.", intro: "ANC intraaural potente, ajuste más seguro, medición de frecuencia cardiaca y más autonomía.", display: "5 tamaños", primarySpecLabel: "AJUSTE", camera: "2× más", secondarySpecLabel: "ANC", battery: "8 h con ANC", designTitle: "Más pequeños. Más seguros.", designBody: "El nuevo diseño y las almohadillas con espuma en cinco tamaños mejoran la estabilidad, con resistencia IP57 para entrenamientos y clima cambiante.", cameraTitle: "Más silencio. Sonido más amplio.", cameraBody: "Micrófonos de ruido ultrabajo, audio computacional y arquitectura multipuerto eliminan hasta el doble de ruido que los AirPods Pro 2.", secondarySectionKicker: "AUDIO / 02", performanceTitle: "Frecuencia cardiaca y H2.", performanceBody: "El sensor cardiaco admite más de 50 entrenamientos y H2 impulsa Audio Adaptativo, salud auditiva y Traducción en Tiempo Real.",
    },
    "airpods-max-2": {
      name: "AirPods Max 2", eyebrow: "ESCUCHAR. REMASTERIZADO.", intro: "H2, alta fidelidad mejorada, modos inteligentes y ANC más eficaz en un diseño over-ear icónico.", display: "Over-ear", primarySpecLabel: "AJUSTE", camera: "1,5× más", secondarySpecLabel: "ANC", battery: "20 horas", designTitle: "Comodidad icónica, equilibrio preciso.", designBody: "La diadema de malla transpirable y las almohadillas de espuma viscoelástica distribuyen el peso y crean un aislamiento inmersivo.", cameraTitle: "Alta fidelidad reconstruida con H2.", cameraBody: "El nuevo amplificador ofrece sonido más limpio, graves precisos, medios naturales, agudos nítidos y Audio Espacial más exacto.", secondarySectionKicker: "AUDIO / 02", performanceTitle: "Inteligencia adaptativa. Precisión USB-C.", performanceBody: "Audio Adaptativo, Detección de Conversación, Traducción en Tiempo Real y Siri AI se unen al audio sin pérdida y de latencia ultrabaja por USB-C.",
    },
  },
  zh: {
    "airpods-5": {
      name: "AirPods 5", eyebrow: "开放佩戴，声场大开。", intro: "开放式耳机中的领先主动降噪、升级音质、Siri AI 与实时翻译，集于更易入手的 AirPods。", display: "开放式", primarySpecLabel: "佩戴", camera: "提升 50%", secondarySpecLabel: "主动降噪", battery: "5 小时降噪", designTitle: "全天舒适，更从容。", designBody: "优化的开放式轮廓舒适贴合，并提升防尘、抗汗和防水表现，陪伴日常聆听。", cameraTitle: "开放式降噪，大步跃进。", cameraBody: "先进计算音频较 AirPods 4 主动降噪款最多多消除 50% 外界噪声，同时让通透模式更自然。", secondarySectionKicker: "音频 / 02", performanceTitle: "全新声学架构。", performanceBody: "多端口声学架构与新一代自适应均衡带来更沉浸的声音，并支持免提 Siri AI 和实时翻译。",
    },
    "airpods-pro-3": {
      name: "AirPods Pro 3", eyebrow: "非凡音频体验。", intro: "强劲入耳式主动降噪、更稳固贴合、运动心率感应与更长续航。", display: "5 种耳塞尺寸", primarySpecLabel: "贴合", camera: "提升 2 倍", secondarySpecLabel: "主动降噪", battery: "8 小时降噪", designTitle: "体积更小，佩戴更稳。", designBody: "重新设计的耳机与五种尺寸泡棉耳塞提升稳定性，IP57 级防护轻松应对高强度训练与多变天气。", cameraTitle: "静得更深，听得更宽。", cameraBody: "超低噪声麦克风、计算音频和多端口声学架构，较 AirPods Pro 2 最多消除两倍噪声。", secondarySectionKicker: "音频 / 02", performanceTitle: "心率感应，携手 H2。", performanceBody: "定制心率传感器支持超过 50 种训练，H2 则驱动自适应音频、听力健康功能与实时翻译。",
    },
    "airpods-max-2": {
      name: "AirPods Max 2", eyebrow: "聆听，焕然一新。", intro: "H2、升级高保真音质、更智能的聆听模式与更强主动降噪，融于经典头戴式设计。", display: "头戴式", primarySpecLabel: "佩戴", camera: "提升 1.5 倍", secondarySpecLabel: "主动降噪", battery: "20 小时", designTitle: "经典舒适，精确平衡。", designBody: "透气针织网状穹顶与记忆海绵耳垫均匀分担重量，营造沉浸声学密封，长时间聆听依然舒适。", cameraTitle: "以 H2 重塑高保真。", cameraBody: "全新高动态范围放大器带来更纯净的声音、准确低频、自然中频、清晰高频和更精准的空间音频定位。", secondarySectionKicker: "音频 / 02", performanceTitle: "自适应智能，USB-C 精准传输。", performanceBody: "自适应音频、对话感知、实时翻译与 Siri AI，并支持 USB-C 无损和超低延迟音频。",
    },
  },
  ja: {
    "airpods-5": {
      name: "AirPods 5", eyebrow: "オープンイヤー。音の世界もオープンに。", intro: "オープンイヤー型で最高クラスのアクティブノイズキャンセリング、進化したサウンド、Siri AI、ライブ翻訳を手頃なAirPodsに。", display: "オープンイヤー", primarySpecLabel: "フィット", camera: "最大50%向上", secondarySpecLabel: "ANC", battery: "ANCで5時間", designTitle: "一日中快適。もっと頼もしく。", designBody: "洗練されたオープンイヤー形状が快適にフィットし、防塵・耐汗・耐水性能も向上しました。", cameraTitle: "オープンイヤーANCが飛躍。", cameraBody: "高度なコンピュテーショナルオーディオがAirPods 4のANC搭載モデルより最大50%多く周囲の騒音を除去し、外部音取り込みも自然です。", secondarySectionKicker: "オーディオ / 02", performanceTitle: "新しい音響アーキテクチャ。", performanceBody: "マルチポート音響設計と次世代Adaptive EQが没入感を高め、Siri AIとライブ翻訳にも対応します。",
    },
    "airpods-pro-3": {
      name: "AirPods Pro 3", eyebrow: "究極のオーディオ体験。", intro: "パワフルなインイヤーANC、安定した装着感、ワークアウト時の心拍数センサー、さらに長いバッテリー。", display: "5サイズ", primarySpecLabel: "フィット", camera: "最大2倍", secondarySpecLabel: "ANC", battery: "ANCで8時間", designTitle: "小さく、より確かなフィット。", designBody: "再設計した本体と5サイズのフォーム入りイヤーチップが安定性を高め、IP57性能でハードな運動や天候の変化に対応します。", cameraTitle: "より深い静けさ。広い音場。", cameraBody: "超低ノイズマイク、コンピュテーショナルオーディオ、マルチポート音響設計がAirPods Pro 2の最大2倍のノイズを除去します。", secondarySectionKicker: "オーディオ / 02", performanceTitle: "心拍数センサーとH2。", performanceBody: "心拍数センサーが50種類以上のワークアウトを支え、H2が適応型オーディオ、聴覚の健康機能、ライブ翻訳を動かします。",
    },
    "airpods-max-2": {
      name: "AirPods Max 2", eyebrow: "聴く体験を、リマスター。", intro: "H2、進化した高忠実度サウンド、賢いリスニングモード、より強力なANCを象徴的なオーバーイヤー設計に。", display: "オーバーイヤー", primarySpecLabel: "フィット", camera: "最大1.5倍", secondarySpecLabel: "ANC", battery: "20時間", designTitle: "象徴的な快適さ。精密なバランス。", designBody: "通気性のあるニットメッシュキャノピーと形状記憶フォームのイヤークッションが重さを分散し、没入感の高い密閉性を生み出します。", cameraTitle: "H2で再構築した高忠実度。", cameraBody: "新しい高ダイナミックレンジアンプが、正確な低音、自然な中音、鮮明な高音、より精密な空間オーディオ定位を届けます。", secondarySectionKicker: "オーディオ / 02", performanceTitle: "適応する知性。USB-Cの精度。", performanceBody: "適応型オーディオ、会話感知、ライブ翻訳、Siri AIに加え、USB-C経由のロスレス・超低遅延オーディオに対応します。",
    },
  },
};

export function getAirPodsProductCopy(
  language: Language,
  model: AirPodsModel,
) {
  return airPodsProductCopy[resolveContentLanguage(language)][model];
}
