import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <section className='border-t-2 border-[#B0B0B0]  px-5 md:px-10 lg:px-16 xl:px-20 my-12 ml-0'>
                    <div className="flex flex-col h-60 justify-start md:justify-between md:items-center md:flex-row md:h-30">
                        <div className='flex flex-col gap-2 mt-10'>
                            <div className="logo text-2xl">
                                <p>Hotel<span className='text-[#3252DF]'>Reserve</span></p>
                            </div>
                            <p>
                                We kaboom your beauty holiday <br />instantly and memorable.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 mt-10'>
                            <h2 className='text-x1 font-medium'>Become hotel Owner</h2>
                            <button className='bg-[#3252DF] text-white rounded-xl w-30 mr-0 h-12 md:w-36 md:h-12 md:mr-8'>Register</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='bg-[#3252DF] text-center text-white'>
                        <p>&copy; 2024. All rights reserved. hotel reservation</p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer