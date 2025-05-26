

function Card({children}){
    return(
        <div className="rounded-lg p-3 bg-slate-800 shadow-2xl">
           {children}
        </div>
    );
}

export default Card;