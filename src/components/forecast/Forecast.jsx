import { 
    Accordion, 
    AccordionItemHeading, 
    AccordionItem, 
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {

    const dayInAWeek = new Date().getDay();
    const forescastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    console.log(forescastDays);

    return (
        <div className='mt-20'>
            <label className='text-2xl font-semibold tracking-wider mb-4' >Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => {
                    return (
                        <AccordionItem className='mt-4' key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className='bg-white rounded-lg flex items-center px-6 justify-between py-2'>
                                        <div className='w-[50px] mr-5'>
                                            <img className='w-full' src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                                        </div>
                                        <label className='flex-auto w-[300px] font-semibold'>{forescastDays[index]}</label>
                                        <label className='mr-5'>{item.weather[0].description}</label>
                                        <label className='text-gray-400'>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className='px-10 py-5'>
                                <div className='flex gap-x-28'>
                                    <div className='basis-1/2'>
                                        <div className='flex justify-between'>
                                            <label className='font-semibold text-md'>Pressure:</label>
                                            <label className='text-gray-600'>{item.main.pressure} hPa</label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <label className='font-semibold text-md'>Humidity:</label>
                                            <label className='text-gray-600'>{item.main.humidity}%</label>
                                        </div>
                                        <div className='flex justify-between'>
                                            <label className='font-semibold text-md'>Clouds:</label>
                                            <label className='text-gray-600'>{item.clouds.all}%</label>
                                        </div>
                                    </div>
                                    <div className='basis-1/2'>
                                            <div className='flex justify-between'>
                                                <label className='font-semibold text-md'>Wind Speed:</label>
                                                <label className='text-gray-600'>{item.wind.speed} m/s</label>
                                            </div>
                                            <div className='flex justify-between'>
                                                <label className='font-semibold text-md'>Sea Level:</label>
                                                <label className='text-gray-600'>{item.main.sea_level}m</label>
                                            </div>
                                            <div className='flex justify-between'>
                                                <label className='font-semibold text-md'>Feels like:</label>
                                                <label className='text-gray-600'>{item.main.feels_like}°C</label>
                                            </div>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}
                
            </Accordion>
        </div>
    )
}

export default Forecast