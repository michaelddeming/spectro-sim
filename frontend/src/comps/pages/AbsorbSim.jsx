import CompoundSearchButton from "../features/buttons/CompoundSearchButton";
import CompoundInput from "../features/CompoundInput";
import Nav from "../features/Nav";
import Card from "../features/Card";
import GeneratePlotButton from "../features/buttons/GeneratePlotButton";
import AbsorbSimPlot from "../features/AbsorbSimPlot";

function AbsorbSim(props) {
  return (
    <>
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center gap-4">
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

          <p className="mt-4 mb-8">
            Search Status: <text className="text-blue-300">None</text>
          </p>
        </div>

        {/* COMPOUND SEARCH PLOT GENERATION */}
        <div className="flex flex-wrap lg:flex-nowrap w-full lg:p-10 justify-center gap-8">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-[48%]">
            {/* COMPOUND TITLE and GENERATE BUTTON */}
            <div className="flex flex-wrap items-center mb-2 gap-x-2 pr-2 w-full">
              <h1 className="text-xl font-bold">TEST COMPOUND</h1>
              <GeneratePlotButton text="Generate AbsorbSim"></GeneratePlotButton>
            </div>

            <hr></hr>

            {/* COMPOUND DATA INFO */}
            <div className="w-full">
              {/* COMPOUND DESC */}
              <div className="mt-4 flex flex-col gap-1">
                <h2 className="underline font-bold">Description:</h2>
                <p className="text-pretty">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi ea veniam repellat, modi expedita, repudiandae corporis,
                  saepe magni veritatis pariatur omnis repellendus placeat ab
                  voluptate. Et repellendus iste placeat minus.
                </p>
              </div>

              {/* COMPOUND TABLE DATA */}
              <div className="mt-4">
                <h2 className="font-bold underline">Spectral Data:</h2>
                <div className="overflow-x-auto rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,.7)] mt-2">
                  <table className="min-w-full text-left bg-slate-600 border-collapse">
                    <thead className="bg-slate-800 text-cyan-500">
                      <tr>
                        <th className="px-4 py-2 border border-slate-700">
                          CID#
                        </th>
                        <th className="px-4 py-2 border border-slate-700">
                          Compound
                        </th>
                        <th className="px-4 py-2 border border-slate-700">
                          λmax (nm)
                        </th>
                        <th className="px-4 py-2 border border-slate-700">
                          εmax (M⁻¹cm⁻¹)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:text-slate-800">
                        <td className="hover:bg-slate-500 hover:text-slate-200 px-4 py-2 border border-slate-700">
                          Test
                        </td>
                        <td className="hover:bg-slate-500 hover:text-slate-200 px-4 py-2 border border-slate-700">
                          Test
                        </td>
                        <td className="hover:bg-slate-500 hover:text-slate-200 px-4 py-2 border border-slate-700">
                          Test
                        </td>
                        <td className="hover:bg-slate-500 hover:text-slate-200 px-4 py-2 border border-slate-700">
                          Test
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex justify-center items-center w-full lg:w-[48%]">
            {/* PLOT & DOWNLOAD BTN */}

              <div className="flex flex-col   w-full max-w-[750px] gap-2 items-start">
                <div className='w-full aspect-[4/3]'>
                  <AbsorbSimPlot></AbsorbSimPlot>
                </div>
                
                
                <div className="">
                  <GeneratePlotButton text="Download AborbSim"></GeneratePlotButton>
                </div>
                
              </div>
                
               
              
            </div>
          </div>
      </div>
    </>
  );
}

export default AbsorbSim;
