
import { Link } from "react-router-dom";



function ServiceComponent (props){
   
    console.log(props.service.img)
    return(
        <div className="flex  flex-col items-center border-2  mx-2 my-3 h-44 rounded-2xl">
        <div className="h-96 m-2 ">
            <img src={props.service.img}  />
        </div>
        <div className="  w-28 flex justify-center text-xs" >{props.service.title}</div>
        <div className=" text-white bg-orange-300 m-2 rounded-xl text-sm p-1 "> 
            <Link to={`/about-services/${props.service.id}`}>
            <button >اطلاعات بیشتر</button>
            </Link>
        </div>
        </div>
    )
}
export default  ServiceComponent;

