"use client";

import { Box, Maximize2, Minimize2, Rotate3D, Scan, Sparkles } from "lucide-react";
import { useRef, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { finishes, modelCopy, modelFinishes, type Finish, type Model } from "./product-data";
import type { DuoPose } from "./three/official-models";
import { PhoneScene } from "./three/phone-scene";
import { useConceptTool } from "./use-webmcp";

export function IphoneExperience() {
  const [model, setModel] = useState<Model>("pro");
  const [finish, setFinish] = useState<Finish>("burgundy");
  const [duoPose, setDuoPose] = useState<DuoPose>("landscape");
  const [exploded, setExploded] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const experienceRef = useRef<HTMLElement>(null);
  const active = modelCopy[model];
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
            <a href="#experience" className="apple-mark" aria-label="iPhone 18 interactive, về đầu trải nghiệm">
              <span>i</span>18
            </a>
            <p>INTERACTIVE PRODUCT LAB</p>
            <a href="#sources">SOURCES ↗</a>
          </header>

          <div className="scene-reticle" aria-hidden="true"><span /><span /></div>
          <div className="scene-index" aria-hidden="true">
            <span>01</span><i /><span>05</span>
          </div>

          <div className="gesture-hint">
            <Rotate3D size={18} aria-hidden="true" />
            <span>KÉO ĐỂ XOAY<br />PHÍM + / − ĐỂ ZOOM</span>
          </div>

          <aside className="control-dock" aria-label="Điều khiển mô hình 3D">
            <div className="control-block control-block--model">
              <span className="control-caption">MODEL</span>
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
              <span className="control-caption">FINISH · {finishes[finish].name}</span>
              <div className="finish-picker">
                {availableFinishes.map((finishId) => (
                  <button
                    key={finishId}
                    className={finish === finishId ? "is-active" : ""}
                    onClick={() => setFinish(finishId)}
                    aria-label={`Chọn màu ${finishes[finishId].name}`}
                    aria-pressed={finish === finishId}
                    style={{ "--finish-color": finishes[finishId].color } as CSSProperties}
                  />
                ))}
              </div>
            </div>

            {model === "duo" && (
              <div className="control-block control-block--fold">
                <span className="control-caption">POSE</span>
                <RadioGroup value={duoPose} onValueChange={(value) => setDuoPose(value as DuoPose)} className="model-picker pose-picker">
                  <label htmlFor="pose-closed" className={duoPose === "closed" ? "is-active" : ""}>
                    <RadioGroupItem id="pose-closed" value="closed" className="model-radio" />
                    Closed
                  </label>
                  <label htmlFor="pose-landscape" className={duoPose === "landscape" ? "is-active" : ""}>
                    <RadioGroupItem id="pose-landscape" value="landscape" className="model-radio" />
                    Landscape
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
                {exploded ? "Chập lớp" : "Tách lớp"}
              </Button>
              <Button variant="ghost" size="icon-sm" onClick={() => setResetKey((value) => value + 1)} aria-label="Đặt lại góc nhìn">
                <Scan aria-hidden="true" />
              </Button>
            </div>
          </aside>

          <div className="live-specs" aria-live="polite">
            <span>{active.display}<small>DISPLAY</small></span>
            <span>{active.camera}<small>CAMERA</small></span>
            <span>{active.battery}<small>POWER</small></span>
          </div>
        </div>

        <div className="scroll-narrative">
          <article className="journey-copy journey-copy--one">
            <p className="journey-kicker">APPLE / 2026</p>
            <h1>{active.name}</h1>
            <h2>{active.eyebrow}</h2>
            <p>{active.intro}</p>
            <span className="scroll-cue">SCROLL TO DISASSEMBLE ↓</span>
          </article>

          <article className="journey-copy journey-copy--two journey-copy--right">
            <p className="journey-kicker">DESIGN / 01</p>
            <h2>{model === "pro" ? "Our finest unibody of work." : "A new iPhone enters the fold."}</h2>
            <p>
              {model === "pro"
                ? "Khung nhôm nguyên khối ôm lấy Ceramic Shield 2. Cụm camera Pro hòa vào một cao nguyên liền mạch ở mặt lưng."
                : "Hai nửa cân bằng quanh bản lề titanium Grade 5. Mở phẳng thành màn hình lớn nhất từng có trên iPhone."}
            </p>
          </article>

          <article className="journey-copy journey-copy--three">
            <p className="journey-kicker">CAMERA / 02</p>
            <h2>{model === "pro" ? "Variable aperture. Total control." : "Shoot from front to back."}</h2>
            <p>
              {model === "pro"
                ? "Ba camera Fusion 48MP, khẩu độ ƒ/1.48 đến ƒ/4.0 và zoom quang học 8x. Xoay mô hình để xem cụm quang học."
                : "Dual Fusion 48MP, Duo Preview và những góc chụp chỉ thiết kế gập mới tạo ra được."}
            </p>
          </article>

          <article className="journey-copy journey-copy--four journey-copy--right">
            <p className="journey-kicker">PERFORMANCE / 03</p>
            <h2>Vapor-cooled A20 Pro.</h2>
            <p>Buồng hơi thế hệ mới. Dual 16-core Neural Engine. Hiệu năng được giữ ổn định, kể cả khi xử lý AI trực tiếp trên máy.</p>
          </article>

          <article className="journey-copy journey-copy--five">
            <p className="journey-kicker">YOUR TURN / 04</p>
            <h2>Don’t just look.<br />Take control.</h2>
            <p>Dùng bảng điều khiển để đổi model, vật liệu, pose AR và tách từng lớp phần cứng trong không gian 3D.</p>
            <Button onClick={() => setExploded(true)} className="final-action"><Box aria-hidden="true" /> Explode the hardware</Button>
          </article>
        </div>
      </section>

      <section className="source-bar" id="sources">
        <div><Sparkles aria-hidden="true" /><span>APPLE AR MESH / THREE.JS</span></div>
        <p>Topology, độ bo, cụm camera, UV và vật liệu được chuyển trực tiếp từ asset AR công khai của Apple.</p>
        <nav aria-label="Nguồn tham chiếu">
          <a href="https://www.apple.com/iphone-18-pro/" target="_blank" rel="noreferrer">Apple · 18 Pro</a>
          <a href="https://www.apple.com/iphone-duo/" target="_blank" rel="noreferrer">Apple · Duo</a>
          <a href="https://cellphones.com.vn/mobile/apple/iphone-18.html" target="_blank" rel="noreferrer">CellphoneS</a>
        </nav>
      </section>
    </main>
  );
}
