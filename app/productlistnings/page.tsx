import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

export default function ProductListning (){
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

            <div className=" grid grid-flow-col auto-cols-max justify-self-center gap-6  text-center pt-2 text-gray-500 cursor-pointer">
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
       <div className='p-7 bg-[url("/image/wood.jpeg")] bg-cover h-[209] w-[1349] mt-5'>
<h1 className="text-white text-2xl mt-32 ml-3">All products</h1>
       </div>

        {/* 2 */}
        <div className="flex justify-between text-center pt-3 ">

          <div className='flex gap-10'>

            <div className="ml-8">Category
              <select className="cursor-pointer">
              </select>
            </div>

            <div>Product type
              <select className="cursor-pointer">

              </select>
            </div>

            <div>Price
              <select className="cursor-pointer">

              </select>
            </div>

            <div>Brand
              <select className="cursor-pointer">

              </select>
            </div>

          </div>

          <div className="flex gap-4 mr-10">

            <div>Sorting by:</div>
            <div>Date added
              <select></select>
            </div>

          </div>

        </div>

        {/* 3 */}
        <div className="ml-10 mb-16 mt-5">
                
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
        
        
                </div>

        {/* 4 */}
        <div className="ml-10 mb-16 mt-5">
                
                <div className="flex gap-4 ">
                <div>
                <Image
          className=""
          width={305}
          height={375}
          src="/image/multiple lamp.jpg"
          alt="multiple lamp"
          ></Image>
          <h1 className="text-sm mt-4">Multiple Lamp</h1>
          <h1 className="text-sm mt-2">$250</h1>
                </div>
                <div> 
                  <Image
          className=""
          width={305}
          height={375}
          src="/image/small vase.jpg"
          alt="small vase"
          ></Image>
           <h1 className="text-sm mt-4">Small Vase</h1>
           <h1 className="text-sm mt-2">$155</h1>
          </div>
                <div>
                  <Image
          className=""
          width={305}
          height={375}
          src="/image/yellow chair.jpg"
          alt="yellow chair"
          ></Image>
           <h1 className="text-sm mt-4">Yellow</h1>
           <h1 className="text-sm mt-2">$125</h1>
          </div>
                <div>
                  <Image
          className=""
          width={305}
          height={375}
          src="/image/multiple chair.jpg"
          alt="multiple chair"
          ></Image>
           <h1 className="text-sm mt-4">Multiple Chair</h1>
           <h1 className="text-sm mt-2">$399</h1>
          </div>
                </div>
        
        
                </div>
       

        {/* 5 */}
        <div className="ml-10 mb-16">
                
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
      Copyright @ 2024 by Saad </p>

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