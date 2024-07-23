import emailLogo from "./../../asset/images/Margin.svg"



function EmailComponent() {
    return (
        <div>
            <div className="flex lg:hidden flex-col bg-orange-500 w-11/12 mx-auto mb-10  rounded-3xl ">
                <div className="m-3">
                    <img src={emailLogo}/>
                </div>
                <div className="m-3 text-white">
                    <p>درخبرنامه ی ما عضوشوید</p>
                </div>
                <div className="w-3/5 m-3">
                    <p className="text-2xl text-white">ایمیل خود رابرای دریافت جدیدترین اخبار به ما بدهید</p>
                </div>
                <div className=" border-solid border-l-violet-50 border-2 rounded-3xl w-11/12 h-2/5 justify-end flex my-8 m-auto">
                    <input className="bg-orange-500 p-3 w-full mr-2" type="text" placeholder="ایمیل شما" />
                    <button className="bg-emerald-500 px-5 m-1 rounded-2xl text-white  ">عضویت</button>
                </div>

            </div>
            <div className="hidden lg:flex w-4/5 m-auto bg-orange-500 bg-opacity-95 rounded-t-2xl h-full justify-center items-center  py-10 relative right-4">
                <div className="">
                    <img src={emailLogo} />
                </div>
                <div className="flex flex-col w-2/5 items-start">
                    <p className="text-xs text-white opacity-80">درخبرنامه ی ما عضو شوید</p>
                    <br></br>
                    <p className="text-xl text-white text-right">ایمیل خود را برای دریافت جدیدترین محصولات به ما بدهید</p>
                    <br></br>
                    <p className="text-red-700">هیچ اسمپی در کار نیست</p>
                </div>
                <div className=" border-solid border-l-violet-50 border-2 rounded-xl w-5/12 h-2/5 justify-end flex mr-3">
                    <input className="bg-orange-500 p-3 w-full mr-2" type="text" placeholder="ایمیل شما" />
                    <button className="bg-emerald-500 px-5 m-1 rounded-xl text-white  ">عضویت</button>
                </div>
            </div>
        </div>
    )
}
export default EmailComponent;