import React, { useEffect, useState } from 'react';
import { BsCardList, BsPencil,  } from "react-icons/bs";
import { FiUser} from "react-icons/fi";
import { Card } from "antd";

import useTraveler from '../../services/api/useTraveler';


const Traveler = () => {
  const { getTraveler, travelers } = useTraveler();
  const [show, setShow] = useState(false);

  useEffect(() => {
    getTraveler();
  }, [])

  return (
    <div className="bg-[#f1f5f5] px-10 py-4 rounded-lg ">
      <div>
        <h1 className="flex items-center text-2xl ">
          <BsCardList className="mr-4" /> Traveler List
        </h1>
        <hr className="my-4" />
        <div className='flex flex-col gap-y-3'>
        { travelers.slice(0, 3).map((traveler) => {
          return(
              <Card
              key={traveler.travelerId}
              title={
                      <div className='traveler__label flex justify-between items-center'>
                        <h1 className='flex items-center text-xl'>
                          <FiUser strokeWidth='1.5px' className='mr-2'  />
                          {traveler.title}<span className='pr-1'>.</span>{traveler.lastName}, {traveler.firstName}
                        </h1>
                      </div>
                      
                    } 
              extra={
                  <div key={traveler.travelerId} className='border rounded-lg bg-gray-200 p-2 hover:shadow-lg' onClick={() => setShow(true)}>
                    <BsPencil/>
                  </div>
              }
              > 
                <div className='flex justify-between'>
                  <div>
                    <p className='text-gray-400 font-medium'>Fullname</p>
                    <h1 className='text-lg font-semibold'>{traveler.lastName}, {traveler.firstName}</h1>
                  </div>
                  <div>
                    <p className='text-gray-400 font-medium'>Birthdate</p>
                    <h1 className='text-lg font-semibold'>{traveler.birthDate}</h1>
                  </div>
                  <div>
                    <p className='text-gray-400 font-medium'>Country Code</p>
                    <h1 className='text-lg font-semibold'>{traveler.countryCode}</h1>
                  </div>
              </div> 

              </Card>
              // <div key={traveler.travelerId} className='traveler__card flex flex-col border border-gray-700'>
              //   <div className='traveler__label flex justify-between items-center my-2 mx-2 border-b'>
              //     <h1 className='flex items-center'>
              //       <FiUser/>
              //       {traveler.title} {traveler.lastName},{traveler.firstName} | {traveler.type}
              //       </h1>

              //       <div className='flex gap-1'>
              //         <div className='border rounded-lg bg-gray-200 p-2'>
              //           <BsPencil/>
              //         </div>
              //         <div className='border rounded-lg bg-gray-200 p-2'>
              //           <BsXLg/>
              //         </div>
              //       </div>
              //   </div>
                
              // </div>
          )
        }) }
        </div>
        
        {/* <div className="flex flex-col gap-y-3">
          <div className="">
            <h1 className="text-[#a5a5a8] mb-1">Name</h1>
            <p>p</p>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Mobile Phone</h1>
              <p>8123</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Email</h1>
              <p>@gmailcom</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Gender</h1>
              <p>male</p>
            </div>
            <div className="col-span-1">
              <h1 className="text-[#a5a5a8] mb-1">Nationality</h1>
              <p>Indonesia</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Traveler;