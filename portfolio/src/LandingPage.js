// import Solarsystem from "./Solarsystem"
import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <>
      <div
        className="flex w-full flex-col bg-black"
        style={{backgroundImage: require("./images/stars.jpg")}}
      >
        <div className="flex flex-col m-5 overflow-hidden">
            <h1 className="font-mono text-7xl text-white text-center">
                Welcome to my universe.
            </h1>
            <div className=" mt-10 m-10  items-center lg:flex grayscale-50 hover:grayscale-0 hover:bg-gray-800">
            <div className="m-10 h-48 lg:h-auto flex-none lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
            className="p-3 rounded-full h-60 w-60"
            src={require("./jonas-verstuyft-flsFQ3UTuKw-unsplash 2.jpg")}
            ></img>
            <h1 className="font-mono text-4xl text-white text-center">I am Sina</h1>
            </div>
            <div className="flex flex-col pb-10 mt-5 font-mono text-xl text-white">
                <p>As a full-stack software developer I explore the wonders of code
                    and the vast reaches of space.
                    Join me on this epic journey as we push boundaries,
                    craft captivating user experiences, and uncover hidden treasures of innovation.
                    Together, let's boldly venture into the unknown, one line of code at a time. </p>
                <p>See you among the stars!</p>
            </div>
            </div>
            </div>

            {/* <Link
            to="/sinaverse"
            className="text-center m-20 mt-0 animate-pulse">
                <button className="font-mono text-3xl text-white bg-transparent hover:bg-violet-700 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-violet-700 hover:border-transparent">Enter the Sinaverse</button>
                </Link> */}

            <div className="text-white pb-10 mt-5 font-mono text-xl">hi</div>
            </div>
        </>
    )
};
