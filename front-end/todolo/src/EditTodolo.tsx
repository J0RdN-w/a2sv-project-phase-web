import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputField from "./components/InputField";
import { useNavigate, useParams } from "react-router-dom";
import { Todolo } from "./model";
import { useAppSelector, useAppDispatch } from './hooks'
import { updateTodolo } from './todoloSlice'



export default function EditTodolo() {
  const { todoloId } = useParams()
  const navigate = useNavigate()
  const todolos = useAppSelector(state => state.todolo.todolos)
  const [todolo, setTodolo] = useState<string>(todolos.find((todolo) => `${todolo.id}` === todoloId)?.task ?? '')
  const dispatch = useAppDispatch()
  
  const handleTodoling = (e: React.FormEvent) => {
    e.preventDefault()
    if(todolo){
      console.log(todolo);
       dispatch(updateTodolo({id: Number(todoloId), task: todolo, isDone: false}))
        navigate(-1)
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
