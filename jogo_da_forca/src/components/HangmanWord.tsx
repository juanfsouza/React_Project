import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 2.4em;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

interface HangmanWordProps {
    word: string
    guessedLetters: string[]
    reveal: boolean
}
 

export default function HangmanWord({ 
    word,
    reveal, 
    guessedLetters 
}: HangmanWordProps) {
    return (
        <Wrapper>
            {word.split('').map((letter, index) => (
            <span 
                style={{ 
                borderBottom: '0.15em solid white', 
                height: '50px',
                minWidth: '50px' 
                }} 
                key={index}
            >
            <span
                style={{ 
                visibility: 
                guessedLetters.includes(letter) || reveal
                ? 'visible' 
                : 'hidden', 
                color: !guessedLetters.includes(letter) && reveal ? 'red' : 'white',
                }}
            >
                {letter}
                </span>
            </span>
            ))}
        </Wrapper>
    )
}