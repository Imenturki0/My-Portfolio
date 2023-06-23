import React from "react";
import { AiOutlineMail ,AiOutlineWhatsApp} from "react-icons/ai";



const Contact = () => {
  const contact_info = [
    { logo: <AiOutlineMail/>, text: "imenturki99@gmail.com" },
    { logo:<AiOutlineWhatsApp/>, text: "0552 272 03 37" },
    
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col items-center w-fit 
         gap-6 max-w-5xl bg-gray-800 md:p-10 p-10 rounded-lg mx-auto"
        >
      
   
          <div className="flex md:flex-row flex-col gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                 {contact.logo}
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
          <a  className="bg-cyan-600 font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6  h-10 w-fit flex items-center" href="mailto:imenturki99@gmail.com">Click to Send an Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;