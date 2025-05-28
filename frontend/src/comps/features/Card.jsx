

function Card({children}){
    return(
        <div className="w-fit rounded-lg p-3 bg-slate-600 shadow-[4px_4px_8px_rgba(0,0,0,.7)]">
           {children}
        </div>
    );
}

export default Card;