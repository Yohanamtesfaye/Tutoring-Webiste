//BLUE BACKGROUND

import React from 'react'
import { Button } from '@mantine/core';
import FAQItem from '../Comonents/FAQItem';
import image1  from '../assets/i1r.png';
import image2  from '../assets/i2r.png';
import image3  from '../assets/i3r.png';
import icon  from '../assets/icon.jpeg';
import icon2  from '../assets/icon2.jpeg';
import icon3  from '../assets/icon3.jpeg';
import icon4  from '../assets/icon4.jpeg';
import faq  from '../assets/faq.jpg';
import "../App.css"

const Home = () => {
  return (
    <>
    <div className='bg-white h-screen text-black r'>

<div className='flex justify-between items-center'>
        <div className='w-1/2 p-8'>
          <h1 className='text-7xl font-bold mb-4'>Personalized Tutoring Tailored Just for You</h1>
          <p>Welcome to EleTutor, where learning knows no bounds. Our dedicated team of expert tutors is here to empower you on your academic journey.</p>
          <div className='mt-8'>
            <Button  className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b] px-20'>Get Started</Button>
          </div>
        </div>
        <div className='animated-img w-1/2 p-8'>
          <img src={image1} alt="Tutor" className='w-full h-auto animate-fadeInRight' />
        </div>
      </div>

             <div className='bg-[#F4EDE4] flex flex-col py-10 '>

           
              <div className='flex justify-center font-bold text-4xl mb-5 p-3'>Explore Our Grade Options</div>
              
              <div className='lg:flex justify-center mb-10' >
                <div><Button variant="filled" size='xl' radius="xl" className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b] mr-44'>Preschool</Button></div>
                <div><Button variant="filled" size='xl' radius="xl" className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b] mr-44'>Elemenary School</Button></div>
                <div><Button variant="filled" size='xl' radius="xl" className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b] mr'>Middle School</Button></div>
              </div>
              <div className='lg:flex justify-center'>
                <div><Button variant="filled" size='xl' radius="xl" className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b] mr-44'> HighSchool</Button></div>
                <div><Button variant="filled" size='xl' radius="xl" className='bg-[#4a154b] hover:bg-white hover:text-[#4a154b] border border-[#4a154b]'>Collage</Button></div>
             </div>
              

              </div>
        

<div className='flex justify-between bg-[#F4EDE4]  items-center'>

  <div className='animated-img w-1/2 p-8'>
  <img src={image2} alt="Tutor" className='w-full h-auto animate-fadeInRight' />
</div>
<div className='w-1/2 p-8'>
  <h1 className='text-4xl font-bold mb-4'>Trusted by parents & students</h1>
  <p>MyTutor is Addis Ababa's most trusted tutoring platform by parents and university students. We're rated 4.5/5 on Trustpilot from the million (and counting!) lessons we've delivered so far. And because our tutors get such good results, schools use them to support their teaching. We work with 650+ tutors across Addis Ababa, 
    targeting learning gaps and helping students everywhere achieve their goals..</p>

</div>
</div>

<div className='flex justify-between bg-[#F4EDE4] items-center'>

 
<div className='w-1/2 p-8'>
  <h1 className='text-4xl font-bold mb-4'>Help from our team, every step of the way</h1>
  <p>Our expert tutor-matching team can pair your child with the perfect tutor for their needs - from subject and level, right down to exam board and personality match. They're always on hand to listen, answer questions, and provide tailored support. Additionally, our platform allows you to find tutors based on location, ensuring convenience and accessibility. any where in Addis Ababa ,
     we have a network of tutors ready to assist your child in achieving their fullest potential.</p>

</div>
<div className='animated-img w-1/2 p-8'>
  <img src={image3} alt="Tutor" className='w-full h-auto animate-fadeInRight' />
</div>
</div>

 
<div className='flex justify-between bg-white items-center pt-20'>
  <div className='flex'>
    <div className='flex flex-col items-center px-10 mx-10'>
      <div className='mb-20 h-[183px] w-[181px] hover:animate-bounce'>
        <img src={icon} alt="" />
      </div>
      <h1 className='font-bold text-xl items-center pb-2'>Register</h1>
      <p>First, you can visit our website and complete the registration process. Simply navigate to our website and click on the "Register" button to create an account.</p>
    </div>
    <div className='flex flex-col items-center px-10 mx-10 pt-20'>
      <div className='mb-20 h-[183px] w-[181px] hover:animate-bounce'>
        <img src={icon2} alt="" />
      </div>
      <h1 className='font-bold text-xl items-center pb-2'>Search your Tutor</h1>
      <p>Students should be able to search for tutors based on subjects, availability, ratings, and location.</p>
    </div>
    <div className='flex flex-col items-center px-10 mx-10'>
      <div className='mb-20 h-[183px] w-[181px] hover:animate-bounce'>
        <img src={icon3} alt="" />
      </div>
      <h1 className='font-bold text-xl items-center pb-2'> Make a request</h1>
      <p>Students should be able to book tutoring sessions directly through the platform.</p>
    </div>
    <div className='flex flex-col items-center px-10 mx-10 pt-20'>
      <div className='mb-20 h-[183px] w-[181px] hover:animate-bounce'>
        <img src={icon4} alt="" />
      </div>
      <h1 className='font-bold text-xl items-center pb-2'>Setup your payment method</h1>
      <p>Secure payment processing system for handling transactions between tutors and students. Support for multiple payment methods.</p>
    </div>
  </div>
</div>


<div className='flex  bg-white '>
  <img className='w-1/2 m-5 h-[400px]' src={faq} alt="question marks" />

          <div className='flex flex-col mt-5'> 
          <h1 className='font-bold text-5xl mb-3'>FAQ</h1>
           <FAQItem question="Can I become a tutor?" answer="I'm a tutor article!
             See if you’re eligible to become a tutor with us and what the next steps are." />
             <FAQItem question="What subjects do you offer tutoring for?" answer="We offer tutoring services for a wide range of subjects, including but not limited to mathematics, science (biology, chemistry, physics), English language and literature, foreign languages, history, and computer science.
              Please contact us to inquire about specific subjects." />
             <FAQItem question="How qualified are your tutors?" answer=" Our tutors are highly qualified professionals with expertise in their respective subjects. They often hold advanced degrees or have extensive experience in teaching. We carefully vet and select tutors to ensure they have the necessary 
             qualifications and skills to provide effective tutoring." />
             <FAQItem question=" How are tutoring sessions conducted?" answer="Tutoring sessions can be conducted either in-person or online, depending on your preference. In-person sessions are held at a mutually agreed-upon location, while online sessions utilize video conferencing tools that allow for
              real-time interaction between the tutor and the student." />
               <FAQItem question=" How are tutoring sessions conducted?" answer=" Yes, we understand the importance of a good tutor-student match. While we cannot guarantee the availability of a specific tutor at all times, we strive to accommodate requests whenever possible. You can discuss your preferences with our team, and we will do 
               our best to assign a tutor who suits your needs.." />
          </div>
          </div>
         




   </div>
 </>
   )
}

 export default Home



// // GRAY BACKGROUND
// import React from 'react';
// import { Button } from '@mantine/core';
// import FAQItem from '../Comonents/FAQItem';
// import image1 from '../assets/image1.jpg';
// import image2 from '../assets/image2.jpg';
// import image3 from '../assets/image3.jpg';
// import icon from '../assets/icon.jpeg';
// import icon2 from '../assets/icon2.jpeg';
// import icon3 from '../assets/icon3.jpeg';
// import icon4 from '../assets/icon4.jpeg';
// import faq from '../assets/faq.jpg';
// import "../App.css";

// const Home = () => {
//   return (
//     <div className='bg-gray-100 min-h-screen text-gray-900'>
//       <div className='container mx-auto py-16'>
//         <div className='flex flex-col lg:flex-row justify-between items-center mb-16'>
//           <div className='lg:w-1/2'>
//             <h1 className='text-4xl lg:text-6xl font-bold mb-8'>Personalized Tutoring Tailored Just for You</h1>
//             <p className='text-lg lg:text-xl mb-8'>Welcome to EleTutor, where learning knows no bounds. Our dedicated team of expert tutors is here to empower you on your academic journey.</p>
//             <Button variant="filled" color="blue">Get Started</Button>
//           </div>
//           <div className='lg:w-1/2'>
//             <img src={image1} alt="Tutor" className='w-full h-auto rounded-lg shadow-lg' />
//           </div>
//         </div>

//         <div className='bg-white rounded-lg shadow-xl p-8 mb-16'>
//           <h2 className='text-3xl lg:text-4xl font-bold mb-8'>Explore Our Grade Options</h2>
//           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
//             <Button variant="filled" radius="xl">Preschool</Button>
//             <Button variant="filled" radius="xl">Elementary School</Button>
//             <Button variant="filled" radius="xl">Middle School</Button>
//             <Button variant="filled" radius="xl">High School</Button>
//             <Button variant="filled" radius="xl">College</Button>
//           </div>
//         </div>

//         <div className='flex flex-col lg:flex-row justify-between items-center mb-16'>
//           <div className='lg:w-1/2'>
//             <h2 className='text-3xl lg:text-4xl font-bold mb-8'>Trusted by Parents & Students</h2>
//             <p className='text-lg lg:text-xl mb-8'>MyTutor is Addis Ababa's most trusted tutoring platform by parents and university students. We're rated 4.5/5 on Trustpilot from the million (and counting!) lessons we've delivered so far. And because our tutors get such good results, schools use them to support their teaching. We work with 650+ tutors across Addis Ababa, targeting learning gaps and helping students everywhere achieve their goals.</p>
//           </div>
//           <div className='lg:w-1/2'>
//             <img src={image2} alt="Tutor" className='w-full h-auto rounded-lg shadow-lg' />
//           </div>
//         </div>

//         <div className='bg-white rounded-lg shadow-xl p-8 mb-16'>
//           <h2 className='text-3xl lg:text-4xl font-bold mb-8'>Help from Our Team, Every Step of the Way</h2>
//           <p className='text-lg lg:text-xl mb-8'>Our expert tutor-matching team can pair your child with the perfect tutor for their needs - from subject and level, right down to exam board and personality match. They're always on hand to listen, answer questions, and provide tailored support. Additionally, our platform allows you to find tutors based on location, ensuring convenience and accessibility anywhere in Addis Ababa, we have a network of tutors ready to assist your child in achieving their fullest potential.</p>
//         </div>

//         <div className='bg-white rounded-lg shadow-xl p-8  flex'>
//            <img src={faq} alt="FAQ" className='w-1/2 h-[500px]  rounded-lg shadow-lg mt-8' />

//           <div className='flex flex-col  mx-8 w-[600px]'>
           
//             <h2 className='text-3xl lg:text-4xl font-bold mb-8'>FAQ</h2>
//             <FAQItem question="Can I become a tutor?" answer="I'm a tutor article!
//              See if you’re eligible to become a tutor with us and what the next steps are." />
//             <FAQItem question="What subjects do you offer tutoring for?" answer="We offer tutoring services for a wide range of subjects, including but not limited to mathematics, science (biology, chemistry, physics), English language and literature, foreign languages, history, and computer science.
//              Please contact us to inquire about specific subjects." />
//             <FAQItem question="How qualified are your tutors?" answer=" Our tutors are highly qualified professionals with expertise in their respective subjects. They often hold advanced degrees or have extensive experience in teaching. We carefully vet and select tutors to ensure they have the necessary 
//             qualifications and skills to provide effective tutoring." />
//             <FAQItem question=" How are tutoring sessions conducted?" answer="Tutoring sessions can be conducted either in-person or online, depending on your preference. In-person sessions are held at a mutually agreed-upon location, while online sessions utilize video conferencing tools that allow for
//              real-time interaction between the tutor and the student." />
//               <FAQItem question=" How are tutoring sessions conducted?" answer=" Yes, we understand the importance of a good tutor-student match. While we cannot guarantee the availability of a specific tutor at all times, we strive to accommodate requests whenever possible. You can discuss your preferences with our team, and we will do 
//               our best to assign a tutor who suits your needs.." />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;








 