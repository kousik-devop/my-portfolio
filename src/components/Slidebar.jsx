import React from 'react'
import {NavLink, Route } from 'react-router-dom'

function Slidebar({slideOpen, setSlideOpen}) {
  return (
    <div className={`max-md:h-screen max-md:w-full h-[90vh] w-[30%] absolute left-0 top-[15%] ${slideOpen ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-60 flex flex-col p-4 justify-start items-start bg-zinc-900`}>
            <button onClick={()=> {setSlideOpen(false)}} className='px-3 py-1 rounded-lg text-center border-1 text-xs backdrop-blur-sm hover:bg-blue-600 hover:border-blue-600 transmition-color duration-500'>X</button>
            <nav className='w-full flex flex-col gap-4 mt-8'>
                {[{sec: "Home",rout: "/"},{sec: "About",rout: "/About"},{sec: "Projects",rout: "/Projects"},{sec: "Experience",rout: "/Experience"}].map((item, index) => {
                    return (
                        <NavLink key= {index} onClick={() => setSlideOpen(false)} className=' w-full border-b-2 border-zinc-600 pb-2 text-xl' to={item.rout}>{item.sec}</NavLink>
                    )
                })}
            </nav>
    </div>
  )
}

export default Slidebar