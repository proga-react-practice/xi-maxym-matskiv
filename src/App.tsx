import React from 'react'
import './App.css'
import Form from './components/Form/Form'
import Cards from './components/Cards'

type Submission = {
  rangeValue: number;
  checkValue: { label: string, value: string }[][];
};

function App() {
  const [submissions, setSubmissions] = React.useState<Submission[]>([]);
  return (
    <>
      <div className="container">
          <section id="content">
      <main>
            <div className="main-container">
                <Form onSubmit={data => setSubmissions(prev => [...prev, data])} />
                <Cards submissions={submissions} onDelete={index => setSubmissions(prev => prev.filter((_, i) => i !== index))} />
            </div>
            </main>
        </section>
      </div>
        
    </>
  )
}

export default App
