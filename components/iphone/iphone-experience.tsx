"use client";

import { Box, Maximize2, Minimize2, Rotate3D, Scan } from "lucide-react";
import { useRef, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ExperienceFooter } from "./experience-footer";
import { LanguageSelect } from "./language-select";
import { finishes, modelFinishes, type Finish, type Model } from "./product-data";
import type { DuoPose } from "./three/official-models";
import { PhoneScene } from "./three/phone-scene";
import { useConceptTool } from "./use-webmcp";
import { useLanguage } from "./use-language";

export function IphoneExperience() {
  const [model, setModel] = useState<Model>("pro");
  const [finish, setFinish] = useState<Finish>("burgundy");
  const [duoPose, setDuoPose] = useState<DuoPose>("landscape");
  const [exploded, setExploded] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const experienceRef = useRef<HTMLElement>(null);
  const { language, setLanguage, content } = useLanguage();
  const active = content.models[model];
  const availableFinishes = modelFinishes[model];

  useConceptTool(setModel, setFinish);

  function changeModel(next: Model) {
    setModel(next);
    setExploded(false);
    setFinish(next === "pro" ? "burgundy" : "night-sky");
  }

  return (
    <main className={`immersive-page immersive-page--${model}`}>
      <section ref={experienceRef} className="immersive-stage" id="experience">
        <div className="stage-sticky">
          <PhoneScene
            containerRef={experienceRef}
            model={model}
            finish={finish}
            duoPose={duoPose}
            exploded={exploded}
            resetKey={resetKey}
          />

          <header className="experience-header">
            <a href="#experience" className="apple-mark" aria-label={content.header.homeLabel}>
              <span>i</span>18
            </a>
            <p>{content.header.productLab}</p>
            <div className="header-actions">
              <a href="#sources" className="sources-link">{content.header.sources} ↗</a>
              <LanguageSelect
                language={language}
                label={content.header.language}
                onChange={setLanguage}
              />
            </div>
          </header>

          <div className="scene-reticle" aria-hidden="true"><span /><span /></div>
          <div className="scene-index" aria-hidden="true">
            <span>01</span><i /><span>05</span>
          </div>

          <div className="gesture-hint">
            <Rotate3D size={18} aria-hidden="true" />
            <span>{content.gesture.rotate}<br />{content.gesture.zoom}</span>
          </div>

          <aside className="control-dock" aria-label={content.controls.panelLabel}>
            <div className="control-block control-block--model">
              <span className="control-caption">{content.controls.model}</span>
              <RadioGroup value={model} onValueChange={(value) => changeModel(value as Model)} className="model-picker">
                <label htmlFor="model-pro" className={model === "pro" ? "is-active" : ""}>
                  <RadioGroupItem id="model-pro" value="pro" className="model-radio" />
                  18 Pro
                </label>
                <label htmlFor="model-duo" className={model === "duo" ? "is-active" : ""}>
                  <RadioGroupItem id="model-duo" value="duo" className="model-radio" />
                  iPhone Duo
                </label>
              </RadioGroup>
            </div>

            <div className="control-block control-block--finish">
              <span className="control-caption">{content.controls.finish} · {content.finishes[finish]}</span>
              <div className="finish-picker">
                {availableFinishes.map((finishId) => (
                  <button
                    key={finishId}
                    className={finish === finishId ? "is-active" : ""}
                    onClick={() => setFinish(finishId)}
                    aria-label={content.controls.chooseFinish(content.finishes[finishId])}
                    aria-pressed={finish === finishId}
                    style={{ "--finish-color": finishes[finishId].color } as CSSProperties}
                  />
                ))}
              </div>
            </div>

            {model === "duo" && (
              <div className="control-block control-block--fold">
                <span className="control-caption">{content.controls.pose}</span>
                <RadioGroup value={duoPose} onValueChange={(value) => setDuoPose(value as DuoPose)} className="model-picker pose-picker">
                  <label htmlFor="pose-closed" className={duoPose === "closed" ? "is-active" : ""}>
                    <RadioGroupItem id="pose-closed" value="closed" className="model-radio" />
                    {content.controls.closed}
                  </label>
                  <label htmlFor="pose-landscape" className={duoPose === "landscape" ? "is-active" : ""}>
                    <RadioGroupItem id="pose-landscape" value="landscape" className="model-radio" />
                    {content.controls.landscape}
                  </label>
                </RadioGroup>
              </div>
            )}

            <div className="control-actions">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExploded((value) => !value)}
                aria-pressed={exploded}
              >
                {exploded ? <Minimize2 aria-hidden="true" /> : <Maximize2 aria-hidden="true" />}
                {exploded ? content.controls.collapse : content.controls.explode}
              </Button>
              <Button variant="ghost" size="icon-sm" onClick={() => setResetKey((value) => value + 1)} aria-label={content.controls.resetView}>
                <Scan aria-hidden="true" />
              </Button>
            </div>
          </aside>

          <div className="live-specs" aria-live="polite">
            <span>{active.display}<small>{content.controls.display}</small></span>
            <span>{active.camera}<small>{content.controls.camera}</small></span>
            <span>{active.battery}<small>{content.controls.power}</small></span>
          </div>
        </div>

        <div className="scroll-narrative">
          <article className="journey-copy journey-copy--one">
            <p className="journey-kicker">{content.journey.introKicker}</p>
            <h1>{active.name}</h1>
            <h2>{active.eyebrow}</h2>
            <p>{active.intro}</p>
            <span className="scroll-cue">{content.journey.scrollCue}</span>
          </article>

          <article className="journey-copy journey-copy--two journey-copy--right">
            <p className="journey-kicker">{content.journey.designKicker}</p>
            <h2>{content.journey.designTitle[model]}</h2>
            <p>{content.journey.designBody[model]}</p>
          </article>

          <article className="journey-copy journey-copy--three">
            <p className="journey-kicker">{content.journey.cameraKicker}</p>
            <h2>{content.journey.cameraTitle[model]}</h2>
            <p>{content.journey.cameraBody[model]}</p>
          </article>

          <article className="journey-copy journey-copy--four journey-copy--right">
            <p className="journey-kicker">{content.journey.performanceKicker}</p>
            <h2>{content.journey.performanceTitle}</h2>
            <p>{content.journey.performanceBody}</p>
          </article>

          <article className="journey-copy journey-copy--five">
            <p className="journey-kicker">{content.journey.turnKicker}</p>
            <h2>{content.journey.finalTitle[0]}<br />{content.journey.finalTitle[1]}</h2>
            <p>{content.journey.finalBody}</p>
            <Button onClick={() => setExploded(true)} className="final-action"><Box aria-hidden="true" /> {content.journey.finalAction}</Button>
          </article>
        </div>
      </section>

      <ExperienceFooter content={content.sources} />
    </main>
  );
}
