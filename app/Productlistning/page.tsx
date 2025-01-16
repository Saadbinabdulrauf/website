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
import { RxCross2 } from "react-icons/rx";
import { GrFormSubtract } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { PiNumberOneBold } from "react-icons/pi";
export default function ProductListning (){
    return(
        <div>

            <div  className="bg-[#2A254B] h-[41] w-[1349] text-center text-white flex justify-between pt-2">

               <div className="ml-[33%] flex"> 
            <LiaShippingFastSolid className=" h-5 w-5  " />
            <h1 className="text-center ml-2 ">Free delivery on all orders over $50 with code easter checkout</h1>
            </div>

                <div className="flex mr-3 cursor-pointer">
                <RxCross2  className="h-5 w-5"/>
                </div>

            </div>

{/* Header */}
        <div>
    
            <div className="flex justify-between border-b-2 h-12">

           

            <h1 className=" text-xl  mt-2 ml-10 ">Avion</h1>
            <div className=" grid grid-flow-col auto-cols-max justify-self-center gap-7  text-center pt-3 text-gray-500 cursor-pointer">
            <div>Plant pots</div>
            <div>Ceramics</div>
            <div>Tables</div>
            <div>Chairs</div>
            <div>Crockery</div>
            <div>Tableware</div>
            <div>Cutlery</div>
            </div>

            <div className="flex mt-3 gap-3 mb-2 mr-10 cursor-pointer">
            <IoIosSearch className="h-5 w-5"/>
            <PiShoppingCartLight className="h-5 w-5"/>
            <VscAccount className="h-5 w-5"/>
            </div>

            </div>

        </div>

{/* 1 */}
<div className="flex">

  <div>
  <Image
  className=""
  width={721}
  height={759}
  src="/image/graychair.jpg"
  alt="graychair"
  ></Image>
  </div>
  
  <div className="h-[657] w-[602] mt-12 ml-14">
    <h1 className="text-3xl mt-16">The Dandy Chair</h1>
    <h1 className="text-2xl mt-4">&250</h1>
    <h1 className=" text-gray-500 mt-8 text-lg">Description</h1>
    <p className="text-gray-500 mt-3 text-base">A timeless design with premium materials features as one of our most <br/> popular
     and iconic pieces The dandy chais perfect for any stylish <br/> living space with beech legs and lambskin leather upholstery
     </p>
     <ul className="list-disc text-gray-500 ml-6 mt-4">
      <li>Premium material</li>
      <li>Handmade upholstery</li>
      <li>Quality timeless classic</li>
     </ul>
     <h1 className="text-gray-500 mt-8 text-lg">Dimensions</h1>
     <div className="flex gap-3 mt-3">
      <h1 className="text-gray-500">Height</h1>
      <h1 className="text-gray-500">Width</h1>
      <h1 className="text-gray-500">Depth</h1>
     </div>
     <div className="flex gap-3 mt-2">
      <h1 className="text-gray-500">110cm</h1>
      <h1 className="text-gray-500">75cm</h1>  
      <h1 className="text-gray-500">50cm</h1>
     </div>
     <div className="flex">
     <h1 className="text-gray-500 mt-12 text-lg">Amount:</h1>
     <div className=" bg-[#F9F9F9] h-[50] w-[122] flex gap-3 ml-5 justify-between pt-4 mt-9">
      <div className="pl-1 cursor-pointer">
     <GrFormSubtract />
     </div>
     <div>
     <PiNumberOneBold />
     </div>
     <div className="pr-1 cursor-pointer">
     <IoIosAdd />
     </div>
     </div>
     <div>
     <button className=" flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 mt-9 ml-52 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Add to cart
          </button>
          </div>
          </div>
  </div>

</div>

{/* 2 */}
<div className="ml-10 mb-16 mt-10">
        <div className="text-xl mb-4">
          You might also like
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

{/* 3 */}
<div>
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
<p className="text-sm">For our materials and quality you <br/> not find better prices anywhere</p>
</div>

<div className="ml-[8%]">
<LuSprout className="h-6 w-6"/>
<h1 className="text-lg">Recycled packaging</h1>
<p className="text-sm">We use 100% recycled packaging to <br/> ensure our footprint is manageable</p>
</div>
        </div>
        </div>
{/* 4 */}
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

        {/* Footer */}
        <footer>
<div className="bg-[#2A254B] flex pt-10 pl-10 border-b-2 border-blue-400 ">

<div className="lg:w-1/4 md:w-1/2 w-full px-4  ">
<h2 className="title-font font-medium text-white tracking-widest text-2xl  mb-3">
  Avion
</h2>
<nav className="list-none mb-10">
  <li>
    <a className="text-white">21 New York Street</a>
  </li>
  <li>
    <a className="text-white">New York City</a>
  </li>
  <li>
    <a className="text-white">United State of America</a>
  </li>
  <li>
    <a className="text-white">43234</a>
  </li>
</nav>
</div>

<div className="lg:w-1/4 md:w-1/2 w-full px-4  ">
<h2 className="title-font font-medium text-white tracking-widest text-base  mb-3">
  Social links
</h2>
<div className="  flex flex-row gap-2 cursor-pointer text-white ">
<FaSquareFacebook className="h-5 w-5 " />
<FaSkype className="h-5 w-5" />
<FaTwitter className="h-5 w-5" />
<IoLogoInstagram className="h-5 w-5"/>
<FaLinkedin className="h-5 w-5"/>
</div>
</div>

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

</div>

<div className="bg-[#2A254B] h-30 border-t-gray-50 pr-12 ">

<div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col ">
<p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
Copyright @ 2024 by Saad. All Rights Reserved. </p>
</div>

</div>
</footer>

        </div>
    )}