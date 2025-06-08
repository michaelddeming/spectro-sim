
function ComingSoonLogoImage(props) {
    return(
        <div className="w-[150px] h-[150px] border overflow-hidden rounded-[50%] bg-white hover:cursor-pointer">
            <p className="w-full h-full text-black text-xl flex justify-center items-center">{props.text}</p>
        </div>
        
    );
}

export default ComingSoonLogoImage;