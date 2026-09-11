"use client";

import { cn } from "@/lib/utils";
import type { KeyboardEvent } from "react";

type SegmentedOption<Value extends string> = {
  value: Value;
  label: string;
};

type SegmentedControlProps<Value extends string> = {
  label: string;
  name: string;
  value: Value;
  options: ReadonlyArray<SegmentedOption<Value>>;
  onChange: (value: Value) => void;
  className?: string;
};

export function SegmentedControl<Value extends string>({
  label,
  name,
  value,
  options,
  onChange,
  className,
}: SegmentedControlProps<Value>) {
  const moveSelection = (event: KeyboardEvent<HTMLButtonElement>, optionIndex: number) => {
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown"
      ? 1
      : event.key === "ArrowLeft" || event.key === "ArrowUp"
        ? -1
        : 0;
    if (direction === 0) return;

    event.preventDefault();
    const nextIndex = (optionIndex + direction + options.length) % options.length;
    onChange(options[nextIndex].value);
    const controls = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="radio"]');
    controls?.[nextIndex]?.focus();
  };

  return (
    <div className={cn("model-picker", className)} role="radiogroup" aria-label={label}>
      {options.map((option, optionIndex) => (
        <button
          key={option.value}
          id={`${name}-${option.value}`}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          tabIndex={value === option.value ? 0 : -1}
          className={value === option.value ? "is-active" : ""}
          onClick={() => onChange(option.value)}
          onKeyDown={(event) => moveSelection(event, optionIndex)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
