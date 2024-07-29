import backgroundImage from './../../asset/images/background.svg';

function NearestEvents() {
    return (
        <div className=" flex  justify-center mb-10 " >
            <div className="flex lg:hidden">

            </div>
            <div className="hidden lg:flex  bg-cover bg-center rounded-lg" style={{backgroundImage:`url(${backgroundImage})`,height:"420px",width:"992px"}}>
<div className='flex bg-black w-1/5 h-4/5'></div>

            </div>
        </div>
    )
}
export default NearestEvents;