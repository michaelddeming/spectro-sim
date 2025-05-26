
export default function Button1(props){
    return(
        <>

        <button className="bg-cyan-700 text-cyan-200 px-6 py-1 rounded-xl cursor-pointer shadow-[4px_4px_8px_rgba(0,0,0,0.3)] hover:bg-cyan-500 hover:text-slate-200 transition duration-200">{props.text}
            </button>

        </>
    );

};