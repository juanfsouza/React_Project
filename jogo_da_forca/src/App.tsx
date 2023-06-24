
import './App.css'
import styled from 'styled-components'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'
import { useState, useEffect, useCallback } from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 255px;
`

const words = ['betina', 'fernanda']

function App() {
  const [wordToGuess, setWordToGuess] = useState (() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]) //letra q digitamos
  
  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  )

  const correctGuesses = guessedLetters.filter((letter) => 
  wordToGuess.includes(letter)
  )

  const addGuessedLetters = useCallback (
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
    }, [guessedLetters])

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(key)
    }) as unknown as EventListener

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])
  
  const handleRefresh = () => window.location.reload()

  const isLoser = incorrectGuesses.length >= 6
  const isWinner = wordToGuess.split('')
  .every((letter) => guessedLetters.includes(letter)) // Betina => ['b', 'e', 't'....]
  
  return (
    <Wrapper>
      <HangmanPart>
        {isLoser && (
          <div style={{ 
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(48, 0, 0, 0.8)',
            zIndex: '9999'
            }}
          >
          <div style={{ 
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            }}
          >
          <h2 style={{ 
            margin: '50px',
            }}
          >
            Voce Perdeu, Tente Novamente!
          </h2>
            <button onClick={handleRefresh}>
                Tentar Novamente!
            </button>
          </div>
        </div>
        )}
        {isWinner && (
          <div style={{ 
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(5, 32, 0, 0.8)',
            zIndex: '9999'
            }}
          >
          <div style={{ 
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            }}
          >
            <h2 style={{ 
              margin: '50px',
              }}
            >
              Parabens Você Venceu
            </h2>
            <button onClick={handleRefresh}>
                Jogar Novamente!
            </button>
          </div>
        </div>
        )}
        <h2>Jogo da Forca</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} word={wordToGuess} />
      </HangmanPart>
      <Keyboard 
        disabled={isLoser || isWinner}
        activeLetters={correctGuesses} 
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
        />
    </Wrapper>
  )
}

export default App
