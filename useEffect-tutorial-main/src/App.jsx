import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countB, setCountB] = useState(0)
  const [data, setData] = useState('')

  // --> Executa todas as vezes que um estado é alterado.
  useEffect(() => {
    console.log('executa sempre')
  })

  // --> Executa somente na primeira vez que a página é carregada.
  useEffect(() => {
    console.log('executa na primeira vez que a página carrega')
  }, [])

  // --> Executa sempre que um estado específico é alterado (Array de dependência).
  useEffect(() => {
    console.log('executa sempre que um estado específico é alterado')
  }, [count])

  // --> Utilizando o Clean Up.
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`O count foi executado ${count}`)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [count])

  // Exemplo prático - Request API
  useEffect(() => {
    fetch('https://api.github.com/users/jorgefperes/repos')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  if (!data) {
    return <p>loading</p>
  }

  return (
    <div className='App'>
      <h1>Front Beginners</h1>
      <h3>Repos: {data.map((repo) => repo.full_name)} </h3>
      <div className='card'>
        <p>Foi renderizado {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>
      <div className='card'>
        <p>Foi renderizado {countB}</p>
        <button onClick={() => setCountB((count) => count + 1)}>
          Render B
        </button>
      </div>
    </div>
  )
}

export default App
