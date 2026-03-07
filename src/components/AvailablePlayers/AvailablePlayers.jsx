import React, { use } from 'react';
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer';

const AvailablePlayers = ({playersPromise, setAvailableBalance, availableBalance}) => {
    const players = use(playersPromise);
    console.log(players)
    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    players.map(player => <AvailablePlayer setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} key={player.id} player={player}></AvailablePlayer>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;