
export default function Button1(props){
    return(
        <>

        <button className="bg-cyan-600 not-only:px-4 py-1 rounded-xl cursor-pointer shadow-[4px_4px_8px_rgba(0,0,0,0.3)] hover:bg-slate-900 transition duration-200">{props.text}
            </button>

        </>
    );

};