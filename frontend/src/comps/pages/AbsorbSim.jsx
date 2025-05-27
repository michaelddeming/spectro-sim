import CompoundSearchButton from "../features/buttons/CompoundSearchButton";
import CompoundInput from "../features/CompoundInput";
import Nav from "../features/Nav";
import Card from "../features/Card";
import GeneratePlotButton from "../features/buttons/GeneratePlotButton";

function AbsorbSim(props) {
  return (
    <>
      <Nav></Nav>
      <div className="flex flex-col items-center justify-center gap-15">
        {/* COMPOUND SEARCH SECTION */}
        <div className="flex flex-col items-center gap-2 pt-30">
          <h1 className="text-3xl ">Compound Search</h1>
          <div className="flex flex-row gap-4 w-fit">
            <CompoundInput></CompoundInput>
            <CompoundSearchButton text="SEARCH"></CompoundSearchButton>
          </div>
          <p style={{ color: "#DFFCFD" }} className="text-xs mt-3">
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

          <p>
            Search Status: <text className="text-blue-300">None</text>
          </p>
        </div>

        {/* COMPOUND SEARCH PLOT GENERATION */}
        <div className="flex flex-row flex-wrap gap-y-4">

          
          {/* LEFT SECTION */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center mb-2 gap-2">
              <h1 className="text-xl font-bold">TEST COMPOUND</h1>
              <GeneratePlotButton text="Generate AbsorbSim"></GeneratePlotButton>
            </div>
            <p>
              Lorem
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full md:w-1/2">
            {/* PLOT & DOWNLOAD BTN */}
            <div className="flex flex-col gap-2">
              <img
                className="rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.3)]"
                src="/public/spectroplot.jpg"
              ></img>
              <GeneratePlotButton text="Download AborbSim GIF"></GeneratePlotButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AbsorbSim;
