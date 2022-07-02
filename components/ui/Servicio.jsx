import Link from 'next/link'
import React from 'react'

export const Servicio = ({ serv }) => {
	return (
		<Link href={serv.href}>
      <div className='flex m-2 p-6 bg-white rounded-md shadow-md align-middle cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 24 24'
          fill='#3eb1c8'>
          <path d='M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'></path>
        </svg>
        <a
          className='pl-[18px] text-lg justify-center content-center align-middle'
          href='/servicios#radiologia_centro-de-imagenes'>
          {serv.name}
        </a>
      </div>
    </Link>
	)
}
