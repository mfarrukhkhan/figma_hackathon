import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-[1440px] h-[480px] absolute top-[2244px] bg-slate-300'>
        <div className='w-[292px] h-[108px] absolute top-[80px] left-[60px] gap-[16px] space-y-[16px]'>
        <div>
            <h1 className="w-[148px] h-[44px] text-[#3563E9] text-[32px] leading-[48px] font-[700px]">MORENT</h1>
        </div>
        <div className='w-[292px] h-[48px] absolute top-[60px] text-[16px] text-[rgba(19, 19, 19, 0.6)]'>Our vision is to provide convenience and help increase your sales business.</div>
        </div>
        <div className='w-[152px] h-[244px] absolute left-[804px] top-[80px] space-y-[24px]'>
            <div className='w-[152px] h-[32px]'>
            <h2 className='font-semibold text-[20px]'>About</h2>
            </div>
            <div className='w-[152px] h-[188px]'>
            <ul className='space-y-[24px]'>
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relations</li>
            </ul>
            </div>

        </div>
        <div className='w-[152px] h-[244px] absolute left-[1016px] top-[80px] space-y-[24px]'>
            <div className='w-[152px] h-[32px]'>
            <h2 className='text-[20px] font-semibold'>Community</h2>
            </div>
            <ul className='space-y-[24px]'>
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a Friend</li>
            </ul>

        </div>
        <div className='w-[152px] h-[244px] absolute left-[1228px] top-[80px] space-y-[24px]'>
            <div className='w-[152px] h-[32px]'>
            <h2 className='text-[20px] font-semibold'>Socials</h2>
            </div>
            <ul className='space-y-[24px]'>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
            </ul>

        </div>
        <hr className='w-[1320px] absolute top-[360px] left-[50px] stroke-[#131313]'/>
        <div className='w-[292px] h-[24px] absolute left-[60px] top-[396px] text-[16px] font-semibold'>©2022 MORENT. All rights reserved</div>
        <div className='w-[144px] h-[24px] absolute left-[1032px] top-[396px] font-semibold text-[16px]'>Privacy & Policy</div>
        <div className='w-[144px] h-[24px] absolute left-[1236px] top-[396px] font-semibold text-[16px]'>Terms & Condition</div>
    </div>
  )
}

export default Footer
