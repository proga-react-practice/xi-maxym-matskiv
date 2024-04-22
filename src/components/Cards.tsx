export default function Cards({ submissions, onDelete }: { submissions: Submission[], onDelete: (index: number) => void }) {
    return (
        <div className="cards-container">
            {submissions.map((submission, index) => {
                const groupedCheckValues = submission.checkValue.reduce((acc, pairArray) => {
                    pairArray.forEach(pair => {
                        if (!acc[pair.label]) {
                            acc[pair.label] = [];
                        }
                        acc[pair.label].push(pair.value);
                    });
                    return acc;
                }, {} as { [key: string]: string[] });
                return (
                    <div key={index} className="card">
                        <table>
                            <tbody>
                                {Object.entries(groupedCheckValues).map(([label, values], pairIndex) => (
                                    <tr key={pairIndex}>
                                        <td>{label}</td>
                                        <td>{values.map((value, valueIndex) => (
                                            <span key={valueIndex} className="value-block">{value}</span>
                                        ))}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Rate AI Intelligence</td>
                                    <td>{submission.rangeValue}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

interface Submission {
    rangeValue: number;
    checkValue: { label: string, value: string }[][];
}