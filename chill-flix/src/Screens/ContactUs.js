import React from 'react'
import { TbPhoneCalling } from 'react-icons/tb'
import { FiMail } from 'react-icons/fi'
import Head from '../Components/Head'
import Layout from '../Layout/Layout'
import contactus from "../assets/images/movies/contactus.jpg"

function ContactUs() {
  const ContactData=[
    {
      id:1,
      title: 'Email Us',
      info: "Email us at anything",
      icon: FiMail,
      contact: "info@info.com",
    },
    {
      id:2,
      title: 'Call Us',
      info: "Call us at anything",
      icon: TbPhoneCalling,
      contact: "+123 445 778 890",
    },

  ]
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title={"Contact Us"} image={contactus} />
        <div className='grid mg:grid-cols-2 gap-6 lg:my-20 mt-10 lg:grid-cols-2 xl:gap-8'>
          {
            ContactData.map((item)=> (
              <div key={item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg text-center ">
               <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                <item.icon />
                </span>
                <h5 className='text-xl font-semibold mb-3'>{item.title} </h5> 
                <p className='mb-0 text-sm text-text leading-7'>
                  <a href={`mailto:${item.contact}`} className=" text-blue-600">
                    {item.contact}
                  </a>
                </p>
              </div>
            )
            )
          }

       
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs