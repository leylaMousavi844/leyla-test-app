import locationLink from "./../../asset/images/locationLink.svg"
import watsappLink from "./../../asset/images/watsappLink.svg"
import telegram from "./../../asset/images/telegramLink.svg"
import instagram from "./../../asset/images/instagramLink.svg"
import footerLogo from "./../../asset/images/footerlogo.png.svg"


function Footer() {
    return (
        <div>
            <div className="flex lg:hidden flex-col w-full h-1/5 bg-gray-200 rounded-xl items-center">
                <div className="my-5 flex flex-col items-center">
                    <p className="text-2xl">شماره تماس دفتر مرکزی:</p>
                    <p>021-22623830</p>
                </div>
                <div className="flex flex-col items-center my-5">
                    <p className=" text-2xl">ایمیل:</p>
                    <a>
                        <p>ac.moshavere.energy@gmil.com</p>
                    </a>
                </div>
                <div className="flex justify-center  my-7">
                    <img className="mx-3" src={instagram} />
                    <img className="mx-3" src={telegram} />
                    <img className="mx-3" src={watsappLink} />
                </div>
                <div>
                    <table className="m-auto my-10">
                        <tr>
                            <th className="p-12 " >آدرس ها</th>
                            <th>لوکیشن ها</th>
                        </tr>
                        <tr>
                            <td className="text-xs">پیروزی تقاطع امام علی</td>
                            <td><img src={locationLink} /></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td className="text-xs">صادقیه کاشانی</td>
                            <td><img src={locationLink} /></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td className="text-xs">شریعتی بالاتراز مترو قلهک</td>
                            <td><img src={locationLink} /></td>
                            <td>3</td>
                        </tr>
                    </table>
                </div>
                <div className="mx-1 mt-10 mb-5">
                    <img src={footerLogo} />

                </div>
                <div className="text-right mx-5">
                    <p>گروه آموزشی ومرکز مشاوره ی انرژی ، اولین آکادمی علمی کشور بوده که تمام خدمات کلاس های کنکور وتقویتی ،مشاوره وروانشناسی تحصیلی، مدرسه ی آنلاین وانتخاب رشته را با بهره گیری ازبهترین اساتید کنکور کشورومجرب ترین کادر مشاوره با مدیریتی با تجربه،از مقطع دبستان تا کنکور را به جهت افزایش انگیزه وپیشرفت دانش آموزان عزیز فراهم آورده تا باخیال راحت وانرژی بالا به آینده ی ایده آل خود برسند.  </p>
                </div>
            </div>



            <div className="hidden lg:flex justify-between w-5/6 py-6 items-center mx-auto   bg-gray-200 rounded-xl  ">
                <div className="flex flex-col mr-9">
                    <div className="my-5 flex flex-col items-center">
                        <p className="text-xl">شماره تماس دفتر مرکزی:</p>
                        <p>021-22623830</p>
                    </div>
                    <div className="flex flex-col items-center my-5">
                        <p className=" text-2xl">ایمیل:</p>
                        <a>
                            <p>ac.moshavere.energy@gmil.com</p>
                        </a>
                    </div>
                    <div className="flex justify-center  my-7">
                        <img className="mx-3" src={instagram} />
                        <img className="mx-3" src={telegram} />
                        <img className="mx-3" src={watsappLink} />
                    </div>
                </div>
                <div>
                    <table className="mx-16" >
                        <tr>
                            <th className="p-12 " >آدرس ها</th>
                            <th>لوکیشن ها</th>
                        </tr>
                        <tr>
                            <td className="text-xs">پیروزی تقاطع امام علی</td>
                            <td><img src={locationLink} /></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td className="text-xs">صادقیه کاشانی</td>
                            <td><img src={locationLink} /></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td className="text-xs">شریعتی بالاتراز مترو قلهک</td>
                            <td><img src={locationLink} /></td>
                            <td>3</td>
                        </tr>
                    </table>
                </div>
                <div >
                    <div className="mx-1 mt-10 mb-5">
                        <img src={footerLogo} />

                    </div>
                    <div className="text-right  mx-5">
                        <p>گروه آموزشی ومرکز مشاوره ی انرژی ، اولین آکادمی علمی کشور بوده که تمام خدمات کلاس های کنکور وتقویتی ،مشاوره وروانشناسی تحصیلی، مدرسه ی آنلاین وانتخاب رشته را با بهره گیری ازبهترین اساتید کنکور کشورومجرب ترین کادر مشاوره با مدیریتی با تجربه،از مقطع دبستان تا کنکور را به جهت افزایش انگیزه وپیشرفت دانش آموزان عزیز فراهم آورده تا باخیال راحت وانرژی بالا به آینده ی ایده آل خود برسند.  </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;