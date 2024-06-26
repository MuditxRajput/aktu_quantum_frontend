import React from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
                <title>Contact us - Free AKTU Quantum PDFs</title>
                <meta name="description" content="This is the contact us Page of aktu Quantum " />
                <link rel="canonical" href="https://www.aktu-quantum.online/contact" />
      </Helmet>
    
    <section class="">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black ">Contact Us</h1>
        <p class="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
        <form action="#" class="space-y-8">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-black">Your email</label>
                <input type="email" id="email" class="shadow-sm  border border-black text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-black dark:placeholder-grey  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="mail@gmail.com" required/>
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-black">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-black rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-black dark:placeholder-text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-black ">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black  rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500  dark:border-black dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="py-3 px-5 text-sm bg-orange-600 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>
    <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded m-4"
          onClick={() => navigate("/Free-AKTU-Quantum-PDFs-for-1st-Year-Students")}
        >
          Back
        </button>
  </section>
  </>
  )
}

export default Contact