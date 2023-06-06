const RenderCond = ({ y }) => {
    const x = 6;
    // Y e Props 
    
    return (
    <div>
        {x > 5 && <p>X e maior que 5</p>}
        {x > 5 ? <p>X e maior que 5</p> : <p>X nao e maior que 5</p>}
        {y > 10 ? <p>Y e maior que 10</p> : <p> nao e maior que 10</p>}  

    </div>
    )
}

export default RenderCond;