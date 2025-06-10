import { Link } from "react-router-dom";


function Nav(){
    return(
        <>
        <nav className="flex flex-col md:flex-row md:justify-between gap-10 items-center">
            
            {/* SITE LOGO */}
            <div >
                <Link to="/"><h1 className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent text-6xl font-[oxanium]">SpectroSim</h1></Link>
            </div>
            
            
            {/* PAGE NAVIGATION */}
            <div className="flex gap-10 text-2xl">
                
                <Link to="/" className="hover:text-slate-400">Home</Link>
                <Link to="/about" className="hover:text-slate-400">About</Link>

                <div className="relative group">
                    <button className="inline-block cursor-pointer hover:text-slate-400 group-hover:text-slate-400">Simulators</button>

                    <div className="absolute hidden group-hover:flex group-hover:flex-col group-hover:text-wrap">
                        <Link to="/absorbsim" className="hover:text-cyan-500">AbsorbSim</Link>                    
                    </div>
                </div>
            </div>
        </nav> 
        </>
    );
}
export default Nav;