
import React from 'react'
import CheckRadioConcept from './CheckRadioConcept'
import RangeConcept from './RangeConcept'
import { CHECK_AND_RADIO,RANGE } from '../../data'

const Modal = ({ message, onClose }: { message: string, onClose: () => void }) => (
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
    <p>{message}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default function Form({onSubmit}: {onSubmit: (data: { rangeValue: number, checkValue: { label: string, value: string }[][] }) => void }) {
    const [rangeValue, setRangeValue] = React.useState(0);
    const [checkValue, setCheckValues] = React.useState<{ label: string, value: string }[][]>([[], [], []]);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    
    const handleChange = (index: number) => (newValue: { label: string, value: string }[]) => {
        setCheckValues(prev => {
        const newCheckValues = [...prev];
        newCheckValues[index] = newValue;
        return newCheckValues;
        });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isSelected = checkValue.every(values => values.length > 0);
        if (isSelected && rangeValue !== 0) {
            onSubmit({ rangeValue, checkValue });
        }
        else if (!isSelected || rangeValue === 0) {
            setErrorMessage('Please select at least one option.');
            return;
        }

        console.log(rangeValue);
        console.log(checkValue);
        setErrorMessage(null);
    }
    const handleClear = () => {
        setRangeValue(0);
    };
    return (
        <div className="form-container">
        {errorMessage && <Modal message={errorMessage} onClose={() => setErrorMessage(null)} />}
        <form onSubmit={handleSubmit}>
            <section id="examples">
                <CheckRadioConcept {...CHECK_AND_RADIO[0]} onChange={handleChange(0)}/>
                <CheckRadioConcept {...CHECK_AND_RADIO[1]} onChange={handleChange(1)}/>
                <CheckRadioConcept {...CHECK_AND_RADIO[2]} onChange={handleChange(2)}/>
                <RangeConcept {...RANGE[0]} value={rangeValue} onChange={setRangeValue}/>
                    <button>Submit</button>
                    <button type ="reset"onClick={handleClear}>Clear</button>
            </section>
            </form>
        </div>
    )
}