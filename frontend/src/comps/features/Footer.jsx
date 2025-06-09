import { Link } from "react-router-dom";

export default function Footer(){

    return( 
        <footer className="text-sm text-slate-300 text-center py-6 border-t">
            <p>© 2025 SpectroSim • Built with React + FastAPI • Powered by PubChem</p>
            <div className="flex justify-center space-x-4 mt-2">
                <Link className="hover:underline" to="https://github.com/michaelddeming/spectro-sim" target="_blank">GitHub Repository</Link>
            </div>
        
        </footer>);
}