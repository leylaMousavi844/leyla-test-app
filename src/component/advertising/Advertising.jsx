import img from "./../../asset/images/Container.svg"

function Advertising() {
    return (
        <div>
            <div className="lg:hidden flex justify-center w-full">
                <img src={img} />
            </div>
            <div className=" lg:flex hidden justify-center">
                <img src={img} className="w-4/5" />
            </div>
        </div>
    )
}
export default Advertising;