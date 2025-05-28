
export default function GeneratePlotButton(props){
    return(
        <>
        <button className="bg-cyan-700 text-cyan-200 text-sm text-center px-3 py-1 w-fit rounded-xl cursor-pointer shadow-[4px_4px_8px_rgba(0,0,0,0.3)] hover:bg-cyan-500 hover:text-slate-200 transition duration-200">{props.text}
        </button>
        </>
    );
}