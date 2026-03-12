import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    return (
        <div className='space-y-4 mt-4'>
            {
                purchasedPlayers.map(player => <SelectedPlayer removePlayer={removePlayer} key={player.id} player={player}></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;