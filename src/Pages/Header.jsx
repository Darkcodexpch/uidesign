import React from 'react'
import home from '../images/home.png'

export default function Header() {
    return (
        <header className='min-h-[100vh] bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0.51)), url(.png)]' style={{ backgroundImage: `url(${home})` }}>
            <div className='main-container'>
                <nav className='text-white flex  items-center py-6'>
                    <h1 className='text-[32px] grow'>PAGERLAND</h1>
                    <ul className='flex space-x-6 text-[24px]'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                </nav>
                <div className='header-intro'>
                    <h1 className='text-white text-[64px] leading-[83.2px] font-medium'>
                        Cozy Cottage in the<br />
                        Heart of the SOMA
                    </h1>
                    <p className='text-[32px] leading-[37.5px] font-medium text-white my-4'>500 Terry Francois St. San Francisco, CA</p>
                    <h1 className='text-primary text-[64px] leading-[75px] font-bold'>$2,400,000</h1>
                    <div className='li-items text-white flex w-[25%] justify-around text-center my-4'>
                        <ul className='list-disc'>
                            <li>1 Living Room</li>
                            <li>2 Bedrooms</li>
                        </ul>
                        <ul className='list-disc'>
                            <li>2 Bathrooms</li>
                            <li>1 Garage</li>
                        </ul>

                    </div>
                    <button className='h-[50px] w-[250px] rounded-md bg-primary text-white cursor-pointer'>View Property</button>
                </div>
            </div>
        </header>
    )
}
