import image from "./../../asset/images/image.svg"
import clock from "./../../asset/images/clock.svg"
import calendar from "./../../asset/images/calendar.svg"



function Discounted (props){
  
    return(
        <div className=" flex flex-col  mr-3 bg-white justify-between rounded-2xl"style={{height:"328px"}}>
<div >
    <img src={image}/>
</div>
<div className="mx-2 text-xs opacity-75">
    <p>{props.field}</p>
</div>
<div className="text-xl mr-2">
    <p>
       {props.issue}
    </p>
</div>
<div className="flex bg-slate-200 w-full  p-2 justify-between items-center text-opacity-90">
    <div>
        <img src={calendar}/>
    </div>
    <div>
        <p className="text-xs">{props.date}</p>
    </div>
    <div>
        <img src={clock}/>
    </div>
    <div>
        <p className="text-xs">{props.time}</p>
    </div>
</div>
<div className="flex justify-between w-11/12 py-2 ">
    <div className="flex p-2">
        <p >{props.price}</p>
        <p className="mr-2">تومان</p>
    </div>
    <div >
        <button className="bg-red-600 px-7 py-1 text-white text-lg rounded-xl">خرید</button>
    </div>
</div>
        </div>
    )
}
export default Discounted;