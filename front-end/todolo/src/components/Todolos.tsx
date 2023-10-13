import React from 'react'
import { PencilIcon, ArchiveBoxXMarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks'
import { deleteTodolo, markDone } from '../todoloSlice'


export default function Todolos() {
  const todolos = useAppSelector(state => state.todolo.todolos)
  const dispatch = useAppDispatch()

    return <>
    {todolos.map((todolo) => {
        return <TodoloList>
        { todolo.isDone ? (() => <TodoloTxtDone><span>✔ </span>{todolo.task}</TodoloTxtDone>)() : (() => <TodoloTxt><span>✔ </span>{todolo.task}</TodoloTxt>)()}
        <Action>
         <Link to={`edittodolo/${todolo.id}`}> <Edit /></Link>
          <Delete onClick={() => {
            dispatch(deleteTodolo(todolo.id))
          }} />
          <Done onClick={() => {
            dispatch(markDone(todolo.id))
          }} />
        </Action>
      </TodoloList>
    })}
    </>
}


const TodoloList = styled.li`
display: flex;
align-items: center;
max-width: 36rem;
gap: 2rem;
`

const TodoloTxt = styled.div`
 color: darkslategray;
 font-size: medium;
 font-weight: 500;
`

const TodoloTxtDone = styled.div`
 color: darkslategray;
 font-size: medium;
 font-weight: 500;
 text-decoration: line-through
`

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: .7rem;
` 

const Edit = styled(PencilIcon)`
width: 24px;
  height: 24px;
  color: silver;
  cursor: pointer;
  &:hover {
    color: #5a4fcf;
  }`

const Delete = styled(ArchiveBoxXMarkIcon)`
width: 24px;
  height: 24px;
  color: silver;
  cursor: pointer;
  &:hover {
    color: red;
  }`

const Done = styled(CheckCircleIcon)`
width: 28px;
  height: 28px;
  color: silver;
  cursor: pointer;
  &:hover {
    color: #214ed3;
  }`