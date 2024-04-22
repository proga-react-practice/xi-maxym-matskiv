import React, { useState,useEffect } from "react";

interface RangeConceptProps {
  label: string;
  class_Name: string;
  name: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export default function RangeConcept(props: RangeConceptProps){
  const [rangeValue, setRangeValue] = useState(props.value);
  
  useEffect(() => {
    setRangeValue(rangeValue);
  }, [rangeValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setRangeValue(newValue);
    props.onChange(newValue);
  };

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <div className={props.class_Name}>
        <input type="range"
          name={props.name}
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={handleChange} />
        <span>{props.value}</span>
      </div>
    </div>
  )
}