import React, { useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import { CiFlag1 } from "react-icons/ci";


const AvailablePlayer = ({ player, setAvailableBalance, availableBalance }) => {
    const { player_name, player_img, player_country, player_category, rating, batting_style, price } = player;
    const [isSelected, setSelected] = useState(false);
    const handleAvailableBalance = (balance) => {
        const covertToNumber = 
        parseInt(balance.split("USD").join("").split(",").join(""));
        if(availableBalance<covertToNumber){
            alert("Bhai tor to taka nai");
            return;
        }
        setSelected(true);
        setAvailableBalance(availableBalance - covertToNumber);
    }
    return (
        <div>
            <div className="card bg-base-100 shadow hover:shadow-lg p-4">
                <figure>
                    <img
                        className='h-[300px] w-full rounded mb-2 object-cover'
                        src={player_img}
                        alt="player" />
                </figure>
                <div className='space-y-3'>
                    <div className='flex items-center'>
                        <RxAvatar className='text-xl mr-2'></RxAvatar>
                        <h2 className="card-title">
                            {player_name}
                        </h2>
                    </div>
                    <div className='border-b-2 border-slate-200 pb-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <CiFlag1></CiFlag1>
                                <p className='ml-2 font-semibold'>{player_country}</p>
                            </div>
                            <button className='btn btn-sm'>{player_category}</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold'>Ratings</p>
                        <p>{rating}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold'>{batting_style}</p>
                        <p className='text-slate-500'>{batting_style}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold'>price: ${price}</p>
                        <button onClick={()=>handleAvailableBalance(price)} className={`btn btn-sm ${isSelected && 'btn-disabled'}`}>{isSelected? 'Selected' : "Choose player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayer;