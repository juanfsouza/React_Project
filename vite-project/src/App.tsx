import { useState } from 'react'
import './App.css'

interface ClickedProps {
  clientX: number
  clientY: number
}

function App() {
  const [clickedPoints, setClickedPoints] = useState<ClickedProps[]>([])
  const [undoPoints, setUndoPoints] = useState<ClickedProps[]>([])

  function getCordenates(e: React.MouseEvent<HTMLElement>) {
    console.log(e)
    const { clientX, clientY } = e

    setClickedPoints([...clickedPoints, { clientX, clientY }])
  }

  function handleUndo() {
    const newClickedPoint = [...clickedPoints]
    const undoPoint = newClickedPoint.pop()
    if (!undoPoint) return
    setClickedPoints(newClickedPoint)
     setUndoPoints([...undoPoints, undoPoint])
  }

  function handleRedo() {
    const newUndoPoints = [...undoPoints] 
    const redoPoint = newUndoPoints.pop()
    if (!redoPoint) return
    setUndoPoints(newUndoPoints)
    setClickedPoints([...clickedPoints, redoPoint])

  }

  return (
    <>
    <button disabled={clickedPoints.length === 0} onClick={handleUndo}>
      Undo
    </button>
    <button disabled={undoPoints.length === 0} onClick={handleRedo}>
      Redo
    </button>
      <div className='App' onClick={getCordenates}>
        {clickedPoints.map((clickedPoints, index) => {
          return <div 
          key={index} 
          className='cicle' 
          style={{
            left: clickedPoints.clientX -7,
            top: clickedPoints.clientY -6
          }}></div>
        })}
      </div>
    </>
  )
}

export default App
