import { client } from '@lib/PocketBase'
import type { NextPage } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react'

const Home: NextPage = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)

    const user = await client.users.create({
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
    });

    console.log(user)

  }

  const sendVerification = async () => {
    await client.users.requestVerification(formData.email);
  }

  return (
    <>
      <div className='text-center font-bold text-5xl font-sans'>
        Basecamp Clone
      </div>


      <form className='mt-10 w-full max-w-lg mx-auto' onSubmit={submitForm}>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-first-name'>
              Email
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-first-name'
              type='text'
              placeholder='Correo electronico'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-last-name'>
              Password
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='password'
              name='password'
              placeholder='Contraseña'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='grid-last-name'>
              Confirm Password
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-last-name'
              type='password'
              name='passwordConfirm'
              placeholder='Contraseña'
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <input type="submit" value="Registrar" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      </form>

    </>
  )
}

export default Home