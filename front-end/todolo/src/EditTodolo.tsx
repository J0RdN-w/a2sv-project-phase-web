import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputField from "./components/InputField";
import { useParams } from "react-router-dom";
import { Todolo } from "./model";

export default function EditTodolo() {
  const [todolo, setTodolo] = useState<string>("")
  const { todoloId } = useParams()

  useEffect(() => {
    const todolos = JSON.parse(localStorage.getItem('todolos') ?? '[]')
    console.log(todolos);
    setTodolo(todolos.find((todolo: Todolo) => `${todolo.id}` === todoloId)?.todolo)
  },[])
  
  const handleTodoling = (e: React.FormEvent) => {
    e.preventDefault()
    if(todolo){
        const todolos = JSON.parse(localStorage.getItem('todolos') ?? '[]')
        todolos.forEach((t: Todolo) => {
            if (`${t.id}` === todoloId){
                t.todolo = todolo
            }
        })
        localStorage.setItem('todolos', JSON.stringify(todolos))
        setTodolo('')
    }
  }

  return (
    <Main>
      <Title>edit todolo</Title>
      <Section>
        <InputField buttonName="edit todolo" todolo={todolo} setTodolo={setTodolo} handleTodoling={handleTodoling} />
      </Section>
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
