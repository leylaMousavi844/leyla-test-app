import { useEffect, useState } from "react";
import Discounted from "../discounted/Discounted";
import timeIcon from "./../../asset/images/hourglass.svg"
import axios from "axios";



function DiscountedCourses() {
const[discounted,setDiscounted]=useState([])
const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 15,
    seconds: 0,
    });
    
useEffect(()=>{
    axios
    .get("http://localhost:8000/discounted")
    .then((result) => {

        setDiscounted(result.data.data)
    })
    .catch((err) => {
        console.log(err)
    })
},[])

useEffect(() => {
    const timer = setInterval(() => {
    setTimeLeft((prevTime) => {
    let { days, hours, minutes, seconds } = prevTime;
    
    if (seconds > 0) {
    seconds--;
    } else if (minutes > 0) {
    minutes--;
    seconds = 59;
    } else if (hours > 0) {
    hours--;
    minutes = 59;
    seconds = 59;
    } else if (days > 0) {
    days--;
    hours = 23;
    minutes = 59;
    seconds = 59;
    }
    
    return { days, hours, minutes, seconds };
    });
    }, 1000);
    
    return () => clearInterval(timer);
    }, []);


    return (
        <div className=" hidden lg:flex flex-col mx-auto my-3 w-11/12 rounded-xl bg-red-400 border-8 border-red-600"  style={{height:"11%" }}>
            <div className="flex justify-between items-center  my-3 mx-10">
                <div className="text-white text-2xl">
                    <h1>
                        دوره های تخفیف دار
                    </h1>
                </div>
                <div className="flex bg-white rounded-xl w-1/4 p-2 text-red-700">
                    <div>
                        <div className="w-4/5 h-4/5 flex justify-center ">
                            <img src={timeIcon} className="w-4/5 h-4/5"/>
                        </div>
                    </div>
                    <p>زمان باقی مانده</p>
                    <p>:</p>
                   <div className="mr-2">
                    <p>{timeLeft.seconds.toString().padStart(2, '0')}</p>
                    <p className="text-xs text-red-500">ثانیه</p>
                   </div>
                   <p>:</p>
                   <div className="mr-2">
                    <p>{timeLeft.minutes.toString().padStart(2, '0')}</p>
                    <p className="text-xs text-red-500">دقیقه</p>
                   </div>
                   <p>:</p>
                   <div className="mr-2">
                    <p>{timeLeft.hours.toString().padStart(2, '0')}</p>
                    <p className="text-xs text-red-500">ساعت</p>
                   </div>
                   <p>:</p>
                   <div className="mr-2">
                    <p>{timeLeft.days.toString().padStart(2, '0')}</p>
                    <p className="text-xs text-red-500">روز</p>
                   </div>
                </div>
            </div>
            <div className=" flex  overflow-x-auto  whitespace-nowrap" style={{maxWidth:"1200px"}}>
            {
                            discounted.map((item) => (
                                <Discounted field={item.field} issue={item.issue} date={item.date} time={item.time} price={item.price} />
                            ))
                        }
            </div>
        </div>
    )
}

export default DiscountedCourses;