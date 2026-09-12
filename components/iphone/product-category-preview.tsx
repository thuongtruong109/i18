import type { Language } from "./i18n";
import { getProductCategoryCopy } from "./product-category-copy";
import type { ProductCategory } from "./product-category-data";

type ProductCategoryPreviewProps = {
  category: ProductCategory;
  language: Language;
};

export function ProductCategoryPreview({
  category,
  language,
}: ProductCategoryPreviewProps) {
  const copy = getProductCategoryCopy(language, category);

  return (
    <div className="category-preview">
      <div className="category-preview__orb" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <article className="category-preview__copy">
        <p className="journey-kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <h2>{copy.eyebrow}</h2>
        <p>{copy.intro}</p>
        <div className="category-preview__series">
          <small>{copy.plannedLabel}</small>
          <p>{copy.plannedSeries.join(" · ")}</p>
        </div>
      </article>
    </div>
  );
}
