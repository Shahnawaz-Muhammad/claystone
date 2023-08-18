import React from 'react'
import service from '../Images/service.png'
import {FcAbout} from 'react-icons/fc'
import {RiTeamFill} from 'react-icons/ri'
import {FcManager} from 'react-icons/fc'
import {SiNounproject} from 'react-icons/si'


const Services = () => {

const data = [
    {id:'1', 
     icon:'FcAbout', 
     title:'ABOUT US', 
     description:'About Us', 
     url:'#' 
    },
    {id:'2', 
     icon:'FcManager', 
     title:'MANAGEMENT', 
     description:'Our Management', 
     url:'#' 
    },
    {id:'3', 
     icon:'RiTeamFill', 
     title:'OUR TEAM', 
     description:'Our Team', 
     url:'#' 
    },
    {id:'4', 
     icon:'SiNounproject', 
     title:'OUR PROJECTS', 
     description:'Our Projects', 
     url:'#' 
    },
    {id:'5', 
     icon:'SiNounproject', 
     title:'PRACTICE', 
     description:'Our Practice', 
     url:'#' 
    },
]
    

  return (
    <div>
        <div className='relative flex flex-col justify-center items-center h-full'> 
            <h1 className='text-white text-center text-4xl font-bold absolute z-40 '>SERVICES</h1>
            <img src={service} className="h-64 w-full" alt="..." />
        </div>
        <div>
            <div className="my-3 px-5 md:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 ">
                {data.map(item => (
                    <div key={item.id} className="w-full h-96 border-t-8 border-blue shadow-2xl md:transition-transform duration-300 hover:scale-105">
                        <div className='mt-8 w-full h-32 mt-4 flex flex-row justify-center'>
                            {item.icon === 'FcAbout' && <FcAbout className='w-32 h-32' />}
                            {item.icon === 'FcManager' && <FcManager className='w-32 h-32' />}
                            {item.icon === 'RiTeamFill' && <RiTeamFill className='w-32 h-32' />}
                            {item.icon === 'SiNounproject' && <SiNounproject className='w-32 h-32' />}
                        </div>
                        <div className="mt-8 px-4 text-center flex flex-col justify-center">
                            <h5 className="text-lg font-bold ">{item.title}</h5>
                            <p className="mt-2 ">{item.description}</p>
                            <a href={item.url} className="mt-2 text-xl font-bold text-blue underline underline-offset-4">MORE</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>        
    </div>
  )
}

export default Services
