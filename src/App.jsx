import './App.css'
import {cardsPackets} from "./data/cardsPackets.jsx";

function App() {
  return (
      <div className={"cards_center"}>
        {cardsPackets}
      </div>
  )
}

export default App
