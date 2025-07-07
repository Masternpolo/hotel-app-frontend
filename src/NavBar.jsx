import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';


const items = [
    { text: 'Home', url: '/' },
    { text: 'Hotel', url: '/hotel' },
    { text: 'Rooms', url: '/rooms' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
]

function NavBar() {
    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <header>
                <nav className='text-black flex justify-between px-5 md:px-10 lg:px-16 py-8 xl:px-20'>
                    <GiHamburgerMenu className='absolute top-8 right-5 text-3xl' />
                    <div className="logo text-2xl">
                        <p>Hotel<span className='text-[#3252DF]'>Reserve</span></p>
                    </div>
                    <div className="">
                        <ul className=' hidden md:flex justify-between gap-4'>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <a to={item.url}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='hidden md:flex justify-center items-center'>
                            <button className='bg-[#3252DF] text-white rounded-xl w-full mr-0 h-12 md:w-36 md:h-12 md:mr-8'>Search</button>
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default NavBar