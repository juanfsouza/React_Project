import { useState } from 'react'
import './App.css'
import Modal from './components/modal.jsx'

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='App'>
      Modal - PopUp
      <div>
        <button onClick={() => setOpenModal(true)}>Abrir o modal</button>
      </div>
    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      Conteudo Modal
    </Modal>
    </div>
  )
}

export default App
