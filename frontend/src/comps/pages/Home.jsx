import Nav from "../features/Nav";
import LogoImage from "../features/LogoImage";

import ComingSoonLogoImage from "../features/ComingSoonLogoImage";

function Home() {
    return(
        <>
        <Nav></Nav>

        <div className="">
            <p>Welcome to <h1>SpectroSim</h1></p>
        </div>

        {/* SIMULATOR LOGO SELECTION AREA */}
        <div className="flex flex-row flex-wrap gap-10 justify-evenly border p-4">
            <div className="flex flex-col items-center justify-center gap-2">
                <LogoImage
                img_src="../public/absorbsim_logo.jpg"></LogoImage>
                <h1 className="text-2xl">AbsorbSim</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <ComingSoonLogoImage
                text="Coming Soon..."></ComingSoonLogoImage>
                <h1 className="text-2xl">CustomSim</h1>
            </div>
        </div>
        


        

        </>
    );
};

export default Home;

