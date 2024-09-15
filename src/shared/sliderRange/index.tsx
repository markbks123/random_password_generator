import React, { useState, useRef, useEffect } from 'react';
import { SliderRangeProps } from './slider.types';
import { useHomePage } from '@/components/home/home.hooks';



const SliderRange: React.FC<SliderRangeProps> = ({
  min = 0,
  max = 100,
  step = 1,
  onChange = () => {},
  barWidth = 300,
  barHeight = 10,
  barColor = '#ccc',
  handleSize = 20,
  handleColor = '#007bff',
  handleShape = 'circle',
}) => {
    const {generatePassword, evaluatePasswordStrength, setStateInclude,password,includeUppercase,includeLowercase,includeNumbers,includeSymbols } = useHomePage();
  return (

    <div></div>
    // <div className="slider-range">
    //   <div ref={sliderRef} className="slider-track" style={{ width: barWidth, height: barHeight, backgroundColor: barColor }}>
    //     {values.map((value, index) => (
    //       <div
    //         key={index}
    //         className="slider-handle"
    //         style={{
    //           left: `${value / (max - min) * 100}%`,
    //           width: handleSize,
    //           height: handleSize,
    //           borderRadius: handleShape === 'circle' ? '50%' : '0',
    //           backgroundColor: handleColor,
    //         }}
    //       />
    //     ))}
    //   </div>
    //   <p>Values: {values.join(' - ')}</p>
    // </div>
  );
};

export default SliderRange;