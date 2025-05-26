import Button1 from "../features/buttons/button1";
import CompoundInput from "../features/CompoundInput";
import Nav from "../features/Nav";

function AbsorbSim() {
    return(
        <>
        <Nav></Nav>
        <div>
            <div className="flex flex-col items-center gap-2 pt-30">
                <h1 className="text-3xl">Compound Search</h1>
                <div className="flex flex-row gap-4 w-fit">
                    <CompoundInput></CompoundInput>
                    <Button1 text="SEARCH"></Button1>
                </div>
                <p style={{color:"#DFFCFD"}}className="text-sm mt-3">Spectral data sourced from the <a href="https://pubchem.ncbi.nlm.nih.gov" className="underline hover:text-cyan-400">PubChem</a> database.</p>
            </div>
        </div>
        
        

        </>
    );
};

export default AbsorbSim;

