import watsappLink from "./../../asset/images/whatsapp.png"
import telegram from "./../../asset/images/telegram.png"
import instagram from "./../../asset/images/insta.png"
import callIcon from "./../../asset/images/Vector.png"
import React, { useState } from 'react';
import axios from 'axios';



function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    

    
   
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('http://localhost:8000/person-information', {
    name,
    phone,
    message
    });
    console.log('Response:', response.data);

    setName('');
    setPhone('');
    setMessage('');

    } catch (error) {
    console.error('Error:', error);
    }
    };

    return (
        <div className=" hidden lg:flex flex-col items-center w-4/5  bg-orange-500 mx-auto " style={{height:"12%"}}>
            <div>
                <h1 className="my-5 text-white text-2xl">تماس با ما</h1>
            </div>
            <div className="flex w-full  mt-5 justify-center " style={{ height: "17%" }}>
                <input type="text" placeholder="نام ونام خانوادگی" onChange={(e) => setName(e.target.value)} value={name} className="ml-1 w-2/5 px-1 rounded-lg text-xl" />
                <input type="text" placeholder="شماره تماس" onChange={(e) => setPhone(e.target.value)} value={phone} className="mr-1 w-2/5 px-1 rounded-lg text-xl" />
            </div>
            <div className="w-full h-1/3 flex justify-center mt-2 ">
                <textarea placeholder="پیام خود را وارد کنید تا با تیم مشاوره ی ما درارتباط باشید" onChange={(e) => setMessage(e.target.value)} value={message} className="w-4/5 h-4/5  rounded-lg px-5 "></textarea>
            </div>
            <div className="w-full flex justify-center ">
                <button className="bg-orange-300 w-1/4 py-3 text-white rounded-lg " onClick={handleSubmit}>ارسال</button>
            </div>
            <div className="flex justify-between w-11/12  mb-2">
                <div className="flex ">
                    
                <div className="border-4 border-solid border-white rounded-lg w-12 h-12 ml-3 flex justify-center items-center">
                   <img src={instagram} />
                   </div>
                <div className="border-4 border-solid border-white rounded-lg w-12 h-12 ml-3 flex justify-center items-center">
                   <img src={watsappLink} />
                   </div>
                <div className="border-4 border-solid border-white rounded-lg w-12 h-12 ml-3 flex justify-center items-center">
                   <img src={telegram} />
                   </div>
                <div className="border-4 border-solid border-white rounded-lg w-12 h-12 ml-3 flex justify-center items-center">
                   <img src={instagram} />
                   </div>
                    
                </div>


                <div className="flex " >
                   <div className="border-4 border-solid border-white rounded-lg w-12 h-12 flex justify-center items-center">
                   <img src={callIcon} />
                   </div>
                </div>
            </div>
        </div>
    )
}
export default ContactForm;