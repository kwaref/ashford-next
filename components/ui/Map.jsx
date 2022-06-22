import React from 'react'

export const Map = ({ height }) => {
	return (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.610144710343!2d-66.06765988513654!3d18.456001887446597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f46663f7843%3A0x723eb05ffbe83d92!2sAshford%20Hospital!5e0!3m2!1ses-419!2scu!4v1655669432059!5m2!1ses-419!2scu'
			// width='600'
			// height='450'
			// style='border:0;'
			allowFullScreen=''
			loading='lazy'
			referrerpolicy='no-referrer-when-downgrade'
			className={`w-full h-[${height}px] border-0`}></iframe>
	)
}
