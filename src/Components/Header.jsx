import React from 'react'
import home from '../images/home.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='min-h-[100vh] bg-[linear-gradient(0deg, rgba(0, 0, 0, 0.51), rgba(0, 0, 0, 0.51)), url(.png)] bg-fixed bg-cover' style={{ backgroundImage: `url(${home})` }}>
            <div className='main-container'>
                <nav className='text-white flex  items-center py-6'>
                    <h1 className='text-[3.2rem] grow'>PAGERLAND</h1>
                    <ul className='flex space-x-6 text-[2.4rem]'>
                        <Link to='/uidesign'><li>Home</li></Link>
                        <Link to='/uidesign/about'><li>About</li></Link>
                        <Link to='/uidesign/contact'><li>Contact</li></Link>
                        <Link to='/uidesign/construction'><li>Services</li></Link>
                    </ul>
                </nav>
                <div className='header-intro'>
                    <h1 className='text-white text-[6.4rem] leading-[8.4rem] font-medium'>
                        Cozy Cottage in the<br />
                        Heart of the SOMA
                    </h1>
                    <p className='text-[3.2rem] leading-[3.8rem] font-medium text-white my-8'>500 Terry Francois St. San Francisco, CA</p>
                    <h1 className='text-primary text-[6.4rem] leading-[7.5rem] font-bold'>$2,400,000</h1>
                    <div className='li-items text-white flex w-[25%] justify-around text-center my-6 text-[1.5rem]'>
                        <ul className='list-disc'>
                            <li>1 Living Room</li>
                            <li>2 Bedrooms</li>
                        </ul>
                        <ul className='list-disc'>
                            <li>2 Bathrooms</li>
                            <li>1 Garage</li>
                        </ul>

                    </div>
                    <button className='h-[50px] w-[250px] rounded-md bg-primary text-white cursor-pointer text-[1.3rem] mt-5'>View Property</button>
                </div>
            </div>
        </header>
    )
}
