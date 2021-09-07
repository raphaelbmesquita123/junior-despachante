import React from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import { FaUserAlt, FaMailBulk, FaSearch } from 'react-icons/fa'

//styles
import { Container } from './styles'

function handleSubmitForm(e) {
  e.preventDefault()
  emailjs
    .sendForm(
      'service_xfskimn',
      'template_a3j93kc',
      e.target,
      'user_b3vLK4nmsJDCovCRtPpoB'
    )
    .then(
      (result) => {
        toast.success('Mensagem enviada com sucesso')
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
}

export function ImageContainer() {
  return (
    <Container>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor=''>
          <FaUserAlt className='reactIcon' />
          <input name='name' type='text' placeholder='Nome' required />
        </label>
        <label htmlFor=''>
          <FaMailBulk className='reactIcon' />
          <input name='email' type='email' placeholder='Email' required />
        </label>
        <label htmlFor=''>
          <input
            name='message'
            type='number'
            placeholder='Renavam'
            min='0'
            required
          />
        </label>
        <button type='submit' value='Enviar'>
          <FaSearch />
          <p>Orçamento</p>
        </button>
      </form>
    </Container>
  )
}
