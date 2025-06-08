import Nav from "../features/Nav";
import LogoImage from "../features/LogoImage";

import ComingSoonLogoImage from "../features/ComingSoonLogoImage";

function Home() {
    return(
        <>
        <Nav></Nav>

        <div className="flex flex-col justify-center items-center mb-10">
            <p><i>Spectroscopy simplified...</i></p>
        </div>

        <div className="flex flex- items-center justify-center w-full">


            {/* SIMULATOR LOGO SELECTION AREA */}
        <div className="flex flex-row flex-wrap gap-10 justify-around w-1/2">
            <div className="flex flex-col items-center justify-center gap-2">
                <LogoImage
                img_src="../public/absorbsim_logo.jpg"></LogoImage>
                <h1 className="text-xl">AbsorbSim</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <ComingSoonLogoImage
                text="Coming Soon..."></ComingSoonLogoImage>
                <h1 className="text-xl">CustomSim</h1>
            </div>
        </div>

        </div>
        
        


        

        </>
    );
};

export default Home;

