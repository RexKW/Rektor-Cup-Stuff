import dayCardBG from '../assets/DayCard.png'


function DayCard({ date, name }: { date: string; name: string }) {
  return (
    <div className='relative fadeInG flex w-screen justify-center items-center px-5 lg:w-[70%] lg:h-[70%]'>
        <div className='flex flex-col flex absolute w-full h-full z-[10] px-10 lg:px-20 top-5 lg:top-20'>
            <p className='text-base lg:text-2xl flex basis-[20%] justify-center text-black bg-gradient-to-r from-[#26E5D3]  to-[#498099] w-full py-5 rounded-xl batman'>{date}</p>
            <p className='text-xl lg:text-4xl flex basis-[50%] justify-center items-center body text-white'>{name}</p>
        </div>
      <img src={dayCardBG} alt="" className='relative w-full h-full z-0 '/>
    </div>
  )
}

export default DayCard
