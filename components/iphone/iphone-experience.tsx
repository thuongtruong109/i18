"use client";

import { Button } from "@/components/ui/button";
import { Box, Maximize2, Minimize2, Rotate3D, Scan } from "lucide-react";
import { useRef, useState, type CSSProperties } from "react";
import { DeviceSelect } from "./device-select";
import { ExperienceFooter } from "./experience-footer";
import { LanguageSelect } from "./language-select";
import {
  hasProductModels,
  productCategoryCatalog,
  type ProductCategory,
} from "./product-category-data";
import { ProductCategoryPreview } from "./product-category-preview";
import { ProductSelect } from "./product-select";
import { SegmentedControl } from "./segmented-control";
import { SeriesSelect } from "./series-select";
import { getProductCopy } from "./product-copy";
import {
  finishes,
  getSeriesForModel,
  modelFinishes,
  productCatalog,
  seriesCatalog,
  type Finish,
  type Model,
} from "./product-data";
import type { DuoPose } from "./three/official-models";
import { ProductScene } from "./three/phone-scene";
import { useLanguage } from "./use-language";
import { useConceptTool } from "./use-webmcp";

export function AppleProductExperience() {
  const [category, setCategory] = useState<ProductCategory>("iphone");
  const [model, setModel] = useState<Model>("pro");
  const [finish, setFinish] = useState<Finish>("burgundy");
  const [duoPose, setDuoPose] = useState<DuoPose>("landscape");
  const [exploded, setExploded] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const experienceRef = useRef<HTMLElement>(null);
  const { language, setLanguage, content } = useLanguage();
  const active = getProductCopy(content, language, model);
  const availableFinishes = modelFinishes[model];
  const series = getSeriesForModel(model);
  const hasCatalog = hasProductModels(category);

  useConceptTool(setCategory, setModel, setFinish);

  function changeModel(next: Model) {
    setModel(next);
    setExploded(false);
    setFinish(productCatalog[next].defaultFinish);
  }

  function changeCategory(next: ProductCategory) {
    setCategory(next);
    setExploded(false);
    const defaultModel = productCategoryCatalog[next].defaultModel;
    if (defaultModel) changeModel(defaultModel);
  }

  return (
    <main className={`immersive-page immersive-page--${category} immersive-page--${model}`}>
      <section
        ref={experienceRef}
        className={`immersive-stage${hasCatalog ? "" : " immersive-stage--category"}`}
        id="experience"
      >
        <div className="stage-sticky">
          {hasCatalog ? (
            <ProductScene
              containerRef={experienceRef}
              model={model}
              finish={finish}
              duoPose={duoPose}
              exploded={exploded}
              resetKey={resetKey}
            />
          ) : (
            <ProductCategoryPreview category={category} language={language} />
          )}

          <header className="experience-header">
            <a
              href="#experience"
              className="apple-mark"
              aria-label={content.header.homeLabel}
            >
              <span>Apple</span> {productCategoryCatalog[category].shortLabel}
            </a>
            <p>{content.header.productLab}</p>
            <div className="header-actions">
              <LanguageSelect
                language={language}
                label={content.header.language}
                onChange={setLanguage}
              />
            </div>
          </header>

          {hasCatalog && (
            <>
              <div className="scene-reticle" aria-hidden="true">
                <span />
                <span />
              </div>
              <div className="scene-index" aria-hidden="true">
                <span>01</span>
                <i />
                <span>05</span>
              </div>

              <div className="gesture-hint">
                <Rotate3D size={18} aria-hidden="true" />
                <span>
                  {content.gesture.rotate}
                  <br />
                  {content.gesture.zoom}
                </span>
              </div>
            </>
          )}

          <aside
            className="control-dock"
            aria-label={content.controls.panelLabel}
          >
            <div className="control-block control-block--product">
              <span className="control-caption">{content.controls.product}</span>
              <ProductSelect
                label={content.controls.product}
                value={category}
                onChange={changeCategory}
              />
            </div>

            {hasCatalog && (
              <>
                <div className="control-block control-block--series">
                  <span className="control-caption">{content.controls.series}</span>
                  <SeriesSelect
                    label={content.controls.series}
                    value={series}
                    series={productCategoryCatalog[category].series}
                    onChange={(next) => changeModel(seriesCatalog[next].defaultModel)}
                  />
                </div>

                <div className="control-block control-block--model">
                  <span className="control-caption">{content.controls.model}</span>
                  <DeviceSelect
                    label={content.controls.model}
                    value={model}
                    models={seriesCatalog[series].models}
                    onChange={changeModel}
                  />
                </div>

                <div className="control-block control-block--finish">
                  <span className="control-caption">
                    {content.controls.finish} · {content.finishes[finish]}
                  </span>
                  <div className="finish-picker">
                    {availableFinishes.map((finishId) => (
                      <button
                        key={finishId}
                        className={finish === finishId ? "is-active" : ""}
                        onClick={() => setFinish(finishId)}
                        aria-label={content.controls.chooseFinish(
                          content.finishes[finishId],
                        )}
                        aria-pressed={finish === finishId}
                        style={
                          {
                            "--finish-color": finishes[finishId].color,
                          } as CSSProperties
                        }
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {hasCatalog && productCatalog[model].isFoldable && (
              <div className="control-block control-block--fold">
                <span className="control-caption">{content.controls.pose}</span>
                <SegmentedControl
                  label={content.controls.pose}
                  name="duo-pose"
                  value={duoPose}
                  onChange={setDuoPose}
                  className="pose-picker"
                  options={[
                    { value: "closed", label: content.controls.closed },
                    { value: "landscape", label: content.controls.landscape },
                  ]}
                />
              </div>
            )}

            {hasCatalog && (
              <div className="control-actions">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExploded((value) => !value)}
                  aria-pressed={exploded}
                >
                  {exploded ? (
                    <Minimize2 aria-hidden="true" />
                  ) : (
                    <Maximize2 aria-hidden="true" />
                  )}
                  {exploded
                    ? content.controls.collapse
                    : content.controls.explode}
                </Button>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setResetKey((value) => value + 1)}
                  aria-label={content.controls.resetView}
                >
                  <Scan aria-hidden="true" />
                </Button>
              </div>
            )}
          </aside>

          {hasCatalog && <div className="live-specs" aria-live="polite">
            <span>
              {active.display}
              <small>{content.controls.display}</small>
            </span>
            <span>
              {active.camera}
              <small>{active.secondarySpecLabel ?? content.controls.camera}</small>
            </span>
            <span>
              {active.battery}
              <small>{content.controls.power}</small>
            </span>
          </div>}
        </div>

        {hasCatalog && <div className="scroll-narrative">
          <article className="journey-copy journey-copy--one">
            <p className="journey-kicker">{content.journey.introKicker}</p>
            <h1>{active.name}</h1>
            <h2>{active.eyebrow}</h2>
            <p>{active.intro}</p>
            <span className="scroll-cue">{content.journey.scrollCue}</span>
          </article>

          <article className="journey-copy journey-copy--two journey-copy--right">
            <p className="journey-kicker">{content.journey.designKicker}</p>
            <h2>{active.designTitle}</h2>
            <p>{active.designBody}</p>
          </article>

          <article className="journey-copy journey-copy--three">
            <p className="journey-kicker">
              {active.secondarySectionKicker ?? content.journey.cameraKicker}
            </p>
            <h2>{active.cameraTitle}</h2>
            <p>{active.cameraBody}</p>
          </article>

          <article className="journey-copy journey-copy--four journey-copy--right">
            <p className="journey-kicker">
              {content.journey.performanceKicker}
            </p>
            <h2>{active.performanceTitle}</h2>
            <p>{active.performanceBody}</p>
          </article>

          <article className="journey-copy journey-copy--five">
            <p className="journey-kicker">{content.journey.turnKicker}</p>
            <h2>
              {content.journey.finalTitle[0]}
              <br />
              {content.journey.finalTitle[1]}
            </h2>
            <p>{content.journey.finalBody}</p>
            <Button onClick={() => setExploded(true)} className="final-action">
              <Box aria-hidden="true" /> {content.journey.finalAction}
            </Button>
          </article>
        </div>}
      </section>

      <ExperienceFooter content={content.sources} />
    </main>
  );
}
