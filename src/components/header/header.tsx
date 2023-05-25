import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <div>
            <header>
                <div className="border-gray-200 px-4 lg:px-6 py-2.5 bg-green-800">
                    <div className="flex flex-wrap justify-around items-center mx-auto my-3 max-w-screen-xl">
                        <a href="https://flowbite.com" className="flex items-center">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                                 alt="Flowbite Logo"/>
                            <span
                                className="self-center text-white  text-[23px] font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </a>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                             id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link to={"/"}
                                       className="block py-2 pr-4 text-[20px] pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                       aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to={"/basket"}
                                       className="block py-2 pr-4 pl-3 text-white text-[20px] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        basket
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/favorites"}
                                       className="block py-2 pr-4 pl-3 text-white text-[20px] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        favorites
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;