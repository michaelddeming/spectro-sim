import { Link } from "react-router-dom";


function Nav(){
    return(
        <>
        <nav className="flex flex-row gap-10 items-center text-2xl">
            
            {/* SITE LOGO */}
            <div >
                <Link to="/"><h1 className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent text-6xl font-[oxanium]">SpectroSim</h1></Link>
            </div>
            
            
            {/* PAGE NAVIGATION */}
            <div className="flex gap-10 text-2xl">
                
                <Link to="/" className="hover:text-slate-500">Home</Link>
                <Link to="/about" className="hover:text-slate-500">About</Link>

                <div className="relative group">
                    <button className="inline-block cursor-pointer ">Simulators</button>

                    <div className="absolute hidden group-hover:flex flex-col whitespace-nowrap pt-1">
                        <Link to="/absorbsim" className="hover:text-slate-500">AbsorbSim</Link>
                        <Link className="hover:text-slate-500">Coming Soon!</Link>
                    
                    </div>
                </div>
            </div>
        </nav> 
        </>
    );
}
export default Nav;