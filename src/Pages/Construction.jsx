import mapimage from '../images/HandsMap.svg'
function Construction() {
    return (
        <section className='construction min-h-[100vh]'>
            <div className='main-container'>
                <div className='min-h-[50vh]'>
                    <h1 className='text-primary text-[4.8rem] font-bold mt-5 leading-[5.7rem]'>Construction</h1>
                    <div className='two-col flex justify-around mt-8'>
                        <div className='col1'>
                            <p className='text-[1rem] leading-[2.4rem] text-justify my-8 p-5'>I'm a paragraph.<br /> Click here to add your own text and edit me. It’s easy.<br />
                                Just click “Edit Text” or double click me to add your own content.</p>
                            <p className='text-[1rem] leading-[2.4rem] text-justify my-8 p-5'>I'm a paragraph. <br />Click here to add your own text and edit me. It’s easy. <br />Just
                                click “Edit Text”<br /> or double click me to add your own content and make changes<br />
                                to the font.<br /> Feel free to drag and drop me anywhere you like on your page.<br />
                                I’m a great place for you to tell a story<br /> and let your users know a little more
                                about you.</p>

                            <p className='text-[1rem] leading-[2.4rem] text-justify my-8 p-5'>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br />
                                Just click “Edit Text” or double click me to add your own content.
                            </p>
                        </div>
                        <div className='col2'>
                            <img src={mapimage} alt="mapImage" />
                        </div>
                    </div>
                </div>
                <div className='three-col min-h-[50vh]'>
                    <div className='cards flex justify-around'>
                        <div className='card bg-white shadow-lg min-h-[200px] min-w-[300px] p-6'>
                            <h1 className='text-primary font-bold text-[3.6rem] leading-[159%] '>01</h1>
                            <h3 className='text-[1.8rem] font-medium leading-[159%]'>I'm a paragraph. Click here to add<br/>
                                your own text and edit me.</h3>
                            <p className='text-[1.8rem] leading-[2.9rem] mt-4'>I'm a paragraph. Click here to add<br/>
                                your own text and edit me. It’s easy.<br/>
                                Just click “Edit Text” or double click<br/>
                                me to add your own content.</p>
                        </div>

                        <div className='card bg-white shadow-lg min-h-[200px] min-w-[300px] p-6'>
                            <h1 className='text-primary font-bold text-[3.6rem] leading-[159%] '>02</h1>
                            <h3 className='text-[1.8rem] font-medium leading-[159%]'>I'm a paragraph. Click here to add<br/>
                                your own text and edit me.</h3>
                            <p className='text-[1.8rem] leading-[2.9rem] mt-4'>I'm a paragraph. Click here to add<br/>
                                your own text and edit me. It’s easy.<br/>
                                Just click “Edit Text” or double click<br/>
                                me to add your own content.</p>
                        </div>
                        <div className='card bg-white shadow-lg min-h-[200px] min-w-[300px] p-6'>
                            <h1 className='text-primary font-bold text-[3.6rem] leading-[159%] '>03</h1>
                            <h3 className='text-[1.8rem] font-medium leading-[159%]'>I'm a paragraph. Click here to add<br/>
                                your own text and edit me.</h3>
                            <p className='text-[1.8rem] leading-[2.9rem] mt-4'>I'm a paragraph. Click here to add<br/>
                                your own text and edit me. It’s easy.<br/>
                                Just click “Edit Text” or double click<br/>
                                me to add your own content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Construction