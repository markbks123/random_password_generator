import React, { useState, useRef, useEffect } from "react";
import { SliderRangeProps } from "./slider.types";

export function useSlider(props: SliderRangeProps) {
  const { min = 0, max = 50, step = 1 ,onValuesChange =()=>{} } = props;
  const [values, setValues] = useState([max,min]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleMouseDown = (event: MouseEvent) => {
      isDragging.current = true;

      const sliderRect = slider.getBoundingClientRect();
      const sliderWidth = sliderRect.width;
      const sliderOffsetLeft = sliderRect.left;
      const mouseX = event.clientX - sliderOffsetLeft;
      const percentage = mouseX / sliderWidth;

      // Calculate sliderValue
      const calculatedValue = Math.round(percentage * (max - min) + min);
      const sliderValue = Math.min(Math.max(calculatedValue, min), max);

      setValues([sliderValue]);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;

      const sliderRect = slider.getBoundingClientRect();
      const sliderWidth = sliderRect.width;
      const sliderOffsetLeft = sliderRect.left;
      const mouseX = event.clientX - sliderOffsetLeft;
      const percentage = mouseX / sliderWidth;
    
      // คำนวณค่า slider และตรวจสอบขอบเขต
      const calculatedValue = Math.round(percentage * (max - min) + min);
      const sliderValue = Math.min(Math.max(calculatedValue, min), max); // จำกัดค่าให้อยู่ในช่วง min ถึง max
    
      setValues([sliderValue]);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [min, max, step]);
  
   // Call the onValuesChange prop with the current values
   useEffect(() => {
    if (onValuesChange) {
      onValuesChange(values);
    }
  }, [values, onValuesChange]);

  return { values, handleChange: setValues, sliderRef };
}