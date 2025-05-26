import { Link } from "react-router-dom";


function Nav(){
    return(
        <>
        <nav className="flex flex-row gap-10 items-center text-2xl">
            
            {/* SITE LOGO */}
            <div className="text-cyan-500 text-6xl font-[oxanium]">
                <Link to="/"><h1>SpectroSim</h1></Link>
            </div>
            
            
            {/* PAGE NAVIGATION */}
            <div className="flex gap-10">
                
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

                <div className="relative group">
                    <button className="inline-block cursor-pointer">Simulators</button>

                    <div className="absolute hidden left-0 mt-1 top-full group-hover:block">
                        <Link className="block hover:bg-slate-700">AbsorbSim</Link>
                    
                    </div>
                </div>
            </div>
        </nav> 
        </>
    );
}
export default Nav;