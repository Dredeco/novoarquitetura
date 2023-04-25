import Image from 'next/legacy/image'
import React from 'react'
import {FaSearch, FaPencilRuler, FaClipboardList} from 'react-icons/fa'

import Banner from './../../public/ggg-min.png'

export default function Hero() {
    let services = [
        {name: "Análise", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", icon: <FaSearch className='w-fit text-yellow-600' size={50} />},
        {name: "Planejamento", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", icon: <FaClipboardList className='w-fit text-yellow-600' size={50}/>},
        {name: "Projeto", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", icon: <FaPencilRuler className='w-fit text-yellow-600' size={50}/>}
    ]

  return (
    <div id='hero' className='w-full h-full relative flex justify-center pt-20'>
        {/*-- CONTAINER --*/}
        <div className='w-full max-w-[1240px] h-auto'>
            <div className='h-full flex
            flex-col justify-center w-full md:flex-row-reverse pt-20'>
                {/* HERO TEXT SECTION */}    
                <div className='h-full flex flex-col justify-center align-middle px-[2%] md:w-[50%]'>
                    <h2 className='font-bold'>SOBRE NÓS</h2>

                    <h1 className='py-5 text-yellow-600 w-full'>Empresa de arquitetura, engenharia e design</h1>

                    <p className='italic'>Somos a autoridade para concluir projetos de construção em ambientes ambientalmente sensíveis.</p>

                    <a href='#' className='w-full flex justify-center'><p className='bg-yellow-600 p-4 rounded-lg mt-5 font-bold text-white'>CONSULTE MAIS INFORMAÇÕES</p></a>
                </div>

                {/*-- HERO IMAGE SECTION --*/}
                <div className='w-full md:w-[50%] justify-center flex md:justify-end relative top-14'>
                    <Image 
                        src={Banner}
                        alt='/'
                        layout='intrinsic'
                        objectFit='contain'
                        width={450}
                        height={450}
                        className=''
                    />
                </div>
            </div>

            {/*-- HERO BOXES --*/}    
            <div className='bg-gray-100 h-auto w-full max-w-[1240px] absolute flex justify-center flex-wrap gap-3'>
                {services.map((service) =>(
                    <div key={service.name} className='bg-yellow-500 flex flex-col text-center h-full justify-center items-center max-w-xs p-4'>
                        <div className='w-fit justify-center flex p-4 h-auto bg-gray-100 rounded-full'>
                            {service.icon}
                        </div>
                        <h1 className='py-4 uppercase break-all'>{service.name}</h1>
                        <p className=''>{service.description}</p>
                        <a href='#' className='my-4 flex justify-center'>
                            <p className='bg-gray-100 w-fit p-3 text-black font-bold rounded-md'>SAIBA MAIS</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
