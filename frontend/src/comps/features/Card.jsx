

function Card({children}){
    return(
        <div className="
        flex
        flex-row
        items-center
        justify-center
        gap-4
        w-fit
        h-fit
        rounded-lg
        p-6 
        bg-slate-800 
        transform
        hover:scale-108
        duration-250
        shadow-[4px_4px_8px_rgba(0,0,0,.5)] 
        hover:shadow-[6px_6px_10px_rgba(0,0,0,.7)] 
        transition-all
        hover:ring-4
        hover:ring-cyan-700
        ease-in-out
        group">
           {children}
        </div>
    );
}

export default Card;