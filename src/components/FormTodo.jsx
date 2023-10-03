import React from 'react'
import Button from './Button'
import Input from './Input'

const FormTodo = ({handleInput, handleForm, title, body, limit}) => {
  return (
    <form onSubmit={handleForm} className='flex flex-col w-[60%] mx-auto gap-5 py-10'>
      <Input required name='title' id='title' value={title} onChange={handleInput} maxLength={limit} placeholder='Title' /> 
      <textarea rows={5} cols={50} onChange={handleInput} value={body} name='body' placeholder='Body'></textarea>
      <Button>Submit</Button>
    </form>
  )
}

export default FormTodo
