import About from "../components/index/About";
import Home from "../components/index/Home";
import Certified from "../components/index/Certified";
import Projects from "../components/index/Projects";
import Divisor from "../components/index/Divisor";

export default function Index() {
    return (
        <>
        <Home/>
        <Divisor/>
        <Projects/>
        <Certified/>
        <About/>
        </>
    )
}