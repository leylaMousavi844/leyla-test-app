import { useEffect, useState } from "react";
import img1 from "./../../asset/images/blobs-about.svg fill.svg"
import img2 from "./../../asset/images/blobs-services.svg fill.svg"
import Professor from "../professor/Professor";
import axios from 'axios';
import HumanitiesRanks from "../humanitiesRanks/HumanitiesRanks";
import ExperimentalRanks from "../experimentalRanks/ExperimentalRanks";
import MathRanks from "../mathRanks/MathRanks";
import svg from "./../../asset/images/SVG.png"




function Container() {
    const [professor, setProfessor] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/the-best-professors")
            .then((result) => {

                setProfessor(result.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <div className="  flex  flex-col lg:hidden items-center">
                <h1 className="text-xs my-10">برترین اساتید را برای شما گرد آورده ایم!</h1>
              
                <div id="cont" className=" h-72  flex  overflow-hidden overflow-x-auto  whitespace-nowrap" style={{maxWidth:"300px"}} >
                    {
                        professor.map((item) => (
                            <Professor name={item.name} title={item.title} img={item.image} />
                        ))
                    }
                </div>
                
                <br></br>
                <ExperimentalRanks />
                <br></br>
                <HumanitiesRanks />
                <br></br>
                <MathRanks />
                <br></br>
                <div className="w-full
                 flex-col h-52 rounded-3xl  bg-orange-500 justify-center items-center " >
                    <div className="flex justify-center my-8 text-white opacity-75 items-center">
                        <p className="w-4/5">جهت ثبت نام واطلاعات بیشتر با ما تماس بگیرید.</p>
                    </div>
                    <div className=" text-2xl text-white  font-bold flex items-center flex-col ">
                    
                       <p>021-22623</p>
                      
                        <p>830</p>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>




            <div className="hidden lg:flex relative justify-between mt-20  ">

                <div><img src={img1} className="relative z-10 mt-96 bottom-80" /></div>

                <div className="flex flex-col  w-4/5 h-full absolute right-28 z-20 items-center">
                    <h1 className="my-10">برترین اساتید را برای شما گرد آورده ایم!</h1>
                    <div className="w-4/5 h-1/4  flex  overflow-hidden overflow-x-auto  whitespace-nowrap" style={{ maxWidth: "808px" }}>
                        {
                            professor.map((item) => (
                                <Professor name={item.name} title={item.title} img={item.image} />
                            ))
                        }
                    </div>
                    <div className="w-4/5 h-1/3  mt-24 flex">
                        <ExperimentalRanks />
                        <HumanitiesRanks />
                        <MathRanks />
                    </div>
                    <div className="w-full h-1/6 rounded-xl bg-orange-500 bg-opacity-95 right-0 relative z-10 flex justify-center items-center">

                        <img src={svg} className="w-1/2 h-full absolute z-20 rounded-lg right-0" />

                        <p className="relative z-30 text-2xl left-20">جهت ثبت نام واطلاعات بیشتر با ما</p>
                        <p className="relative z-30 text-2xl top-12 left-80">تماس بگیرید</p>
                        <p className="relative text-2xl text-white  font-bold">021-22623830</p>

                    </div>

                </div>

                <div><img src={img2} className="relative z-10 mt-40" />

                </div>

            </div>

        </div>
    )
}
export default Container;