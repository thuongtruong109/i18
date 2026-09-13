import { resolveContentLanguage, type ContentLanguage, type Language } from "./i18n";
import type { AppleWatchModel } from "./product-data";
import type { ProductCopy } from "./product-copy-types";

const appleWatchProductCopy: Record<
  ContentLanguage,
  Record<AppleWatchModel, ProductCopy>
> = {
  en: {
    "apple-watch-series-11": {
      name: "Apple Watch Series 11",
      eyebrow: "THE ULTIMATE HEALTH COMPANION.",
      intro: "Up to 24 hours of battery life, breakthrough health insights, and 5G in a thin, comfortable design.",
      display: "42mm / 46mm",
      camera: "Heart + temperature",
      secondarySpecLabel: "SENSORS",
      battery: "24 hours",
      designTitle: "Thin by design. Tough by nature.",
      designBody: "The elegant aluminum case pairs with Ion-X glass treated for twice the scratch resistance, ready for workouts, swims, and sleep.",
      cameraTitle: "More insight, simply by wearing it.",
      cameraBody: "The optical heart sensor supports hypertension notifications, while temperature, blood oxygen, and motion sensing deepen sleep and wellness insights.",
      secondarySectionKicker: "HEALTH / 02",
      performanceTitle: "S10. Fast gestures. Faster 5G.",
      performanceBody: "The S10 chip powers double tap, wrist flick, on-device Siri, and an efficient 5G connection for calls, messages, and apps on the go.",
    },
    "apple-watch-ultra-3": {
      name: "Apple Watch Ultra 3",
      eyebrow: "PERSONAL BEAST.",
      intro: "A 49mm titanium adventure watch with satellite communications, precision dual-frequency GPS, and up to 42 hours of battery life.",
      display: "49mm OLED",
      camera: "Health + depth",
      secondarySpecLabel: "SENSORS",
      battery: "42 hours",
      designTitle: "Built for the extremes.",
      designBody: "A rugged titanium case, sapphire crystal, WR100 water resistance, and a customizable Action button are ready for trails, open water, and daily life.",
      cameraTitle: "A body of metrics on your wrist.",
      cameraBody: "Heart, temperature, depth, water temperature, and motion sensors support advanced training, sleep, ECG, and hypertension insights.",
      secondarySectionKicker: "HEALTH / 02",
      performanceTitle: "Satellite. 5G. Precision GPS.",
      performanceBody: "Two-way satellite communications, dual-frequency GPS, and 5G help you navigate, stay connected, and reach help when adventures go off grid.",
    },
    "apple-watch-se-3": {
      name: "Apple Watch SE 3",
      eyebrow: "WALK IT. TRACK IT. LOVE IT.",
      intro: "An Always-On display, advanced health features, fast charging, and the S10 chip at an approachable price.",
      display: "40mm / 44mm",
      camera: "Heart + temperature",
      secondarySpecLabel: "SENSORS",
      battery: "18 hours",
      designTitle: "Everyday durability. Two sizes.",
      designBody: "The recycled aluminum case comes in 40mm and 44mm, with Ion-X cover glass engineered to be four times more crack resistant than before.",
      cameraTitle: "Health essentials, day and night.",
      cameraBody: "Heart rate, wrist temperature, motion, and sleep sensing power sleep score, sleep apnea notifications, Cycle Tracking, and safety features.",
      secondarySectionKicker: "HEALTH / 02",
      performanceTitle: "S10 brings more within reach.",
      performanceBody: "S10 enables the Always-On display, double tap, wrist flick, on-device Siri, 5G, and fast charging for up to eight hours in 15 minutes.",
    },
  },
  vi: {
    "apple-watch-series-11": {
      name: "Apple Watch Series 11",
      eyebrow: "NGƯỜI BẠN ĐỒNG HÀNH SỨC KHỎE TOÀN DIỆN.",
      intro: "Pin lên đến 24 giờ, những thông tin sức khỏe đột phá và 5G trong thiết kế mỏng nhẹ, thoải mái.",
      display: "42mm / 46mm",
      camera: "Tim + nhiệt độ",
      secondarySpecLabel: "CẢM BIẾN",
      battery: "24 giờ",
      designTitle: "Mỏng thanh lịch. Bền bỉ tự nhiên.",
      designBody: "Vỏ nhôm thanh lịch đi cùng kính Ion-X có khả năng chống trầy xước gấp đôi, sẵn sàng cho luyện tập, bơi lội và giấc ngủ.",
      cameraTitle: "Hiểu cơ thể hơn, chỉ bằng cách đeo.",
      cameraBody: "Cảm biến tim quang học hỗ trợ thông báo tăng huyết áp; cảm biến nhiệt độ, oxy trong máu và chuyển động làm sâu sắc thêm thông tin về giấc ngủ và sức khỏe.",
      secondarySectionKicker: "SỨC KHỎE / 02",
      performanceTitle: "S10. Cử chỉ nhanh. 5G nhanh hơn.",
      performanceBody: "Chip S10 vận hành chạm hai lần, lắc cổ tay, Siri trên thiết bị và kết nối 5G hiệu quả cho cuộc gọi, tin nhắn và ứng dụng mọi nơi.",
    },
    "apple-watch-ultra-3": {
      name: "Apple Watch Ultra 3",
      eyebrow: "MÃNH THÚ CÁ NHÂN.",
      intro: "Đồng hồ phiêu lưu titanium 49mm với liên lạc vệ tinh, GPS hai tần số chính xác và pin lên đến 42 giờ.",
      display: "OLED 49mm",
      camera: "Sức khỏe + độ sâu",
      secondarySpecLabel: "CẢM BIẾN",
      battery: "42 giờ",
      designTitle: "Sinh ra cho những giới hạn.",
      designBody: "Vỏ titanium bền bỉ, kính sapphire, khả năng chống nước WR100 và nút Tác Vụ tùy chỉnh luôn sẵn sàng cho đường mòn, biển khơi và mỗi ngày.",
      cameraTitle: "Một hệ chỉ số ngay trên cổ tay.",
      cameraBody: "Cảm biến tim, nhiệt độ, độ sâu, nhiệt độ nước và chuyển động hỗ trợ luyện tập nâng cao, giấc ngủ, ECG và thông tin tăng huyết áp.",
      secondarySectionKicker: "SỨC KHỎE / 02",
      performanceTitle: "Vệ tinh. 5G. GPS chính xác.",
      performanceBody: "Liên lạc vệ tinh hai chiều, GPS hai tần số và 5G giúp bạn định hướng, giữ kết nối và gọi trợ giúp khi đi ngoài vùng phủ sóng.",
    },
    "apple-watch-se-3": {
      name: "Apple Watch SE 3",
      eyebrow: "ĐI BỘ. THEO DÕI. YÊU THÍCH.",
      intro: "Màn hình Luôn Bật, tính năng sức khỏe nâng cao, sạc nhanh và chip S10 với mức giá dễ tiếp cận.",
      display: "40mm / 44mm",
      camera: "Tim + nhiệt độ",
      secondarySpecLabel: "CẢM BIẾN",
      battery: "18 giờ",
      designTitle: "Bền bỉ mỗi ngày. Hai kích thước.",
      designBody: "Vỏ nhôm tái chế có cỡ 40mm và 44mm, kết hợp kính Ion-X được thiết kế chống nứt tốt hơn gấp bốn lần thế hệ trước.",
      cameraTitle: "Sức khỏe thiết yếu, cả ngày lẫn đêm.",
      cameraBody: "Nhịp tim, nhiệt độ cổ tay, chuyển động và giấc ngủ cung cấp điểm số giấc ngủ, thông báo ngưng thở khi ngủ, Theo Dõi Chu Kỳ và các tính năng an toàn.",
      secondarySectionKicker: "SỨC KHỎE / 02",
      performanceTitle: "S10 đưa nhiều tính năng đến gần hơn.",
      performanceBody: "S10 hỗ trợ màn hình Luôn Bật, chạm hai lần, lắc cổ tay, Siri trên thiết bị, 5G và sạc nhanh 15 phút cho thời lượng dùng đến tám giờ.",
    },
  },
  pt: {
    "apple-watch-series-11": {
      name: "Apple Watch Series 11", eyebrow: "O COMPANHEIRO DEFINITIVO PARA A SAÚDE.", intro: "Até 24 horas de bateria, informações de saúde avançadas e 5G num design fino e confortável.", display: "42 mm / 46 mm", camera: "Coração + temperatura", secondarySpecLabel: "SENSORES", battery: "24 horas", designTitle: "Fino por design. Resistente por natureza.", designBody: "A caixa de alumínio combina com vidro Ion-X duas vezes mais resistente a riscos, pronta para treinos, natação e sono.", cameraTitle: "Mais informação só por usá-lo.", cameraBody: "Os sensores cardíaco, de temperatura, oxigénio no sangue e movimento aprofundam os dados de sono e bem-estar.", secondarySectionKicker: "SAÚDE / 02", performanceTitle: "S10. Gestos rápidos. 5G mais veloz.", performanceBody: "O S10 permite duplo toque, gesto de pulso, Siri no dispositivo e 5G eficiente para chamadas, mensagens e apps.",
    },
    "apple-watch-ultra-3": {
      name: "Apple Watch Ultra 3", eyebrow: "UMA FERA PESSOAL.", intro: "Relógio de aventura em titânio de 49 mm com satélite, GPS de dupla frequência e até 42 horas de bateria.", display: "OLED de 49 mm", camera: "Saúde + profundidade", secondarySpecLabel: "SENSORES", battery: "42 horas", designTitle: "Feito para os extremos.", designBody: "Caixa de titânio, cristal de safira, resistência WR100 e botão Ação para trilhos, águas abertas e o dia a dia.", cameraTitle: "Um corpo de métricas no pulso.", cameraBody: "Sensores cardíaco, de temperatura, profundidade, água e movimento apoiam treino, sono, ECG e dados de hipertensão.", secondarySectionKicker: "SAÚDE / 02", performanceTitle: "Satélite. 5G. GPS de precisão.", performanceBody: "Comunicação via satélite, GPS de dupla frequência e 5G ajudam a navegar, manter contacto e pedir ajuda fora da rede.",
    },
    "apple-watch-se-3": {
      name: "Apple Watch SE 3", eyebrow: "MEXA-SE. ACOMPANHE. ADORA.", intro: "Tela Sempre Ativa, saúde avançada, carregamento rápido e S10 a um preço acessível.", display: "40 mm / 44 mm", camera: "Coração + temperatura", secondarySpecLabel: "SENSORES", battery: "18 horas", designTitle: "Resistência diária. Dois tamanhos.", designBody: "A caixa de alumínio reciclado vem em 40 e 44 mm, com vidro Ion-X quatro vezes mais resistente a fissuras.", cameraTitle: "Saúde essencial, dia e noite.", cameraBody: "Frequência cardíaca, temperatura, movimento e sono alimentam a pontuação de sono, avisos de apneia e recursos de segurança.", secondarySectionKicker: "SAÚDE / 02", performanceTitle: "S10 coloca mais ao alcance.", performanceBody: "O S10 traz tela Sempre Ativa, gestos, Siri no dispositivo, 5G e carregamento rápido para até oito horas em 15 minutos.",
    },
  },
  es: {
    "apple-watch-series-11": {
      name: "Apple Watch Series 11", eyebrow: "EL COMPAÑERO DEFINITIVO PARA TU SALUD.", intro: "Hasta 24 horas de batería, datos de salud avanzados y 5G en un diseño fino y cómodo.", display: "42 mm / 46 mm", camera: "Corazón + temperatura", secondarySpecLabel: "SENSORES", battery: "24 horas", designTitle: "Fino por diseño. Resistente por naturaleza.", designBody: "La caja de aluminio se combina con vidrio Ion-X dos veces más resistente a los arañazos, listo para entrenar, nadar y dormir.", cameraTitle: "Más información con solo llevarlo.", cameraBody: "Los sensores cardiaco, de temperatura, oxígeno en sangre y movimiento amplían los datos de sueño y bienestar.", secondarySectionKicker: "SALUD / 02", performanceTitle: "S10. Gestos rápidos. 5G más veloz.", performanceBody: "El S10 activa doble toque, giro de muñeca, Siri en el dispositivo y 5G eficiente para llamadas, mensajes y apps.",
    },
    "apple-watch-ultra-3": {
      name: "Apple Watch Ultra 3", eyebrow: "UNA BESTIA PERSONAL.", intro: "Reloj de aventura de titanio de 49 mm con satélite, GPS de doble frecuencia y hasta 42 horas de batería.", display: "OLED de 49 mm", camera: "Salud + profundidad", secondarySpecLabel: "SENSORES", battery: "42 horas", designTitle: "Hecho para los extremos.", designBody: "Caja de titanio, cristal de zafiro, resistencia WR100 y botón Acción para senderos, aguas abiertas y el día a día.", cameraTitle: "Un mundo de métricas en tu muñeca.", cameraBody: "Sensores cardiaco, de temperatura, profundidad, agua y movimiento impulsan el entrenamiento, el sueño, el ECG y los datos de hipertensión.", secondarySectionKicker: "SALUD / 02", performanceTitle: "Satélite. 5G. GPS de precisión.", performanceBody: "La comunicación por satélite, el GPS de doble frecuencia y el 5G ayudan a navegar, mantener el contacto y pedir ayuda sin cobertura.",
    },
    "apple-watch-se-3": {
      name: "Apple Watch SE 3", eyebrow: "CAMINA. MÍDELO. DISFRÚTALO.", intro: "Pantalla siempre activa, salud avanzada, carga rápida y chip S10 a un precio accesible.", display: "40 mm / 44 mm", camera: "Corazón + temperatura", secondarySpecLabel: "SENSORES", battery: "18 horas", designTitle: "Resistencia diaria. Dos tamaños.", designBody: "La caja de aluminio reciclado viene en 40 y 44 mm, con vidrio Ion-X cuatro veces más resistente a las grietas.", cameraTitle: "Salud esencial, día y noche.", cameraBody: "Ritmo cardiaco, temperatura, movimiento y sueño impulsan la puntuación de sueño, los avisos de apnea y las funciones de seguridad.", secondarySectionKicker: "SALUD / 02", performanceTitle: "S10 pone más a tu alcance.", performanceBody: "El S10 trae pantalla siempre activa, gestos, Siri en el dispositivo, 5G y carga rápida para hasta ocho horas en 15 minutos.",
    },
  },
  zh: {
    "apple-watch-series-11": {
      name: "Apple Watch Series 11", eyebrow: "全方位健康好搭档。", intro: "长达 24 小时电池续航、突破性健康洞察与 5G，融入轻薄舒适设计。", display: "42 毫米 / 46 毫米", camera: "心率 + 体温", secondarySpecLabel: "传感器", battery: "24 小时", designTitle: "轻薄有型，坚韧天成。", designBody: "铝金属表款搭配抗刮能力提升至两倍的 Ion-X 玻璃，运动、游泳和睡眠皆从容。", cameraTitle: "戴在腕上，洞察更多。", cameraBody: "光学心率、体温、血氧与运动传感器带来高血压通知，并深化睡眠和健康洞察。", secondarySectionKicker: "健康 / 02", performanceTitle: "S10，手势更快，5G 更迅捷。", performanceBody: "S10 支持双指互点、翻腕、设备端 Siri 与高效 5G，随时处理通话、信息和应用。",
    },
    "apple-watch-ultra-3": {
      name: "Apple Watch Ultra 3", eyebrow: "腕上猛将。", intro: "49 毫米钛金属探险手表，支持卫星通信、精确双频 GPS，并提供长达 42 小时续航。", display: "49 毫米 OLED", camera: "健康 + 深度", secondarySpecLabel: "传感器", battery: "42 小时", designTitle: "为极限而生。", designBody: "坚固钛金属表壳、蓝宝石玻璃、WR100 防水与可自定义操作按钮，应对山野、开放水域和日常生活。", cameraTitle: "丰富指标，尽在腕间。", cameraBody: "心率、体温、深度、水温与运动传感器支持进阶训练、睡眠、心电图和高血压洞察。", secondarySectionKicker: "健康 / 02", performanceTitle: "卫星、5G、精确 GPS。", performanceBody: "双向卫星通信、双频 GPS 与 5G 帮你导航、保持联系，并在离线探险时获取援助。",
    },
    "apple-watch-se-3": {
      name: "Apple Watch SE 3", eyebrow: "走起来，练起来，爱上它。", intro: "全天候显示屏、进阶健康功能、快速充电与 S10 芯片，轻松入手。", display: "40 毫米 / 44 毫米", camera: "心率 + 体温", secondarySpecLabel: "传感器", battery: "18 小时", designTitle: "日常耐用，两种尺寸。", designBody: "再生铝金属表壳提供 40 与 44 毫米尺寸，Ion-X 玻璃抗裂能力提升至四倍。", cameraTitle: "昼夜守护健康要点。", cameraBody: "心率、腕温、运动和睡眠传感器支持睡眠评分、睡眠呼吸暂停通知、经期跟踪与安全功能。", secondarySectionKicker: "健康 / 02", performanceTitle: "S10，让更多功能触手可及。", performanceBody: "S10 支持全天候显示、手势、设备端 Siri、5G 与快速充电，充电 15 分钟即可使用最长八小时。",
    },
  },
  ja: {
    "apple-watch-series-11": {
      name: "Apple Watch Series 11", eyebrow: "究極の健康パートナー。", intro: "最大24時間のバッテリー、画期的な健康情報、5Gを薄く快適なデザインに。", display: "42mm / 46mm", camera: "心拍数 + 皮膚温", secondarySpecLabel: "センサー", battery: "24時間", designTitle: "薄さと強さを両立。", designBody: "アルミニウムケースに耐擦傷性能が2倍になったIon-Xガラスを組み合わせ、運動、水泳、睡眠まで支えます。", cameraTitle: "身につけるだけで、もっと深く。", cameraBody: "心拍、皮膚温、血中酸素、モーションのセンサーが高血圧通知や睡眠、健康の情報を深めます。", secondarySectionKicker: "健康 / 02", performanceTitle: "S10。高速ジェスチャー。高速5G。", performanceBody: "S10がダブルタップ、手首フリック、デバイス上のSiri、効率的な5Gを動かします。",
    },
    "apple-watch-ultra-3": {
      name: "Apple Watch Ultra 3", eyebrow: "腕に宿る野性。", intro: "衛星通信、高精度2周波GPS、最大42時間バッテリーを備えた49mmチタニウムモデル。", display: "49mm OLED", camera: "健康 + 水深", secondarySpecLabel: "センサー", battery: "42時間", designTitle: "過酷な環境のために。", designBody: "頑丈なチタニウムケース、サファイアクリスタル、WR100耐水性能、アクションボタンが冒険を支えます。", cameraTitle: "多彩な指標を手首に。", cameraBody: "心拍、皮膚温、水深、水温、モーションのセンサーがトレーニング、睡眠、心電図、高血圧の情報を支えます。", secondarySectionKicker: "健康 / 02", performanceTitle: "衛星。5G。高精度GPS。", performanceBody: "双方向衛星通信、2周波GPS、5Gにより、圏外でもナビゲーション、連絡、救助要請が可能です。",
    },
    "apple-watch-se-3": {
      name: "Apple Watch SE 3", eyebrow: "歩こう。記録しよう。好きになろう。", intro: "常時表示ディスプレイ、高度な健康機能、高速充電、S10を手に取りやすく。", display: "40mm / 44mm", camera: "心拍数 + 皮膚温", secondarySpecLabel: "センサー", battery: "18時間", designTitle: "毎日の丈夫さ。2つのサイズ。", designBody: "再生アルミニウムケースは40mmと44mm。Ion-Xガラスの耐亀裂性能は従来の4倍です。", cameraTitle: "昼も夜も、健康の基本を。", cameraBody: "心拍、手首皮膚温、モーション、睡眠のセンサーが睡眠スコア、睡眠時無呼吸通知、安全機能を支えます。", secondarySectionKicker: "健康 / 02", performanceTitle: "S10で、もっと身近に。", performanceBody: "常時表示、ジェスチャー、デバイス上のSiri、5G、高速充電をS10が実現。15分で最大8時間使えます。",
    },
  },
};

export function getAppleWatchProductCopy(
  language: Language,
  model: AppleWatchModel,
) {
  return appleWatchProductCopy[resolveContentLanguage(language)][model];
}
