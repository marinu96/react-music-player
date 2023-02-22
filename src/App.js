import "./App.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="component">
      <h2>Playing Now</h2>
      <img
        className="musicCover"
        src="https://cdn.smehost.net/sonymusices-45pressprod/wp-content/uploads/2021/05/8bdf8aa0-97cf-4e20-88c9-817fb7b6327a.jpg"
        alt="Zitti e Buoni - Maneskin"
        width="200"
        height="200"
      />

      <div>
        <h3 className="title">Maneskin</h3>
        <p className="subTitle">Zitti e Buoni</p>
      </div>

      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#9a2929" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#9a2929" }}>
            <AiFillPlayCircle />
          </IconContext.Provider>
        </button>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#9a2929" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default App;
