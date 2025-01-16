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



export default function AboutPage (){
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
    <div className=" grid grid-flow-col auto-cols-max justify-self-center gap-7 ml-[62%] text-center pt-3 text-gray-500 cursor-pointer">
    <div>About us</div>
    <div>Contact</div>
    <div>Blog</div>
   
    </div>

    <div className="flex mt-3 gap-3 mb-2 mr-10 cursor-pointer">
    <IoIosSearch className="h-5 w-5"/>
    <PiShoppingCartLight className="h-5 w-5"/>
    <VscAccount className="h-5 w-5"/>
    </div>

    </div>

</div>

{/* 1 */}
<div className=" bg-[#F9F9F9] h-10  grid grid-flow-col justify-center gap-8 pt-2 text-gray-500 cursor-pointer">
         <div >All products</div>
            <div >Plant pots </div>
            <div>Ceramics</div>
            <div>Tables</div>
            <div>Chairs</div>
            <div>Crockery</div>
            <div>Tableware</div>
            <div>Cutlery</div>
            </div>

{/* 2 */}
<div className="flex ml-52 mt-16 pb-5">
    <h1 className="text-2xl">A brand build on the love of craftmanship <br/> quality and outstanding customer service</h1>
    <div>
        <div className="mt-4">
    <button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 ml-96    focus:outline-none hover:bg-indigo-600 rounded">
            view our products
          </button>
          </div>
          </div>
</div>


{/* 3 */}
<div className="flex h-[451px] w-[1280px] mt-12 mb-12 ml-8 gap-4">

        <div className="bg-[#2A254B] w-[634] h-[473]  ml-2 pl-4 ">
          <h1 className="text-3xl text-white pt-10 pl-7 pb-6" >It started with a small idea</h1>

          <p className="text-bold text-white text-left text-base pt-1 pl-7  ">A global brand with local beginnings, our story begain in a <br/> small studio in South London  in early 2014</p>
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
  src="/Image/Block.jpg"
  alt="Block"
  ></Image>
          </div>

          </div>
{/* 4 */}
<div className="flex h-[451px] w-[1280px] pt-8 mb-28  ">

<div className="mr-4 ml-0 mb-7 ">
  <Image
  className=""
  width={825}
  height={603}
  src="/image/room.jpg"
  alt="room"
  ></Image>
          </div>

        <div className="  h-[537] w-[720] ml-2 pt-1 pb-2 pl-10 text-justify">
          <h1 className="text-3xl  pt-10 pl-1 pb-6" >Our sevice is not just personal it <br/> is actually  hyper personally exquisite </h1>
          <p>When we started Avion the idea was simple make high quality furniture <br/> affordable and available for the mass market</p>
          <p className="mt-4 mr-9">Handmade and loveling  creafted furniture and homeware is what we live <br/> breathe and design so our Chelsea boutique become the hoybed for the <br/> London interior design community</p>
            <div className="mt-44 mr-11">
          <button className="lg:mt-2 xl:mt-0 mb-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            get in touch
          </button>
          </div>
         
        </div>
      
        

          </div>
{/* 5 */}
<div className="pt-20">
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
<p className="text-sm">For our materials and quality <br/> you won't find better prices <br/> anywhere</p>
</div>

<div className="bg-gray-100 h-[157] w-[305] pl-16 pt-5">
<LuSprout className="h-6 w-6"/>
<h1 className="text-lg">Recycled packaging</h1>
<p className="text-sm">We use 100% recycled  to <br/> ensure our footprint is more <br/> manageable</p>
</div>
        </div>
        </div>

{/* 6 */}
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