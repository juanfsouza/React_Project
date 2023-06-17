

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.6)',
    zIndex: '1000',
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '20%',
    left: '40%',
    Transform: 'translate(-50%,-50%)',
    padding: '150px',
    backgroundColor: '#fec',
    borderRadius: '10px',
    color: '#000',
}


export default function Modal({ isOpen, setModalOpen, children }) {
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div style={{ cursor: 'pointer' }}>
                    <input placeholder="SEU NOME" style={{ textAlign: 'center', }}></input>
                    </div>
                    <div>{children}</div>
                    <button onClick={setModalOpen}>Fechar</button>
                </div>
            </div>
        )
    }
}