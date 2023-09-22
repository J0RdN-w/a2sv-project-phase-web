import React, { useRef } from 'react'
import styled from "styled-components";

interface Props{
    buttonName: string,
    todolo: string,
    setTodolo:  React.Dispatch<React.SetStateAction<string>>
    handleTodoling: (e: React.FormEvent) => void
}

export default function InputField({buttonName, todolo, setTodolo, handleTodoling}: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Form onSubmit={(e) => {
        handleTodoling(e)
        inputRef.current?.blur()
    }}>
        <Input ref={inputRef} type="text" value={todolo} onChange={e => {setTodolo(e.target.value)}} />
        <Button type='submit'>{buttonName}</Button>
    </Form>
  )
}

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
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
     background-image: linear-gradient(45deg, #214ed3, #5a4fcf);
    text-transform: capitalize;
    padding: .7rem 1.3rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: .3rem;
    outline: none;
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Box shadow */
  transition: box-shadow 0.3s ease;

  &:hover {
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3); /* Adjusted shadow on hover */
}
`


