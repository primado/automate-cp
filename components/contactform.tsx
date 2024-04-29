'use client'


import img_one from "../public/nathan-dumlao-drov8-6RLUE-unsplash.jpg"
import CarouselComponent from "./carousel"




const api_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default function ContactForm() {

    
    
    return (
        <>
            <div className="flex flex-row w-full justify-between items-center">
                <div className="flex flex-col justify-center items-start px-[10%]">
                    <div className="flex flex-col gap-y-4 ">
                        <div className="flex flex-col gap-y-1 ">
                            <p className="text-dark-blue font-semibold text-lg">Contact us</p>
                            <h1 className="text-3xl  font-bold text-dark">Get in touch</h1>
                           
                        </div>
                        <p className="text-lg font-medium text-gray-500">We&apos;d love to hear from you. Please fill this form</p>
                   </div>
                    <form className="flex flex-col gap-y-5 mt-5">
                        <div className="flex flex-row gap-y-3 gap-x-8 ">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="fname">First Name</label>
                                <input 
                                    type="text" 
                                    placeholder="First name"
                                    className="focus:outline-nontext-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="lname">Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Last name"
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                 
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="email-address">Email</label>
                                <input 
                                    type="text" 
                                    
                                    placeholder="you@email.com"
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                 
                            </div>
                            <div className="flex flex-col gap-y-2">
                               
                                <label htmlFor="phone-number">Phone Number</label>
                                <input 
                                    type="text"
                                   
                                    placeholder="+233 00 000 0000"
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="msg">Message</label>
                              
                               <textarea 
                                    cols={25} rows={7} maxLength={300}
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                
                            </div>
                            <div className="flex flex-col gap-y-2 mt-2 mb-5">
                                <button type="submit" className="bg-dark-blue text-lg !font-medium  text-white p-2 rounded-md hover:bg-opacity-90 transition-transform duration-300 ease-in-out hover:translate-y-0 hover:scale-95 delay-100">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" flex flex-row ">
                    <div className="">
                       {/* <Image 
                            src={img_one}
                            alt="coffee cup and jug"
                            width={650}
                            height={100}
                            className="!p-0 !m-0 h-screen"
                            sizes="(max-with: 100%) 100vh"
                            // style={{objectPosition: 'right', objectFit: 'cover'}}
                       /> */}

                       {/* You can  use either the carousel or the single image */}
                       <CarouselComponent /> 
                    </div>
                </div>
            </div>
        </>
    )
};

