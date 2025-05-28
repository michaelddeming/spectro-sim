import CompoundSearchButton from "../features/buttons/CompoundSearchButton";
import CompoundInput from "../features/CompoundInput";
import Nav from "../features/Nav";
import Card from "../features/Card";
import GeneratePlotButton from "../features/buttons/GeneratePlotButton";

function AbsorbSim(props) {
  return (
    <>
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center gap-12">
        {/* COMPOUND SEARCH SECTION */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl mb-3">Compound Search</h1>
          <div className="flex flex-row gap-2 w-fit">
            <CompoundInput></CompoundInput>
            <CompoundSearchButton text="SEARCH"></CompoundSearchButton>
          </div>
          <p style={{ color: "#DFFCFD" }} className="text-xs mt-1">
            Spectral data sourced from the{" "}
            <a
              href="https://pubchem.ncbi.nlm.nih.gov"
              target="_blank"
              className="underline hover:text-cyan-300"
            >
              PubChem
            </a>{" "}
            database.
          </p>

          <p className="mt-4">
            Search Status: <text className="text-blue-300">None</text>
          </p>
        </div>

        {/* COMPOUND SEARCH PLOT GENERATION */}
        <div className="flex flex-wrap md:flex-nowrap w-full p-10 justify-center gap-10">

          
          {/* LEFT SECTION */}
          <div className="w-full md:w-[48%]">
            {/* COMPOUND TITLE and GENERATE BUTTON */}
            <div className="flex flex-wrap items-center mb-2 gap-x-2 pr-2 w-full">
              <h1 className="text-xl font-bold">TEST COMPOUND</h1>
              <GeneratePlotButton text="Generate AbsorbSim"></GeneratePlotButton>
            </div>
            
            <hr></hr>
            
            {/* COMPOUND DATA INFO */}
            <div className="w-full mt-4">
              
              {/* COMPOUND DESC */}
              <div>
                <h2 className="font-bold">Description:</h2>
                <p className="text-pretty">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ea veniam repellat, modi expedita, repudiandae corporis, saepe magni veritatis pariatur omnis repellendus placeat ab voluptate. Et repellendus iste placeat minus.
              </p>

              <div className="mt-4">
                <table>
                  <thead className="font-bold">Spectral Data:</thead>

                  <tr>
                    <th scope="col" className="px-4 py-3">CID#</th>
                    <th scope="col" className="px-4 py-3">Compound</th>
                    <th scope="col" className="px-4 py-3">λmax (nm)</th>
                    <th scope="col" className="px-4 py-3">εmax (M⁻¹cm⁻¹)</th>
                  </tr>
                </table>
              </div>

              </div>
              

            </div>







          </div>

          {/* RIGHT SECTION */}
          <div className="flex justify-center w-full md:w-[48%]">
            {/* PLOT & DOWNLOAD BTN */}
            <div className="w-fit flex flex-col gap-2">
              <img
                className="rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.3)] w-150"
                src="/public/spectroplot.jpg"
              ></img>
              <GeneratePlotButton text="Download AborbSim"></GeneratePlotButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AbsorbSim;
