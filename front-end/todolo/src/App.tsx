import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Todolos from "./components/Todolos";
import { Todolo } from "./model";
import { PlusIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";


function App() {

  const [todolos, setTodolos] = useState<Todolo[]>(JSON.parse(localStorage.getItem("todolos") ?? '[]') ?? [])
  useEffect(() => {
    localStorage.setItem("todolos", JSON.stringify(todolos));
  }, [todolos]);

  return (
    <Main>
      <Title>todolo</Title>
      <Section>
        <Todolos todolos={todolos} setTodolos={setTodolos} />
      </Section>
      <Link to={`addtodolo`}>
      <Button ><AddTodo /></Button>
      </Link>
    </Main>
  );
}

const Main = styled.main`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Title = styled.h2`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #214ed3, #5a4fcf);
  font-size: 36px;
  font-weight: bold;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
position: fixed;
bottom: 1rem;
right: 1rem;
     background-image: linear-gradient(45deg, #214ed3, #5a4fcf);
    padding: .3rem;
    border-radius: .3rem;
    outline: none;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Box shadow */
  transition: box-shadow 0.3s ease;

  &:hover {
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3); /* Adjusted shadow on hover */
}
`

const AddTodo = styled(PlusIcon)`
width: 36px;
  height: 36px;
  color: white;
  cursor: pointer;
  `

export default App;
