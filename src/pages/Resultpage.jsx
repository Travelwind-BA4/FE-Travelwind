import React from 'react';
import {MdFlightTakeoff} from "react-icons/md";


const Resultpage = () => {
  return (
    <>
        <div className='container'>
            <section className='py-5'>
                <div className='flight-header flex py-[10px] mx-[10rem]'>
                    <div className='flight-header-item flex flex-1'>
                        <div className='icon pr-4 inline-flex relative items-center justify-center align-[-0.125rem]'>
                            <MdFlightTakeoff size="2rem"/>
                        </div>
                        <div className='description'>
                            <p className='text-lg'>Select Departure Flight</p>
                            <p className='text-lg'><span>KNO -JKT</span><span className='px-1'>  |  </span>  Wed, 24 Nov</p>
                        </div>
                    </div>
                    <div className='flight-header-item'>
                        <button className='text-lg text-red-600 rounded-md border bg-transparent border-red-600 border-solid flex w-ful py-3 px-4 hover:bg-red-700 hover:text-white'>Change Search</button>
                    </div>
                    <div></div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Resultpage