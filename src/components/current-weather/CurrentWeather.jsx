

const CurrentWeather = ({data}) => {
  return (
    <div className="w-[300px] bg-[#333] shadow-2xl text-white rounded-md mx-auto mt-10 p-5 ">

       <div className="flex justify-between items-center">
            <div>
                <p className="font-bold text-lg tracking-widest">{data.city}</p>
                <p>{data.weather[0].description}</p>
            </div>
            <div className="w-[100px]">
                <img className="w-full" src={`icons/${data.weather[0].icon}.png`} alt="weather" />
            </div>
       </div>

       <div className="flex justify-between gap-x-5 items-center mt-5">
            <p className="font-semibold text-[45px] tracking-wider">{Math.round(data.main.temp)}°C</p>
            <div className="w-full">
                <div className="mb-1">
                    <span className="font-semibold text-md text-left">Details</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold text-[12px] text-left">Feels like</span>
                    <span className="text-right text-[12px] font-light">{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold text-[12px] text-left">Wind</span>
                    <span className="text-right text-[12px] font-light">{data.wind.speed} m/s</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold text-[12px] text-left">Humidity</span>
                    <span className="text-right text-[12px] font-light">{data.main.humidity}%</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold text-[12px] text-left">Pressure</span>
                    <span className="text-right text-[12px] font-light">{data.main.pressure} hPa</span>
                </div>
            </div>
       </div>

    </div>
  )
}

export default CurrentWeather