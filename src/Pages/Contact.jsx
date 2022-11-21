import React from 'react'
import fb from '../images/fb.svg';
import insta from '../images/insta.svg';
import linkdn from '../images/linkdn.svg';
import hoga from '../images/hogakch.svg';
import { FaUserCircle, FaMapMarkerAlt, FaPhoneAlt, FaAddressCard } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
    return (
        <div className='main-container min-h-[100vh]'>
            <h1 className='text-primary text-[4.8rem] leading-[5.7rem] font-medium mt-4'>Contact</h1>
            <section className='contact flex justify-around mt-8'>
                <div className='left space-y-20'>
                    <div className='intro'>
                        <h1 className='text-[2.4rem] leading-[148%] font-medium'>Contact Andrea Colman to <br />
                            organise a viewing</h1>
                        <p className='text-justify text-[1.8rem] leading-[2.1rem] my-6'>Andrea Colman is one of our top agents.<br />
                            She has 10 years of experience in<br />
                            California real estate market and sold<br />
                            estates of total value of $32,000,000.</p>
                    </div>

                    <div className='details my-6'>
                        <div className='detail flex space-x-6 my-6'>
                            <p className='text-primary text-4xl'>{<FaUserCircle />}</p>
                            <p className='text=[2rem] leading-[2.3rem]'>Andrea Colman</p>
                        </div>
                        <div className='detail flex space-x-6 my-6'>
                            <p className='text-primary text-4xl'>{<FaAddressCard />}</p>
                            <p>California Real Estates</p>
                        </div>
                        <div className='detail flex space-x-6 my-6'>
                            <p className='text-primary text-4xl'>{<FaMapMarkerAlt />}</p>
                            <p className='text=[2rem] leading-[2.3rem]'>693 Woodland St.
                                San Francisco, CA 94110</p>
                        </div>
                        <div className='detail flex space-x-6 my-6'>
                            <p className='text-primary text-4xl'>{<FaPhoneAlt />}</p>
                            <p className='text=[2rem] leading-[2.3rem]'>+1 234 567 890</p>
                        </div>
                        <div className='detail flex space-x-6 my-6'>
                            <p className='text-primary text-4xl'>{<AiOutlineMail />}</p>
                            <p className='text=[2rem] leading-[2.3rem]'>andrea@californiarealestates.com</p>
                        </div>
                    </div>

                    <div className='icons'>
                        <ul className='flex space-x-4 self-center'>
                            <li><img src={fb} alt="image1"/></li>
                            <li><img src={insta} alt="image2" /></li>
                            <li><img src={linkdn} alt="image3" /></li>
                            <li><img src={hoga} alt="image4" /></li>
                        </ul>
                    </div>
                </div>
                <div className='right'>
                    <div className='intro'>
                        <h1 className='text-[2.4rem] leading-[148%] font-medium'>Send me a message and I will call<br />
                            you back</h1>

                    </div>

                    <form className='details-form mt-8'>
                        <div className='relative my-5'>
                        <label htmlFor="firstName" className="block text-xl mb-4">First Name
                         </label>
                         <p className='text-4xl text-[#ADADAB] absolute bottom-[9px] left-[8px]'>{<FaUserCircle />}</p>
                         <input id='firstName' placeholder='ie. John Doe' className='text-[2rem] leading-[2.3rem] text-[#ADADAB] border-2 border-[border-[#EBEAEA]] min-h[58px] min-w-[354px] py-2 text-center'/>
                        </div>

                        <div className='relative my-5'>
                        <label htmlFor="phone" className="block text-xl mb-4">Phone
                         </label>
                         <p className='text-4xl text-[#ADADAB] absolute bottom-[9px] left-[8px]'>{<FaPhoneAlt />}</p>
                         <input id='phone' placeholder='+1 234 567 890' className='text-[2rem] leading-[2.3rem] text-[#ADADAB] border-2 border-[border-[#EBEAEA]] min-h[58px] min-w-[354px] py-2 text-center'/>
                        </div>
                        
                        <div className='relative my-5'>
                        <label htmlFor="email" className="block text-xl mb-4">Email
                         </label>
                         <p className='text-4xl text-[#ADADAB] absolute bottom-[9px] left-[8px]'>{<AiOutlineMail />}</p>
                         <input id='Email' placeholder='ie. Jhon.doe@email.com' className='text-[2rem] leading-[2.3rem] text-[#ADADAB] border-2 border-[border-[#EBEAEA]] min-h[58px] min-w-[354px] py-2 text-center'/>
                        </div>

                        <div className='my-5'>
                         <label htmlFor="message" className="block text-xl mb-4">Message
                         </label>
                         <textarea id="message"  className='text-[2rem] leading-[2.3rem] text-[#ADADAB] border-2 border-[border-[#EBEAEA]] min-h[58px] min-w-[354px] py-2'>
                         </textarea>
                        </div>
                        <div className='my-5'>
                         <button className='bg-primary text-white min-h-[50px] min-w-[152px] text-3xl'>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
