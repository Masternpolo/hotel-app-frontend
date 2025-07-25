import React from 'react'
import { Link } from 'react-router'
import Registerp from '../assets/Register-bg.png'
function Register() {
  return (
    <>
      <main>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full">
              <img src={Registerp} alt="" className='hidden md:block md:object-fill h-screen w-full' />
            </div>
            <div className='max-h-screen'>
              <h2 className='py-2 text-center text-2xl mt-8'>Create Account</h2>
              <form className='flex flex-col items-center items-center gap-2.5 px-6 md:px-10 lg:items-center lg:px-12'>
                <label htmlFor="name">
                  Name
                  <input type="text" name='name' id='name' placeholder='Enter your name' className='p-2 w-[20rem] h-8 lg:w-[30rem] lg:h-10' />
                </label>
                <label htmlFor="email">
                  Email
                  <input type="email" name='email' id='email' placeholder='name@gmail.com' className='p-2 w-[20rem] h-8 lg:w-[30rem] lg:h-10' />
                </label>
                <label htmlFor="number">
                  Phone no
                  <input type="tel" name='number' id='number' placeholder='With country code' className='p-2 w-[20rem] h-8 lg:w-[30rem] lg:h-10' />
                </label>
                <label htmlFor="country">
                  Country
                  <input type="text" name='country' id='country' placeholder='Country name' className='p-2 w-[20rem] h-8 lg:w-[30rem] lg:h-10' />
                </label>
                <label htmlFor="username">
                  Username
                  <input type="text" name='username' id='username' placeholder='Username' className='p-2 w-[20rem] h-8 lg:w-[30rem] lg:h-10' />
                </label>
                <label htmlFor="password">
                  Password
                  <input type="password" name='password' id='password' placeholder='6+ characters' className='p-2 w-[20rem] h-8 lg:w-[30rem] lg:h-10' />
                </label>
                <p className='px-6 md:px-0'>
                  By signing up you agree to <a href={'#'} className='text-blue-500 hover:underline'>terms and condition</a> at HotelReserve
                </p>
                <button type="submit" className='bg-[#003DFC] text-white rounded w-[20rem] h-8 lg:w-[30rem] lg:h-10'>Register</button>
              </form>
              <div className='flex justify-center text-center'>
                <Link to={'/login'} className='pb-4 underline md:p-4'>
                  <p> Already have an account Login </p>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default Register