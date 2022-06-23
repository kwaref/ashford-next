import React from 'react'
import Marquee from 'react-fast-marquee'

const MyMarquee = ({text}) => {
  return (
    <div id='marquee' className='py-4 px-0 h-[49px] bg-greenArrow'>
					<Marquee gradient={false}>
						<span className='text-sm text-white'>
              {text}
							
						</span>
					</Marquee>
				</div>
  )
}

export default MyMarquee
