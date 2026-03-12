import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
    return (
        <div>
            <div className='space-y-4 mt-4'>
                {
                    purchasedPlayers.map(player => <SelectedPlayer removePlayer={removePlayer} key={player.id} player={player}></SelectedPlayer>)
                }
            </div>
            <button className='px-4 mt-6 py-2 bg-[#E7FE29] rounded font-semibold'>Add More Player</button>
        </div>

    );
};

export default SelectedPlayers;