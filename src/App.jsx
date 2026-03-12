import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import { ToastContainer } from 'react-toastify'

const playersFetch = async () => {
  const res = await fetch('players.json');
  return res.json();
}
const playersPromise = playersFetch();
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(100000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  console.log(purchasedPlayers);
  const removePlayer = (id, amount) => {
    const remainPlayers = purchasedPlayers.filter(player => player.id !== id)
    setPurchasedPlayers(remainPlayers);
    setAvailableBalance(availableBalance + amount)
  }
  return (
    <>
      <div className='max-w-[1200px] mx-auto'>
        <Navbar availableBalance={availableBalance}></Navbar>
        <div className='flex justify-between items-center mt-3 border-b-2 pb-4 border-b-gray-200'>
                <h1 className='text-3xl font-bold'> {`${toggle? `Available Players` : `Selected Players ${purchasedPlayers.length}/6`}`}</h1>
                <div>
                    <button onClick={() => setToggle(true)} className={`px-4 py-2 hover:cursor-pointer rounded-l-xl border border-r-0 font-semibold ${toggle === true? 'bg-[#E7FE29]' : ''}`}>Available</button>
                    <button onClick={() => setToggle(false)} className={`px-4 py-2 hover:cursor-pointer border border-l-0 rounded-r-xl font-semibold ${toggle === false? 'bg-[#E7FE29]' : ''}`}>Selected <span>({purchasedPlayers.length})</span></button>
                </div>
          </div>
        {
          toggle === true? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
        }
      </div>
        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
