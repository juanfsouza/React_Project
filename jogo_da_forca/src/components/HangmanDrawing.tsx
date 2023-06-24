import styled from 'styled-components'

const Base = styled.div `
    height: 10px;
    width: 250px;
    background: white;
    margin-left: 0px;
`

const VerticalLine = styled.div`
    height: 220px;
    width: 10px;
    background: white;
    margin-right: 50px;
`

const HorizontalLine = styled.div`
    height: 10px;
    width: 90px;
    background: white;
    position: absolute;
    right: 60px;
    top: 0;
`

const VerticalLineSmall = styled.div`
    height: 40px;
    width: 3px;
    background: wheat;
    margin-left: 150px;
    position: absolute;
    right: 63px;
    top: 10px;
`

const Line = styled.div`
    height: 20px;
    width: 10px;
    background: white;
    margin-left: 150px;
    position: absolute;
    right: 60px;
    top: 10px;
`

const Head = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 5px solid white;
    margin-left: 150px;
    position: absolute;
    right: 45px;
    top: 50px;
`

const Body = styled.div`
    height: 50px;
    width: 6.5px;
    background: white;
    position: absolute;
    right: 62px;
    top: 85px;
`

const ArmLeft = styled.div`
    height: 40px;
    width: 5px;
    background: white;
    position: absolute;
    right: 78px;
    rotate: -50deg;
    top: 75px;
`

const ArmRight = styled.div`
    height: 40px;
    width: 5px;
    background: white;
    position: absolute;
    right: 48px;
    rotate: 50deg;
    top: 75px;
`
const LegRight = styled.div`
    height: 40px;
    width: 5px;
    background: white;
    position: absolute;
    right: 48px;
    rotate: -50deg;
    top: 123px;
`
const LegLeft = styled.div`
    height: 40px;
    width: 5px;
    background: white;
    position: absolute;
    right: 78px;
    rotate: 50deg;
    top: 123px;
`

const bodyParts = [Head, Body, ArmLeft, ArmRight, LegRight, LegLeft]

interface HangmanDrawingProps {
    numberOfGuesses: number
}


export default function HangmanDrawing({ 
    numberOfGuesses, 
}: HangmanDrawingProps) {
    return ( 
    <div 
    style={{
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
    }}>
        {bodyParts.slice(0, numberOfGuesses).map((BodyParty, index) => {
            return <BodyParty key={index}/>
        })}
        <HorizontalLine />
        <VerticalLine />
        <VerticalLineSmall />
        <Line />
        <Base />
    </div>
    )
}