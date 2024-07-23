import ServiceComponent from "../serviceComponent/ServiceComponent";
import education from "./../../asset/images/education-e1685271036568.png";
import psycology from "./../../asset/images/download-2-1-e1685272999420.png";
import boardingHouse from "./../../asset/images/icons8-syllabus-80.png";
import courseSelection from "./../../asset/images/online-learning-e1685271233634.png";

export const services = [
    {
        "img": education,
        "title": "کلاس",
        "id": " 1"
    },
    {
        "img": psycology,
        "title": "روانشناسی",
        "id": "2"
    },
    {
        "img": boardingHouse,
        "title": "اردو وپانسیون",
        "id": "3"
    },
    {
        "img": courseSelection,
        "title": "انتخاب رشته",
        "id": " 4"

    },

]


function Services() {
  

    return (
        <div>
            <div className="flex lg:hidden  items-center  flex-col   h-custom ">
                <h1 className="font-bold text-2xl my-8">خدمات مجموعه</h1>
                <div className="flex flex-wrap justify-center">
                    {services.map((item) => (
                        <ServiceComponent key={item.id} service={item} />
                    ))}
                </div>
            </div>
            <div className="hidden lg:flex flex-col items-center h-96">
                <h1 className="font-bold text-2xl my-10">خدمات مجموعه</h1>
                <div className="flex  w-3/4 justify-between">
                    {services.map((item) => (
                        <div className="w-1/5" id="serviceId" >
                            <ServiceComponent  key={item.id} service={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Services;