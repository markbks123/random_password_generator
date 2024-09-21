import React from "react";
import { useSlider } from "./slider.hooks";
import styles from "./slider.module.css";
import { SliderRangeProps } from "./slider.types";

const SliderRange: React.FC<SliderRangeProps> = ({
  min = 0,
  max = 100,
  step = 1,
  barWidth = 300,
  barHeight = 10,
  barColor = "#ccc",
  handleSize = 20,
  handleColor = "#007bff",
  handleShape = "circle",
  handleText = "values",
  onValuesChange

}) => {
  const { values, handleChange, sliderRef } = useSlider({
    min,
    max,
    step,
    onValuesChange
  });

  return (
    <div className={styles.slider_range}>
      <p>
        {handleText}
      </p>
      <div
        ref={sliderRef}
        className={styles.slider_track}
        style={{
          width: barWidth,
          height: barHeight,
          backgroundColor: barColor,
        }}
      >
        <div
          className={styles.slider_handle}
          style={{
            left: `${(values[0] / (max - min)) * 100}%`,
            width: handleSize,
            height: handleSize,
            borderRadius: handleShape === "circle" ? "50%" : "0",
            backgroundColor: handleColor,
          }}
        />
      </div>
      <div className={styles.slider_track_text_value}>
        <p> {values[0]}</p>
      </div>
    </div>
  );
};

export default SliderRange;
