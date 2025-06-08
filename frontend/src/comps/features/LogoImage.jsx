
function LogoImage(props) {
    return(
        <div className="w-[175px] h-[175px overflow-hidden rounded-[50%]">
            <img className="w-full h-full object-cover" src={props.img_src}></img>
        </div>
 
        
        
    );
}

export default LogoImage;