import type { Language } from "./i18n";
import {
  productCategoryCatalog,
  type ProductCategory,
} from "./product-category-data";

type CategoryCopyTemplate = {
  kicker: string;
  eyebrow: string;
  intro: (product: string) => string;
  plannedLabel: string;
};

const categoryCopy: Record<Language, CategoryCopyTemplate> = {
  en: {
    kicker: "APPLE PRODUCT COLLECTION",
    eyebrow: "READY FOR THE NEXT DIMENSION.",
    intro: (product) => `${product} now has its own catalog boundary, ready for dedicated series, models, finishes, and official AR assets.`,
    plannedLabel: "COLLECTIONS READY TO ADD",
  },
  vi: {
    kicker: "BỘ SƯU TẬP SẢN PHẨM APPLE",
    eyebrow: "SẴN SÀNG CHO CHIỀU KHÔNG GIAN MỚI.",
    intro: (product) => `${product} đã có catalog độc lập, sẵn sàng nhận từng series, model, màu sắc và asset AR chính thức.`,
    plannedLabel: "CÁC NHÓM SẴN SÀNG BỔ SUNG",
  },
  pt: {
    kicker: "COLEÇÃO DE PRODUTOS APPLE",
    eyebrow: "PRONTO PARA UMA NOVA DIMENSÃO.",
    intro: (product) => `${product} agora tem um catálogo independente, pronto para séries, modelos, acabamentos e recursos AR oficiais.`,
    plannedLabel: "COLEÇÕES PRONTAS PARA ADICIONAR",
  },
  es: {
    kicker: "COLECCIÓN DE PRODUCTOS APPLE",
    eyebrow: "LISTO PARA UNA NUEVA DIMENSIÓN.",
    intro: (product) => `${product} ya tiene un catálogo independiente, listo para sus series, modelos, acabados y recursos AR oficiales.`,
    plannedLabel: "COLECCIONES LISTAS PARA AÑADIR",
  },
  zh: {
    kicker: "APPLE 产品系列",
    eyebrow: "为全新维度做好准备。",
    intro: (product) => `${product} 现已拥有独立目录，可继续加入专属系列、机型、外观与官方 AR 资源。`,
    plannedLabel: "待添加的产品系列",
  },
  ja: {
    kicker: "APPLE製品コレクション",
    eyebrow: "新しい次元への準備が完了。",
    intro: (product) => `${product}専用のカタログを用意しました。シリーズ、モデル、仕上げ、公式ARアセットを個別に追加できます。`,
    plannedLabel: "追加できるコレクション",
  },
  fr: {
    kicker: "COLLECTION DE PRODUITS APPLE",
    eyebrow: "PRÊT POUR UNE NOUVELLE DIMENSION.",
    intro: (product) => `${product} dispose maintenant de son propre catalogue, prêt à accueillir ses gammes, modèles, finitions et ressources AR officielles.`,
    plannedLabel: "COLLECTIONS PRÊTES À ÊTRE AJOUTÉES",
  },
  de: {
    kicker: "APPLE PRODUKTKOLLEKTION",
    eyebrow: "BEREIT FÜR DIE NÄCHSTE DIMENSION.",
    intro: (product) => `${product} hat jetzt einen eigenen Katalog für Serien, Modelle, Finishes und offizielle AR-Ressourcen.`,
    plannedLabel: "BEREITSTEHENDE KOLLEKTIONEN",
  },
  ko: {
    kicker: "APPLE 제품 컬렉션",
    eyebrow: "새로운 차원을 위한 준비 완료.",
    intro: (product) => `${product} 전용 카탈로그가 마련되었습니다. 시리즈, 모델, 마감 및 공식 AR 에셋을 추가할 수 있습니다.`,
    plannedLabel: "추가할 수 있는 컬렉션",
  },
};

export function getProductCategoryCopy(
  language: Language,
  category: ProductCategory,
) {
  const template = categoryCopy[language];
  const definition = productCategoryCatalog[category];

  return {
    ...template,
    title: definition.label,
    intro: template.intro(definition.label),
    plannedSeries: definition.plannedSeries,
  };
}
