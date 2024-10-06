export interface SliderRangeProps {
  min?: number;
  max?: number;
  step?: number;
  barWidth?: number;
  barHeight?: number;
  barColor?: string;
  handleSize?: number;
  handleColor?: string;
  handleShape?: "circle" | "square";
  handleText ?:string,
  onValuesChange?: (values: number[]) => void;
}
