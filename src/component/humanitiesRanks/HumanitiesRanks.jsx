import axios from 'axios';
import { useEffect, useState } from "react";

function HumanitiesRanks() {
    const [humanities, setHumanities] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/the-top-ranks-of-the-humanities")
            .then((result) => {

                setHumanities(result.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className='flex flex-col items-center w-full bg-slate-100 mx-3 rounded-3xl overflow-hidden overflow-y-auto  whitespace-nowrap' style={{ maxHeight: "350px" }}>
            <h1 className='mt-4 text-xl  flex justify-center '>رتبه برتری های</h1>
            <h1 className=' text-xl  flex justify-center '>انسانی</h1>
            {
                humanities.map((item) => (
                    <div className='w-11/12 bg-red-100 min-h-10 rounded-md flex justify-around my-2 '>
                        <p className='my-2 text-xs'>{item.name}</p>
                        <p className='my-2 text-xs'>{item.field}</p>
                    </div>
                ))
            }

        </div>
    )
}
export default HumanitiesRanks;