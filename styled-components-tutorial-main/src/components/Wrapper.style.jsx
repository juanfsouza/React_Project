import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    color: inherit;
    text-decoration: none;
  }
`

/* Wrapper e padrao e cada pagina para nao ficar toda vez editando css */
