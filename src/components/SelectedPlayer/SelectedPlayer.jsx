import React from 'react';
import { MdDelete } from "react-icons/md";


const SelectedPlayer = ({ player, removePlayer }) => {
    const handleRemovePlayer = () => {
        removePlayer(player.id, parseInt(player.price.split('USD').join('').split(',').join('')))
    }
    return (
        <div className='flex items-center justify-between p-4 bg-slate-100 rounded'>
            <div className='flex items-center space-x-4'>
                <img className='w-[60px] h-[60px] rounded-full object-cover' src={player.player_img} alt="player image" />
                <div>
                    <h3 className='text-xl font-semibold'>{player.player_name}</h3>
                    <p className='text-slate-500'>{player.batting_style}</p>
                </div>
            </div>
            <button onClick={handleRemovePlayer} className='cursor-pointer'><MdDelete className='h-[40px] w-[40px] text-red-600'></MdDelete></button>
        </div>
    );
};

export default SelectedPlayer;