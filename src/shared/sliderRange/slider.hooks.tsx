import { useState, useRef, useEffect } from 'react';
import { SliderRangeProps } from './slider.types';

export function useSlider(props: SliderRangeProps) {
  const { min = 0, max = 100, step = 1, onChange = () => {} } = props;
  const [values, setValues] = useState([min, max]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleMouseDown = (event: MouseEvent) => {
      isDragging.current = true;

      const sliderRect = slider.getBoundingClientRect();
      const sliderWidth = slider.offsetWidth;
      const sliderOffsetLeft = sliderRect.left;

      const mouseX = event.clientX - sliderOffsetLeft;
      const sliderValue = Math.round((mouseX / sliderWidth) * (max - min) + min);

      if (event.shiftKey) {
        // Handle range selection
        const currentValues = [...values];
        currentValues[0] = sliderValue;
        setValues(currentValues);
      } else {
        // Handle single value selection
        setValues([sliderValue]);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;

      const sliderRect = slider.getBoundingClientRect();
      const sliderWidth = slider.offsetWidth;
      const sliderOffsetLeft = sliderRect.left;

      const mouseX = event.clientX - sliderOffsetLeft;
      const sliderValue = Math.round((mouseX / sliderWidth) * (max - min) + min);

      if (event.shiftKey) {
        // Handle range selection
        const currentValues = [...values];
        currentValues[1] = sliderValue;
        setValues(currentValues);
      } else {
        // Handle single value selection
        setValues([sliderValue]);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
  }, [min, max, step, onChange]);

  return { values, handleChange: setValues };
}