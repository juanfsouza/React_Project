import { useState } from 'react'

export default function BasicForm() {
  const [text, setText] = useState('')

  const handleChangeText = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <h3>{text}</h3>
      <input name='text' onChange={handleChangeText} value={text} />
    </div>
  )
}
