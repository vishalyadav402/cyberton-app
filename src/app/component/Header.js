import React from 'react'

const Header = () => {
    
  return (
    <header class="fixed w-full z-40">
    <nav class="bg-white border-gray-200 py-3.5 dark:bg-gray-900 hover:shadow-violet-50 hover:shadow-md">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <a href="/#home" class="flex items-center">
                <img src="./images/cyberton_logo1.png" class="h-9 mr-3 sm:h-9" alt="Cyberton Logo" />
                {/* <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-dark">Cyberton</span> */}
            </a>
            <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="/#home" class="block py-2 pl-3 pr-4 text-white bg-purple-700 text-lg rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/#aboutsection" class="block py-2 pl-3 pr-4 text-gray-700 text-lg border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="/#servicesection" class="block py-2 pl-3 pr-4 text-gray-700 border-b text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="/#brandsection" class="block py-2 pl-3 pr-4 text-gray-700 border-b text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Brands</a>
                    </li>
                    <li>
                        <a href="/#contactsection" class="block py-2 pl-3 pr-4 text-gray-700 border-b text-lg border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
  )
}

export default Header