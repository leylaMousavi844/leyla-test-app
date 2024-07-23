


function Professor (props){
    console.log(props.name)
    return(
        <div className="flex flex-col items-center min-w-44 h-5/6 ">
<img src={props.img} className="w-4/5 h-1/2 bg-slate-400 mt-2 rounded-md"/>
<div className="mt-3">{props.name}</div>
<div className="mt-3 text-sm text-amber-400">{props.title}</div>
        </div>
    )
}
export default Professor;