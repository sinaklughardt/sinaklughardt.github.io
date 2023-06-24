// import Solarsystem from "./Solarsystem"
import { Link } from "react-router-dom"
import Project from "./projects"
import Background from "./background"
import Education from "./education"
import Motivation from "./motivation"
import Contact from "./contact"

export default function LandingPage() {
    return (
        <>
      <div
        className="flex w-full flex-col"
        style={{backgroundImage: require("./images/stars.jpg")}}
      >
        <div className="flex flex-col m-5 overflow-hidden">
            <h1 className="text-6xl text-center">
                Hi, I am Sina
            </h1>
            <h2 className="text-2xl text-gray-600 text-center">Full-Stack Software Developer</h2>
            <div className=" mt-10 m-10  items-center lg:flex grayscale-50 hover:grayscale-0 shadow border">
            <div className="m-10 h-48 lg:h-auto flex-none lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
            className="p-3 rounded-full h-60 w-60"
            src={require("./jonas-verstuyft-flsFQ3UTuKw-unsplash 2.jpg")}
            ></img>
            </div>
            <div className="flex flex-col pb-10 mt-5 text-xl">
                <h1 className="text-3xl p-3">Welcome to the Sinaverse</h1>
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
            </div>
            <div className="lg:flex md:flex justify-center">
            <Project />
            <Education />
            <Motivation />
            <Background />
            <Contact />
            </div>
        </>
    )
};
