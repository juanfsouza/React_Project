import styled from "styled-components"

const keys = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'y',
    'z',
]

    const Wrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 0.5rem;
        width: 600px;
    `

    const Button = styled.button<{ isActive: boolean }>`
    opacity: ${(p) => (p.isActive ? 'null' : '0')};

    &:focus-visible:disabled {
        outline: none;
        border-color: transparent;
        cursor: pointer;
    }

    &:focus-visible:disabled {
        outline: none;
        border-color: transparent;
        cursor: pointer;
    }

    &:hover:disabled {
        outline: none;
        border-color: transparent;
        cursor: not-allowed;
    }
 `

    interface KeyBoardProps {
        activeLetters: string[]
        inactiveLetters: string[]
        disabled?: boolean
        addGuessedLetters: (letter: string) => void
    }

    export default function Keyboard({
        disabled = false,
        activeLetters,
        inactiveLetters,
        addGuessedLetters,
        }: KeyBoardProps) {
        return (
            <Wrapper>
                {keys.map((letter) => {
                const isActive = !activeLetters.includes(letter)
                const isInActive = !inactiveLetters.includes(letter)

                return (
                <Button onClick={() => 
                    addGuessedLetters(letter)} 
                    isActive={isActive && isInActive} 
                    key={letter}
                    disabled={!(isActive && isInActive) || disabled } 
                >
                    {letter.toLocaleUpperCase()}
                </Button>
                )
            })}
            </Wrapper>
        )
    }