import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import React from 'react'

export default function ShoopingBaskit (){

    const products = [
        {
          name: 'Graystone Vase',
          description: 'A timeless ceramic with in a tri color gray glaze.',
          price: 85,
          image: '/image/graystone vase.jpg',
        },
        {
          name: 'Basic White Vase',
          description: 'Beautiful and simple this is one for the class.',
          price: 85,
          image: '/image/white vase.jpg',
        },
      ];

    return(
        <div >
            {/* header */}
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

            <div className=" grid grid-flow-col auto-cols-max justify-self-center gap-5  text-center pt-4 text-gray-500 cursor-pointer">
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
<div className=" min-h-screen px-8 py-20">
      <header className="text-xl font-bold mb-6 font-mono">Your Shopping Cart</header>
 <table className="w-full mt-6 ">
        <thead>
          <tr className=" border-b-2 border-gray-300 ">
            <th className="text-left py-2">Product</th>
            <th className=" px-4 py-2">Quantity</th>
            <th className=" px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className=" px-4 py-5 flex items-center gap-4">
                <Image
                  width={109}
                  height={134}
                  src={product.image}
                  alt={product.name}
                  className="rounded"
                />
                <div className="text-left">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600 w-[200px]">{product.description} <br/> ${product.price}</p>
                </div>
              </td>
              <td className=" px-4 py-2">1</td>
              <td className=" px-4 py-2">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
        
 <div className="text-right mr-16 text-blue-900  ">
    <p className="text-[20px]">Subtotal $210</p>
    <p className="text-[15px]">Total and Shipping are calculated at checkout</p>
    <button className="bg-blue-900 py-2 px-5 hover:bg-white hover:text-blue-900 hover:border-2
     hover:border-blue-900 text-white"> Go to checkout</button>
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
 