"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Layers3 } from "lucide-react";
import {
  isSeries,
  seriesCatalog,
  seriesIds,
  type Series,
} from "./product-data";

type SeriesSelectProps = {
  label: string;
  value: Series;
  onChange: (series: Series) => void;
};

export function SeriesSelect({ label, value, onChange }: SeriesSelectProps) {
  return (
    <Select
      value={value}
      onValueChange={(next) => {
        if (isSeries(next)) onChange(next);
      }}
    >
      <SelectTrigger
        className="device-select-trigger series-select-trigger"
        aria-label={label}
      >
        <Layers3 aria-hidden="true" />
        <SelectValue>{seriesCatalog[value].shortLabel}</SelectValue>
      </SelectTrigger>
      <SelectContent
        className="device-select-content series-select-content"
        position="popper"
        align="start"
      >
        {seriesIds.map((series) => (
          <SelectItem
            key={series}
            value={series}
            className="device-select-item"
          >
            {seriesCatalog[series].label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
