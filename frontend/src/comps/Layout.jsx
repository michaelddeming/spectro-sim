
export default function Layout({children}){
    return(
        <div className="min-h-screen bg-slate-900 text-slate-200 p-8 lg:p-12 font-[roboto]">
            {children}
        </div>
    );
}