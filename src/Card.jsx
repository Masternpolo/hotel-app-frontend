import React from 'react'

function Card({items}) {
    return (
        <>
            <div className="bg-white grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
                {
                    items.map((item, index) => (
                        <div key={index} >
                            <img src={item.img} alt={`${item.img}`} className='w-full h-48'/>
                            <div>
                                <h3 className='text-x1 text-black font-bold'>{item.title}</h3>
                                <p className='text-[#B0B0B0]'>{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card