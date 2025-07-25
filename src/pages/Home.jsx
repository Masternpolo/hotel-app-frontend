import React from 'react'
import First from '../assets/First-p.png'
import Location from '../assets/Location.png'
import Users from '../assets/Users.png'
import Camera from '../assets/Camera.png'
import Calendar from '../assets/Calendar.png'
import Location2 from '../assets/Location-small.png'
import Person from '../assets/Person.png'
import Blue from '../assets/Blue2.png'
import Ocean from '../assets/Ocean-land.png'
import Stark from '../assets/Stark-hous.png'
import Vinna from '../assets/Vinna-villa.png'
import Bobox from '../assets/Bobox.png'
import Shangri from '../assets/Shangri-n.png'
import Top from '../assets/Top-view.png'
import Green from '../assets/Green.png'
import Wodden from '../assets/Wodden.png'
import Boutique from '../assets/Boutique.png'
import Modern from '../assets/Modern.png'
import Silver from '../assets/Silver.png'
import Cash from '../assets/Cash-ville.png'
import Card from '../components/Card'


const itemOne = [
  { img: Shangri, title: 'Shangri-La', text: 'Colombo Sri Lanka' },
  { img: Top, title: 'Top View', text: 'Hikkaduwe, Sri Lanka' },
  { img: Green, title: 'Green Villa', text: 'Kandy Sri Lanka' },
  { img: Wodden, title: 'Wodden Pit', text: 'Ambalangode Sri Lanka' },
]

const itemTwo = [
  { img: Boutique, title: 'Boutique', text: 'Kandy Sri Lanka' },
  { img: Modern, title: 'Modern', text: 'Nuwereliya, Sri Lanka' },
  { img: Silver, title: 'Silver Rain', text: 'Dehiwala Sri Lanka' },
  { img: Cash, title: 'Cashville', text: 'Ampara Sri Lanka' },
]



function Home() {
  return (
    <>
      <main>
        <section className='px-5 md:px-10 lg:px-16 xl:px-20'>
          <div className="flex flex-col gap-8 justify-center md:flex-row md:justify-between py-2">
            <div className="flex flex-col gap-6">
              <h2 className='text-5xl'>
                Forget Busy Work, <br />Start Next Vacation
              </h2>
              <p>
                We provide what you need to enjoy your <br />
                holiday with family. Time to make anotherm <br />
                memorable moments.
              </p>
              <button className='bg-[#3252DF] text-white rounded w-40 h-12'>Show More</button>
              <div className="flex justify-between pt-2">
                <div className="">
                  <img src={Users} alt="" />
                  <p>2500 users</p>
                </div>
                <div className="">
                  <img src={Camera} alt="" />
                  <p>200 treasures</p>
                </div>
                <div className="">
                  <img src={Location} alt="" />
                  <p>100 cities</p>
                </div>
              </div>
            </div>
            <div>
              <img src={First} alt="" className='h-[22rem]' />
            </div>
          </div>
        </section>
        
        <section className='px-5 md:px-10 lg:px-16 xl:px-20 my-12 '>
          <div className="grid grid-cols-1 gap-4 cursor-pointer bg-[#EAF1FF] p-6 md:grid-cols-2 justify-center lg:grid-cols-4">
            <div className='bg-white rounded-xl w-full h-16 md:w-48 md:h-16 flex justify-center items-center gap-3'>
              <img src={Calendar} alt="" />
              <button>Check available</button>
            </div>
            <div className='bg-white rounded-xl w-full h-16 md:w-48 md:h-16 flex justify-center items-center gap-3'>
              <img src={Person} alt="" />
              <select name="peersons" id="persons">
                <option value="1">Person 1</option>
                <option value="2">Person 2</option>
                <option value="3">Person 3</option>
                <option value="4">Person 4</option>
              </select>
            </div>
            <div className='bg-white rounded-xl w-full h-16 md:w-48 md:h-16 flex justify-center items-center gap-3'>
              <img src={Location2} alt="" />
              <button>Select location</button>
            </div>
            <div className='flex lg:justify-center items-center'>
              <button className='bg-[#3252DF] text-white rounded-xl w-full mr-0 h-12 md:w-48 md:h-16 md:mr-0 lg:w-36 lg:h-12 lg:mr-8'>Search</button>
            </div>
          </div>
        </section>

        <section className='px-5 md:px-10 lg:px-16 xl:px-20 my-12 '>
          <div>
            <h3 className='mb-4 text-black text-xl font-bold'>Most Picked</h3>
            <div className='grid grid-cols-1 gap-6 justify-center md:grid-cols-3 md:grid-rows-2 md:gap-4 lg:gap-7'>
              <div className="row-span-2">
                <img src={Blue} alt="Blue-origin-image" className='w-full' />
              </div>
              <div className="">
                <img src={Ocean} alt="Ocean-image" className='w-full' />
              </div>
              <div className="">
                <img src={Stark} alt="Stark-house-image" className='w-full' />
              </div>
              <div className="">
                <img src={Vinna} alt="Vinna-villa-image" className='w-full' />
              </div>
              <div className="">
                <img src={Bobox} alt="Bobox-image" className='w-full' />
              </div>
            </div>
          </div>
        </section>

        <section className='px-5 md:px-10 lg:px-16 xl:px-20 my-12'>
          <Card items={itemOne} />
          <Card items={itemTwo} />
        </section>
      </main>
    </>
  )
}

export default Home