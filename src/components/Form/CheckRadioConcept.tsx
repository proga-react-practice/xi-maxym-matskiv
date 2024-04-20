import React from 'react';

interface CheckRadioConceptProps {
  label: string;
  class_Name: string;
  input_Type: string;
  name: string;
  value: string[];
  onChange: (value: { label: string, value: string }[]) => void;
}
export default function CheckRadioConcept(props: CheckRadioConceptProps) {
  const [checkValue, setCheckValue] = React.useState<{ label: string, value: string }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = { label: props.label, value: e.target.value };
    let updatedCheckValue;
    if (props.input_Type === 'checkbox') {
      if (checkValue.some(val => val.value === newValue.value)) {
        updatedCheckValue = checkValue.filter((val) => val.value !== newValue.value);
      } else {
        updatedCheckValue = [...checkValue, newValue];
      }
    } else if (props.input_Type === 'radio') {
      updatedCheckValue = [newValue];
    }
    setCheckValue(updatedCheckValue || []);
    props.onChange(updatedCheckValue || []);
  };

  const clearState = () => {
    setCheckValue([]);
    props.onChange([]);
  };

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <div className={props.class_Name}>
        {props.value.map((val, index) => (
          <React.Fragment key={index}>
            <input type={props.input_Type}
              name={props.name}
              value={val}
              id={val}
              onChange={handleChange} />
            <label htmlFor={val}>{val}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}