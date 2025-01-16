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


export default function HomePage (){
    return(
        <div >
          
        {/* Header */}
        <div>
           
            <div className="flex justify-between border-b-2 h-11">

           <div className="mt-3 mb-2 ml-3 cursor-pointer">
           <IoIosSearch className="h-5 w-5"/>
           </div>

            <h1 className="text-center text-xl mt-2 ">Avion</h1>

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
        <div className="flex h-[451px] w-[1280px] mt-9 mb-12 ml-8">

        <div className="bg-[#2A254B] w-[1280px] ml-4 ">
          <h1 className="text-3xl text-white pt-10 pl-7 pb-6" >The Furniture brand for the <br/> future with timeless designs</h1>
<div className="mt-3">
          <button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 ml-7 mt-3  focus:outline-none hover:bg-indigo-600 rounded">
            view collection
          </button>
          </div>
          <p className="text-bold text-white text-left text-base pt-36 pl-7  ">A new era in eco friendly furniture with Avelon the French luxury retail brand <br/>
             with nice fonts tasteful colors and a beautiful way to display things digitally <br/> using modren web technologies</p>
        </div>
      
          <div className="mr-4 ml-0 ">
  <Image
  className=""
  width={520}
  height={584}
  src="/image/chair.jpeg"
  alt="chair"
  ></Image>
          </div>

          </div>

        {/* 2 */}
        <div className="mt-16">
        <div>
          <header className="text-xl text-center">What makes our brand different</header>
          </div>

          <div className="flex pt-14 pb-14 pl-10 gap-2">
<div className="ml-2">
  <LiaShippingFastSolid className="h-6 w-6"/>
<h1 className=" text-lg"> Next day as standard</h1>
<p className="text-sm">Order before 3pm and get your <br/> order the next day as standard</p>
</div>

<div className="ml-32">
<IoCheckmarkCircleOutline className="h-6 w-6" />
<h1 className="text-lg">Made by true artisans</h1>
<p className="text-sm">Handmade crafted goods made with <br/> real passion and craftmanship</p>
</div>

<div className="ml-[7%]">
<CiCreditCard1 className="h-6 w-6"/>
<h1 className="text-lg">Unbeatable prices</h1>
<p className="text-sm">For our materials and quality you <br/> will not find better prices anywhere</p>
</div>

<div className="ml-[8%]">
<LuSprout className="h-6 w-6"/>
<h1 className="text-lg">Recycled packaging</h1>
<p className="text-sm">We use 100% recycled packaging to <br/> ensure our footprint is manageable</p>
</div>
        </div>
        </div>

        {/* 3 */}
        <div className="ml-10 mb-16 mt-14">
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
        <div className="ml-10 mb-16 mt-20">
        <div className="text-xl mb-4">
          Our poplar products
          </div>
        <div className="flex gap-4 ">
        <div>
        <Image
  className=""
  width={630}
  height={375}
  src="/image/Large.jpg"
  alt="Large"
  ></Image>
  <h1 className="text-sm mt-4">The Poplar sueda sofa</h1>
  <h1 className="text-sm mt-2">$980</h1>
        </div>
        <div> 
          <Image
  className=""
  width={305}
  height={375}
  src="/image/Dandy chair.jpg"
  alt="Dandy chair"
  ></Image>
   <h1 className="text-sm mt-4">The Dandy chair</h1>
   <h1 className="text-sm mt-2">$250</h1>
  </div>
        <div>
          <Image
  className=""
  width={305}
  height={375}
  src="/image/The dandy chair.jpg"
  alt=""
  ></Image>
   <h1 className="text-sm mt-4">The Dandy chair</h1>
   <h1 className="text-sm mt-2">$250</h1>
  </div>
       
        </div>

        <div className="mt-20 ml-[40%]">
        <button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 ml-7 mt-3  focus:outline-none hover:bg-indigo-600 rounded">
            view collection
          </button>
          </div>

        </div>
        
        {/* 5 */}
        <div className="h-[400] w-[1349] bg-slate-200  p-7  ">

          <div className="bg-white  text-center h-[320] w-[1273] pt-10  py-auto mt-3 ml-2">
            <h1 className="text-4xl">Join the club and get the benefits</h1>
            <p className="mt-4 ">Sign up for our newsletter and receive exclusive offers on new <br/> ranges sales pop up stores and more </p>
          
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4  flex flex-row gap-1 ml-[40%] mt-20 mb-14">
            
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

        {/* 6 */}
        <div className="flex h-[451px] w-[1280px] mt-9 mb-28  ml-8">

        <div className=" h-[524] w-[720] ml-2  pb-2 pl-7 text-justify">
          <h1 className="text-3xl  pt-10 pl-1 pb-6" >From a studio in London to a global brand <br/> with  over 400 outlets </h1>
          <p>When we started Avion the idea was simple Make high quality furniture <br/> affordable and available for the mass market</p>
          <p className="mt-4 mr-9">Handmade and loveling  creafted furniture and homeware is what we live <br/> breathe and design so our Chelsea  boutique become the hoybed for the <br/> London interior design community</p>
            <div className="mt-44 mr-11">
          <button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            get in touch
          </button>
          </div>
         
        </div>
      
          <div className="mr-4 ml-0 mb-7 ">
  <Image
  className=""
  width={720}
  height={603}
  src="/image/pelow.jpg"
  alt="chair"
  ></Image>
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
        Copyright @ 2024 by Saad. All Rights Reserved. </p>

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
    )
}
