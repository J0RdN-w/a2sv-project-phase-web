import React, { useRef } from 'react'
import styled from "styled-components";
import { PlusCircleIcon } from '@heroicons/react/24/solid'

interface Props{
    todolo: string,
    setTodolo:  React.Dispatch<React.SetStateAction<string>>
    handleTodoling: (e: React.FormEvent) => void
}

export default function InputField({todolo, setTodolo, handleTodoling}: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Form onSubmit={(e) => {
        handleTodoling(e)
        inputRef.current?.blur()
    }}>
        <Input ref={inputRef} type="text" value={todolo} onChange={e => {setTodolo(e.target.value)}} />
        <Button type='submit'><AddTodo /></Button>
    </Form>
  )
}

const Form = styled.form`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
`

const Input = styled.input`
    width: 90%;
    max-width: 32rem;
  padding: 6px 12px;
  outline: none;
  border: 1px solid gray;
  border-radius: 16px;
  &:focus{
        border-color: #5a4fcf;
        box-shadow: 0 0 1000px 1000px rgba(0, 0, 0, 0.2);
        outline: none;
    }
`
const Button = styled.button`
    background: transparent;
    outline: none;
    border: none;
`
const AddTodo = styled(PlusCircleIcon)`
width: 36px;
  height: 36px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: #5a4fcf;
  }`


