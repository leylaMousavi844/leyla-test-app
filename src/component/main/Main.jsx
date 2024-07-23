import hero from './../../asset/images/hero-1.png@2x.png'

function Main(){
    return(
        <div>
<div className="lg:hidden flex  flex-col items-center " >
    <div className='mt-24'>
        <img className='w-56' src={hero} alt="hero" />
    </div>
    <div>
        <h1 className='mt-7'>گروه آموزشی </h1>
        <h1>انرژی</h1>
        
    </div>
    <div><p className='text-xs text-slate-500 mt-4'>ارایه دهنده ی راهکارهای نوین</p>
    <p className='text-xs  text-slate-500'>آموزشی</p>
    </div>
    <div>
        <button className='bg-orange-400 rounded-xl m-4 text-xs p-3'>خدمات ما</button>
        <button className='bg-emerald-300 m-4 rounded-xl text-xs p-3'>تماس باما</button>
    </div>

</div>
<div className='hidden lg:flex w-4/6 justify-center m-auto'>
    
    <div className='mt-6'>
    <div>
        <h1 className='mt-7 text-4xl'>گروه آموزشی </h1>
        <h1 className='text-4xl'>انرژی</h1>
        
    </div>
    <div><p className='text-xl text-slate-500 mt-4'>ارایه دهنده ی راهکارهای نوین آموزشی</p>
   
    </div>
    <div>
        <button className='bg-orange-400 rounded-xl m-4 text-sm py-3 px-6'>خدمات ما</button>
        <button className='bg-emerald-300 m-4 rounded-xl text-sm py-3 px-6'>تماس باما</button>
    </div>
    </div>
    <div>
        <img className='w-72 mr-36' src={hero}/>
    </div>
</div>
        </div>
    )
}

export default Main;