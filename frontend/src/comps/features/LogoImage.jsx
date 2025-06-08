
function LogoImage(props) {
    return(
        <div className="w-[150px] h-[150px overflow-hidden rounded-[50%] hover:cursor-pointer">
            <img className="w-full h-full object-cover" src={props.img_src}></img>
        </div>
 
        
        
    );
}

export default LogoImage;