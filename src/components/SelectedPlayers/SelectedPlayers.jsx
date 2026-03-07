import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({purchasedPlayers}) => {
    return (
        <div className='space-y-4 mt-4'>
            {
                purchasedPlayers.map(player => <SelectedPlayer key={player.id} player={player}></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;