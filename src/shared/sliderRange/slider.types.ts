export interface SliderRangeProps {
  min?: number;
  max?: number;
  step?: number;
  onChange?: (values: number[]) => void;
  barWidth?: number;
  barHeight?: number;
  barColor?: string;
  handleSize?: number;
  handleColor?: string;
  handleShape?: "circle" | "square";
}
