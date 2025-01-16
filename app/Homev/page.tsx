
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
import { IoIosCheckmarkCircle } from "react-icons/io";



export default function HomePage2 (){
    return(
<div>

    {/* Header */}
            <div>
               
                <div className="flex justify-between border-b-2 h-11">
    
               <div className="mt-3 mb-2 ml-3 cursor-pointer">
               <IoIosSearch className="h-5 w-5"/>
               </div>
    
                <h1 className="text-center text-xl  mt-2 ">Avion</h1>
    
                <div className="flex mt-3 gap-3 mb-2 mr-3 cursor-pointer">
                <VscAccount className="h-5 w-5"/>
                <PiShoppingCartLight className="h-5 w-5"/>
                </div>
    
                </div>
    
                <div className=" grid grid-flow-col auto-cols-max justify-self-center gap-5  text-center pt-2 text-gray-500 cursor-pointer">
                <div>Plant pots</div>
                <div>Ceramics</div>
                <div>Tables</div>
                <div>Chairs</div>
                <div>Crockery</div>
                <div>Tableware</div>
                <div>Cutlery</div>
                </div>
    
            </div>

            {/* 1 */}
<div className='p-7 bg-[url("/image/first.jpeg")] bg-cover  w-[1349] h-[870] mt-4'>

  <div>
  <div className=" bg-white text-left h-[400] w-[500] pt-10  py-auto mt-56 ml-[52%] pl-9 ">
  <h1 className="text-3xl ">Luxury homeware for people <br/> who love timeless design quality</h1>
  <p className="mt-4 text-bold">Shop the new Spring 2022 collection today </p>



<div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4  flex flex-row gap-1  mt-40 mb-14">
  

<button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
  Sign up
</button>
</div>
</div>

  </div>
</div>

            {/* 2 */}
            <div className="mt-14">
        <div>
          <header className="text-xl text-center">What makes our brand different</header>
          </div>

          <div className="flex pt-10 pb-14 pl-10 gap-4">
<div className="bg-gray-100 h-[157] w-[305] pl-16 pt-5">
  <LiaShippingFastSolid className="h-6 w-6"/>
<h1 className=" text-lg"> Next day as standard</h1>
<p className="text-sm">Order before 3pm and get <br/> your  order the next day as <br/> standard</p>
</div>

<div className="bg-gray-100 h-[157] w-[305] pl-16 pt-5">
<IoCheckmarkCircleOutline className="h-6 w-6" />
<h1 className="text-lg">Made by true artisans</h1>
<p className="text-sm">Handmade crafted goods <br/> made with  real passion and <br/> craftmanship</p>
</div>

<div className="bg-gray-100 h-[157] w-[305] pl-16 pt-5">
<CiCreditCard1 className="h-6 w-6"/>
<h1 className="text-lg">Unbeatable prices</h1>
<p className="text-sm">For our materials and quality <br/> you will not find better prices <br/> anywhere</p>
</div>

<div className="bg-gray-100 h-[157] w-[305] pl-16 pt-5">
<LuSprout className="h-6 w-6"/>
<h1 className="text-lg">Recycled packaging</h1>
<p className="text-sm">We use 100% recycled  to <br/> ensure our footprint is more <br/> manageable</p>
</div>
        </div>
        </div>

            {/* 3 */}
<div className="ml-10 mb-16 mt-8">
        <div className="text-xl mb-4">
          New ceramics
          </div>
        <div className="flex gap-4 ">
        <div>
        <Image
  className=""
  width={305}
  height={375}
  src="/image/Dandy chair.jpg"
  alt="Dandy chair"
  ></Image>
  <h1 className="text-sm mt-4">The Dandy Chair</h1>
  <h1 className="text-sm mt-2">$250</h1>
        </div>
        <div> 
          <Image
  className=""
  width={305}
  height={375}
  src="/image/rustic vase set.jpg"
  alt=""
  ></Image>
   <h1 className="text-sm mt-4">Rustic Vase Set</h1>
   <h1 className="text-sm mt-2">$155</h1>
  </div>
        <div>
          <Image
  className=""
  width={305}
  height={375}
  src="/image/Silky vase.jpg"
  alt=""
  ></Image>
   <h1 className="text-sm mt-4">The Silky Vase</h1>
   <h1 className="text-sm mt-2">$125</h1>
  </div>
        <div>
          <Image
  className=""
  width={305}
  height={375}
  src="/image/Lucy lamp.jpg"
  alt=""
  ></Image>
   <h1 className="text-sm mt-4">The Lucy Lamp</h1>
   <h1 className="text-sm mt-2">$399</h1>
  </div>
        </div>

        <div className="mt-20 ml-[40%]">
        <button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 ml-7 mt-3  focus:outline-none hover:bg-indigo-600 rounded">
            view collection
          </button>
          </div>

        </div>

            {/* 4 */}
<div className="flex h-[451px] w-[1280px] mt-9 mb-12 ml-8 mt- gap-4">

        <div className="bg-[#2A254B] w-[634] h-[473]  ml-2 pl-4 ">
          <h1 className="text-3xl text-white pt-10 pl-7 pb-6" >It started with a small idea</h1>

          <p className="text-bold text-white text-left text-base pt-1 pl-7  ">A global brand with local beginnings our story begain in a <br/> small studio in South London  in early 2014</p>
             <div className="mt-56">
          <button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 ml-7 mt-3  focus:outline-none hover:bg-indigo-600 rounded">
            view collection
          </button>
          </div>
        </div>
      
          <div className="mr-1  ">
  <Image
  className=""
  width={630}
  height={478}
  src="/image/Block.jpg"
  alt="Block"
  ></Image>
          </div>

          </div>

            {/* 5 */}
            <div className='p-7 bg-[url("/image/back.jpeg")] bg-cover  w-[1349] h-[444]'>
            

<div className="  text-center h-[320] w-[1273] pt-16  py-auto mt-3 ml-2 text-white">
  <h1 className="text-4xl">Join the club and get the benefits</h1>
  <p className="mt-4 ">Sign up for our newsletter and receive exclusive offers on <br/> new  ranges sales pop up stores and more </p>

<div className="flex justify-center gap-9 pt-5">

 <div className="flex gap-2">
  <div className="mt-1">
  <IoIosCheckmarkCircle  className="text-white"/>
     </div>
    <h1>Exclusive offers</h1>
    </div>

<div className="flex gap-2">
  <div className="mt-1">
  <IoIosCheckmarkCircle  className="text-white"/>
  </div>
  <h1>Free events</h1>
  </div>

<div className="flex gap-2">
  <div className="mt-1">
  <IoIosCheckmarkCircle  className="text-white"/>
  </div>
  <h1>Large discounts</h1>
  </div>
  
</div>

<div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4  flex flex-row gap-1 ml-[40%] mt-10 mb-14">
  
  <input
    type="text"
    id="footer-field"
    name="footer-field"
    placeholder="your@email.com"
    className=" w-[280px] bg-opacity-50 rounded border border-gray-300  focus:border-indigo-500 text-base outline-none text-gray-950 -ml-16 pl-4 py-1 px-2  leading-8 transition-colors duration-200 ease-in-out"
  />

<button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
  Sign up
</button>
</div>
</div>

</div>
            {/* // Footer*/}
        <div className="bg-[#2A254B]">

<footer className="text-gray-600 body-font ">
<div className="container px-5 py-24 mx-auto border-b-2 border-blue-400 ">
<div className="flex flex-wrap md:text-left text-center order-first h-[150px] cursor-pointer">
<div className="lg:w-1/4 md:w-1/2 w-full px-4  ">
<h2 className="title-font font-medium text-white tracking-widest text-xl  mb-3">
  Menu
</h2>
<nav className="list-none mb-10">
  <li>
    <a className="text-white">New arrivals</a>
  </li>
  <li>
    <a className="text-white">Best sellers</a>
  </li>
  <li>
    <a className="text-white">Recently viewed</a>
  </li>
  <li>
    <a className="text-white">Popular this week</a>
  </li>
  <li>
    <a className="text-white">All products</a>
  </li>
</nav>
</div>
<div className="lg:w-1/4 md:w-1/2 w-full px-4">
<h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">
  Categories
</h2>
<nav className="list-none mb-10">
  <li>
    <a className="text-white">Crockery</a>
  </li>
  <li>
    <a className="text-white">Furniture</a>
  </li>
  <li>
    <a className="text-white">Homeware</a>
  </li>
  <li>
    <a className="text-white">Plant pots</a>
  </li>
  <li>
    <a className="text-white">Chairs</a>
  </li>
  <li>
    <a className="text-white">Crockery</a>
  </li>
</nav>
</div>
<div className="lg:w-1/4 md:w-1/2 w-full px-4">
<h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">
  Our company
</h2>
<nav className="list-none mb-10">
  <li>
    <a className="text-white">About us</a>
  </li>
  <li>
    <a className="text-white">vacancies</a>
  </li>
  <li>
    <a className=" text-white">Contact us</a>
  </li>
  <li>
    <a className="text-white ">Privacy</a>
  </li>
  <li>
    <a className="text-white ">Returns policy</a>
  </li>
</nav>
</div>
<div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
<h2 className="title-font font-medium text-white tracking-widest text-bold mb-3 -ml-14">
  Join our mailing list
</h2>
<div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start ">

  <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4  flex flex-row gap-1">
    
    <input
      type="text"
      id="footer-field"
      name="footer-field"
      placeholder="your@email.com"
      className="w-55  bg-opacity-50 rounded border border-gray-300  focus:border-indigo-500 text-base outline-none text-gray-950 -ml-14 pl-4 py-1 px-2  leading-8 transition-colors duration-200 ease-in-out"
    />
  
  <button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
    Sign up
  </button>
  </div>

</div>

</div>
</div>
</div>
<div className="bg-[#2A254B] h-30">

<div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col ">

<p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
Copyright @ 2024 by Saad  </p>

<div className="ml-auto flex flex-row gap-2 cursor-pointer text-white ">
<FaSquareFacebook className="h-5 w-5 " />
<FaSkype className="h-5 w-5" />
<FaTwitter className="h-5 w-5" />
<IoLogoInstagram className="h-5 w-5"/>
<FaLinkedin className="h-5 w-5"/>
</div>
</div>
</div>
</footer>

</div>

</div>

    )}