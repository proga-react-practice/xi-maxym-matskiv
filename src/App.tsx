import React from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form/Form'
import Cards from './components/Cards'

type Submission = {
  rangeValue: number;
  checkValue: { label: string, value: string }[][];
};

function App() {
  //const [count, setCount] = useState(0)
  const [submissions, setSubmissions] = React.useState<Submission[]>([]);
  return (
    <>
      <div className="container">
          <section id="content">
      <main>
        
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
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
