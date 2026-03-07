import React from 'react';
import logoImg from '../../assets/logo.png';
import { RiCoinsFill } from "react-icons/ri";

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className='h-[60px] w-[60px]' src={logoImg} alt="" />
                    </a>
                </div>
                <div className="flex space-x-2">
                    <span>{availableBalance}</span>
                    <span className='flex items-center'>Coins<RiCoinsFill className='text-2xl text-yellow-500'></RiCoinsFill></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;