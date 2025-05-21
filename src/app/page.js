"use client"
import React, { useState } from 'react';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

export default function Home() {
    
  return (
    <>
{/* hero section */}
<section id='home' class="bg-white">
<div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
<div class="mr-auto place-self-center lg:col-span-7">
    <h1 class="max-w-2xl mb-4 text-2xl font-semibold leading-none tracking-tight dark:text-gray-800">Don’t wait for a breach to react—stay protected 24/7</h1>
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl dark:text-black">Grow your business with Cyberton</h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Cyberton Focus on a complete cybersecurity framework, covering every aspect from prevention to response.</p>
        <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">

            <a href="tel:+919990622884" class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border h-12 border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-violet-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone w-4 h-4 mr-2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72 12.56 12.56 0 0 0 .46 2.2 2 2 0 0 1-.45 2L8.91 8.91a16 16 0 0 0 6.9 6.9l1.05-1.05a2 2 0 0 1 2-.45 12.56 12.56 0 0 0 2.2.46A2 2 0 0 1 22 16.92z"/>
            </svg>
                Call Us
            </a>
            <a href="mailto:info@cyberton.co.in" class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border h-12 border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-violet-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail w-4 h-4 mr-2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email Us
            </a>
        </div>
        
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img className='rounded-lg w-full' src="./images/hero1.jpg" alt="hero image"/>
    </div>                
</div>
</section>


{/* about section */}
<section id='aboutsection' class="bg-violet-50 border">
    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-6 lg:space-y-8 lg:py-24 lg:px-6">
    <h2 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Supporting Your IT Needs with Excellence</h2>
    <p class="font-light lg:text-xl">
    As an authorized reseller of top brands, Cyberton provides Cyber security products and IT software solutions. With an experienced team knowledgeable across various IT softwares, we offer expert guidance and reliable service. We're here to support you, especially during critical IT needs.
    </p>
                
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 my-7 dark:border-gray-700">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <ul role="list" class="pt-8 space-y-5">
                    <li class="flex space-x-3 items-center"> 
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white"><strong className='text-2xl'>25</strong> <strong>Happy Clients</strong> We always do care of our clients satisfaction.</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white"><strong className='text-2xl'>18</strong> <strong> Deals</strong> We have closed more than 18 Deals to supply It Products.</span>
                    </li>
                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white"><strong className='text-2xl'>10+</strong> <strong> Years of experience</strong> We have more than 10 years of experience in IT solutions.</span>
                    </li>

                    <li class="flex space-x-3 items-center">
                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white"> <strong> Award Winning Support</strong> We provide award winning customer support to our clients.</span>
                    </li>
                </ul>
                <p class="my-8 font-light lg:text-xl">Deliver Outstanding Service Quickly—Simplified IT Solutions Without the Hassle.</p>
            </div>
            <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/about.jpeg" alt="about image"/>
        </div>
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
<img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="./images/hello.jpg" alt="feature image"/>
<div class="text-gray-500 sm:text-lg dark:text-gray-400">
    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Empowering Your Business with Top IT Products</h2>
    <p class="mb-8 font-light lg:text-xl">Offering a wide range of high-quality IT product solutions and cybersecurity products that enhance your operational security and drive business growth.</p>
    <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
        <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Wide range of cyber security products we offer</span>
        </li>
        <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Comprehensive software solutions</span>
        </li>
        <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Custom-built IT solutions</span>
        </li>
        <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">End-to-end IT support services</span>
        </li>
       
    </ul>
    <p class="font-light lg:text-xl">Deliver superior service effortlessly with top-notch IT products and solutions.</p>
</div>
</div>

    </div>
</section>

{/* services section */}
<section id="servicesection" class="bg-white">
<div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
<div class="text-center mb-12">
    <p class="text-lg font-medium text-purple-600 dark:text-purple-500">Wide range of IT products for all your needs!</p>
    <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-black">Trusted by over top businesses</h2>
    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Our comprehensive IT product range is designed to meet the diverse needs of our customers. Discover the perfect solutions for your business.</p>
</div>
<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">

    <div class="bg-sky-50 rounded-lg border p-6 flex flex-col justify-start">
        <div>
         <Box display={'flex'} justifyContent={'start'} mb={2}>
            <Image src="/images/service-icons/soc.png" height={80} width={80}></Image>
            </Box>
            <h3 class="mb-4 text-2xl font-bold min-h-[60px]">Security Operation Center (SOC)</h3>
            <p class="font-light">A SOC is a centralized unit that monitors and protects an organization's IT infrastructure and data from cyber threats. SOC analysts monitor an organization's network and systems 24/7, and respond to any potential security incidents. They also implement security measures and protocols to prevent future threats. 
            </p>
            <p class="font-light mb-4">
            Take Stock of Available Resources. ...
</p>
<ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Preparation and Preventative Maintenance.</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Continuous Proactive Monitoring.</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Alert Ranking and Management.</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Threat Response.</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Recovery and Remediation.</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Log Management.</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Root Cause Investigation.</span>
            </li>
            </ul>
        </div>
    </div>
    <div class="bg-sky-50 rounded-lg border p-6 flex flex-col justify-start">
        <div>
            <Box display={'flex'} justifyContent={'start'} mb={2}>
            <Image src="/images/service-icons/vulnerability.png" height={80} width={80}></Image>
            </Box>
            
            <h3 class="mb-4 text-2xl font-bold min-h-[60px]">Vulnerability Assessment and Penetration Testing (VAPT)</h3>

          <p class="font-light mb-4">Vulnerability Assessment and Penetration Testing (VAPT) is a security testing process that helps identify and fix vulnerabilities in your organization's digital infrastructure. It combines automated tools and penetration testing techniques to:             </p>
            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Scan IT systems and software for vulnerabilities </span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Source Code Review</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Web/Mobile App</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Network</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Server</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Cloud</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">OT</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">API</span>
            </li>
            </ul>
           
        </div>
    </div>
    <div class="bg-sky-50 rounded-lg border p-6 flex flex-col justify-start">
        <div>
         <Box display={'flex'} justifyContent={'start'} mb={2}>
            <Image src="/images/service-icons/backup-service.png" height={80} width={80}></Image>
            </Box>

        <h3 class="mb-4 text-2xl font-bold min-h-[60px]">Backup as a Service (BaaS)</h3>
            <p class="font-light mb-4">
             Backup as a Service (BaaS) is a cloud-based service that stores and manages your data for you. With BaaS, a third party stores your data in a secure location, and you can access it when you need it. BaaS can be a more reliable and cost-effective option than managing your own servers.
            </p>
            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
            <p class="font-light mb-4">Here are some benefits of BaaS: </p>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Security: BaaS protects your data from unauthorized access, corruption, hacking, and theft.</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Cost-effective: BaaS can be more cost-effective than managing your own servers. </span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Flexibility: You can back up your data as needed or on a regular basis. </span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Free up resources: BaaS can free up your resources so you can focus on other work.</span>
            </li>

            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Personal files: Documents, spreadsheets, presentations, photos, videos, music, emails </span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Business data: Customer information, financial records, invoices, payroll data, project management files</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">System configurations: Operating system settings, registry files, application configurations</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Database information: Data stored in databases used by applications </span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Virtual machine images: Entire virtual machine environments, including operating system and applications</span>
            </li>
            </ul>
            <p>Making backups of collected data is critically important in data management. Backups protect against human errors, hardware failure, virus attacks, power failure, and natural disasters. Backups can help save time and money if these failures occur.</p>
        </div>
    </div>
    <div class="bg-sky-50 rounded-lg border p-6 flex flex-col justify-start">
        <div>
         <Box display={'flex'} justifyContent={'start'} mb={2}>
            <Image src="/images/service-icons/cyber-security.png" height={80} width={80}></Image>
            </Box>

            <h3 class="mb-4 text-2xl font-bold min-h-[60px]">Cyber Security</h3>

          <p class="font-light mb-4">Cybersecurity is crucial in today's digital age due to the increasing reliance on computers, the internet, and wireless networks, including Bluetooth and Wi-Fi, in both personal and business environments. As more devices are connected and more data is stored and transmitted electronically, the risk of cyberattacks grows exponentially. Cyberattacks can take many forms, including:</p>
            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Anti Virus</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">EDR</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">XDR</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">IAM</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Email Security</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">
                Other Cyber Security Services</span>
            </li>
            </ul>
        </div>
    </div>
    <div class="bg-sky-50 rounded-lg border p-6 flex flex-col justify-start">
        <div>
         <Box display={'flex'} justifyContent={'start'} mb={2}>
            <Image src="/images/service-icons/barrier.png" height={80} width={80}></Image>
            </Box>

            <h3 class="mb-4 text-2xl font-bold min-h-[60px]">Boom Barrier</h3>

          <p class="font-light mb-4">Cyberton's range of automated Boom Barriers offers a variety of models to provide trustworthy, seamless, and reliable entry and exit point security for two-wheelers and cars in car parking sites, condominiums, toll collections, and industrial entrances. Built to face the challenges of Indian climate conditions, it’s motorized mechanism is designed to deliver superior performance within continuous duty cycles.
          </p>
            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Tripod Turnstiles</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Full Height Turnstiles</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Security Doors and Portals</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Speed Gates</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">
                Flap Barriers</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">
                Boom Barriers</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">
                Side Access Gates</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">
                Screening</span>
            </li>
            </ul>
        </div>
    </div>
    <div class="bg-sky-50 rounded-lg border p-6 flex flex-col justify-start">
        <div>
         <Box display={'flex'} justifyContent={'start'} mb={2}>
            <Image src="/images/service-icons/cctv-camera.png" height={80} width={80}></Image>
            </Box>
            <h3 class="mb-4 text-2xl font-bold min-h-[60px]">CCTV surveillance</h3>
            <p class="font-light mb-4">CCTV surveillance, powered by identically intelligent digital security solutions, not only enhances the safety of your premises but also augments human resources with advanced monitoring capabilities. These cutting-edge systems deliver comprehensive, round-the-clock security, ensuring peace of mind while significantly improving operational efficiency and response times.
            </p>
            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Commercial security solutions</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Industrial security solutions</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Residential security solutions</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Advanced IP</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">Analgo cameras</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">DVR</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">NVR</span>
            </li>
            <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
                <span class="text-base font-medium leading-tight">LED/LCD monitors</span>
            </li>
            </ul>
        </div>
    </div>
</div>
</div>
</section>




{/* cyber security section */}
<section id='brandsection' className="bg-rose-50 border">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6">
        <div className="text-center mb-12">
        <p class="text-lg font-medium text-purple-600 dark:text-purple-500">Our Cyber Security Partners</p>
        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-black">
            Reputed Brand Partners
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our comprehensive IT product range is designed to meet the diverse needs of our customers. Discover the perfect solutions for your business.
        </p>
        </div>
        <div className="grid bg-white rounded-xl">
        <PartnerSection />
        </div>
    </div>
</section>


{/* testimonials section */}
<section class="bg-yellow-50 border-bottom">
<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
    <figure class="max-w-screen-md mx-auto">
        <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
        </svg> 
        <blockquote>
            <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"The software solutions provided by Cyberton have significantly streamlined our operations. Their platform offers a seamless experience, from project management tools to advanced analytics. It's a game-changer for our IT infrastructure."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <Avatar>R</Avatar>
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 dark:text-white">Rahul K.</div>
                {/* <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">COO</div> */}
            </div>
        </figcaption>
    </figure>
</div>
</section>

{/* faq section */}
{/* <section class="bg-white">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 class="my-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
        <div class="max-w-screen-md mx-auto">
        <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
<h3 id="accordion-flush-heading-1">
<button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
    <span>What services do you provide?</span>
    <svg data-accordion-icon="" class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</h3>
<div id="accordion-flush-body-1" class="" aria-labelledby="accordion-flush-heading-1">
<div class="py-5 border-b border-gray-200 dark:border-gray-700">
    <p class="mb-2 text-gray-500 dark:text-gray-400">We offer a range of IT products and services, including server components, networking components, system components, and more. We are also experts in setting up office IT infrastructure.</p>
</div>
</div>
<h3 id="accordion-flush-heading-2">
<button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
    <span>Can you customize IT solutions for my business?</span>
    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</h3>
<div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
<div class="py-5 border-b border-gray-200 dark:border-gray-700">
    <p class="mb-2 text-gray-500 dark:text-gray-400">Yes, we specialize in tailoring IT solutions to fit the specific needs of your business, from small-scale setups to complex infrastructure projects.</p>
</div>
</div>
<h3 id="accordion-flush-heading-3">
<button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
    <span>Do you provide support and maintenance services?</span>
    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</h3>
<div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
<div class="py-5 border-b border-gray-200 dark:border-gray-700">
    <p class="mb-2 text-gray-500 dark:text-gray-400">Yes, we offer ongoing support and maintenance services to ensure your IT infrastructure remains efficient and up-to-date.</p>
</div>
</div>
<h3 id="accordion-flush-heading-4">
<button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
    <span>How can I get started with your services?</span>
    <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</h3>
<div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
<div class="py-5 border-b border-gray-200 dark:border-gray-700">
    <p class="mb-2 text-gray-500 dark:text-gray-400">Getting started is easy! You can contact us directly to discuss your requirements, and we'll help you select the right products and services for your needs.</p>
</div>
</div>
</div>

        </div>               
    </div>
</section> */}
<FAQAccordion/>

{/* 7th section */}
<section id="contactsection" class="bg-emerald-200 border">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-sm mx-auto text-center">
            <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Further Any Inconveniance Do Mail Us</h2>
            <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Give us a chance to try our services!</p>    
            <a href="mailto:info@cyberton.co.in" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-6 py-3.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Mail now</a>
        </div>
    </div>
</section>

{/* contact section */}
<section className="contact py-12 bg-cyan-50">
    <div className="container mx-auto px-4">
        <div className="mb-8 text-center" data-aos="fade-up">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight">
                Contact Us
            </h2>
        </div>

        <div className="flex-nowrap lg:flex">
            {/* Company Info and Social Links */}
            <div
                className="w-full lg:w-1/3 p-4 flex flex-col"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="mb-6 lg:mb-0">
                    <h3 className="text-2xl font-semibold">Cyberton Infosolutions  </h3>
                    <p className="text-gray-600 mt-2">
                        We provide Cyber Security products and IT solutions as
                        an authorized reseller of well-known brands.
                    </p>
                    {/* <div className="social-links flex mt-4 space-x-4">
                        <a href="#" className="text-blue-400 hover:text-blue-500">
                            <XIcon />
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-600">
                            <FacebookIcon />
                        </a>
                        <a href="#" className="text-pink-400 hover:text-pink-500">
                            <InstagramIcon />
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-700">
                            <LinkedInIcon />
                        </a>
                    </div> */}
                </div>

                <div className="mt-6 lg:mt-3">
                    <div className="info space-y-6">
                        <div className="flex items-center space-x-3">
                        <LocationOnIcon className="h-6 w-6 text-gray-600"/>
                            <p className="font-bold">Hargovind Enclave H No-12 Street-No-1 Rajpur Khurd Near ramchander market - chhatarpur Area
                            Delhi-110068</p>
                        </div>
                        <div className="flex items-center space-x-3">
                        <MailIcon className="h-6 w-6 text-gray-600"/>
                            <p className="font-bold">info@cyberton.co.in</p>
                        </div>
                        <div className="flex items-center space-x-3">

                            <PhoneIcon className="h-6 w-6 text-gray-600"/>
                             <p className="font-bold">+919990622887 / +919990622884</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map */}
            <div
                className="w-full md:w-2/3 mt-4 lg:mt-0 bg-black"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6627563695383!2d77.1846695793457!3d28.489701299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f30f0e863b1%3A0xb50dfc1eba9c28f5!2sHargovind%20Enclave%20Rajpur%20Chattarpur%20New%20Delhi!5e0!3m2!1sen!2sin!4v1725964340664!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </div>
        </div>
    </div>
</section>

    </>
  );
}



const PartnerSection = () => {
    const logos = [
        '/images/cybersecurity_partners/Crowdstrike.png',
      '/images/cybersecurity_partners/splunk.webp',
      '/images/cybersecurity_partners/paloalto.png',
      '/images/cybersecurity_partners/Qradar.png',
      '/images/cybersecurity_partners/sentinelone.webp',
      '/images/cybersecurity_partners/checkpoint.webp',
      '/images/cybersecurity_partners/Sophos.webp',
      '/images/cybersecurity_partners/Fortinet.png',
      '/images/cybersecurity_partners/logrhythm.webp',
      '/images/cybersecurity_partners/seceon.webp',
      '/images/cybersecurity_partners/dataresolve.webp',
      '/images/cybersecurity_partners/everest.webp',
      '/images/cybersecurity_partners/ZserviceDesk.png',
      '/images/cybersecurity_partners/hp.webp',
      '/images/cybersecurity_partners/Microsoft365.jpeg',
      '/images/cybersecurity_partners/Acronis.png',
      '/images/cybersecurity_partners/veeam.png',
      '/images/cybersecurity_partners/barracuda.webp',
      '/images/cybersecurity_partners/VmWare.jpg',
      '/images/cybersecurity_partners/instasafe.png',
      '/images/cybersecurity_partners/kaspersky.webp',
      '/images/cybersecurity_partners/threatcop.webp',
      '/images/cybersecurity_partners/tenable.webp',
      '/images/cybersecurity_partners/netskope.webp',
      '/images/cybersecurity_partners/quest.webp',
    ];

    return(
        <>
       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
  {logos.map((logo, index) => (
    <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '150px', height: '100px' }}>
      <img 
        src={logo} 
        alt={`Partner logo ${index + 1}`} 
        style={{ maxWidth: '100%', maxHeight: '100%' }} 
      />
    </div>
  ))}
</div>

        </>
    )
}



const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active index
  };

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="my-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush">
            <div>
              <h3 id="accordion-flush-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  onClick={() => toggleAccordion(1)}
                >
                  <span>What services do you provide?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 1 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 1 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    We offer a range of IT products and services, including server components, networking components, system components, and more. We are also experts in setting up office IT infrastructure.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  onClick={() => toggleAccordion(2)}
                >
                  <span>Can you customize IT solutions for my business?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 2 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 2 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Yes, we specialize in tailoring IT solutions to fit the specific needs of your business, from small-scale setups to complex infrastructure projects.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  onClick={() => toggleAccordion(3)}
                >
                  <span>Do you provide support and maintenance services?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 3 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 3 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Yes, we offer ongoing support and maintenance services to ensure your IT infrastructure remains efficient and up-to-date.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 id="accordion-flush-heading-4">
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  onClick={() => toggleAccordion(4)}
                >
                  <span>How can I get started with your services?</span>
                  <svg
                    data-accordion-icon
                    className={`w-6 h-6 ${activeIndex === 4 ? 'rotate-180' : ''} shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </h3>
              {activeIndex === 4 && (
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Getting started is easy! You can contact us directly to discuss your requirements, and we'll help you select the right products and services for your needs.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




