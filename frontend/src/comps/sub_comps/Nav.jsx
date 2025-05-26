import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
        <nav className="flex justify-between items-center text-2xl">
            
            {/* SITE LOGO */}
            <div>
                <Link to="/"><h1>SpectroSim</h1></Link>
            </div>
            
            
            {/* PAGE NAVIGATION */}
            <div className="flex justify-between gap-5">
                <Link to="/">Home</Link>
                <Link to="/">AbSim</Link>
            </div>
        </nav>  
        </>
    );
}
export default Nav;