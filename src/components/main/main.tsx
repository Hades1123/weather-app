import bgTodaySmall from 'assets/bg-today-small.svg'
import bgTodayLarge from 'assets/bg-today-large.svg'
import sunny from 'assets/icon-sunny.png'
import fog from 'assets/icon-fog.webp'
import rain from 'assets/icon-rain.webp'
import storm from 'assets/icon-storm.webp'
import snow from 'assets/icon-snow.webp'
import overcast from 'assets/icon-overcast.webp'
import dropdown from 'assets/icon-dropdown.svg'
import dirzzle from 'assets/icon-drizzle.webp'
import partly_cloudy from 'assets/icon-partly-cloudy.webp'
import { useEffect, useState } from 'react'
import { fetchData } from '@/services/api'
import './main.scss'
import { getDay } from '@/utils/helper'
import type { TCurrentUnits, TUnits } from '@/App'

interface IProps {
    currentUnits: TCurrentUnits;
    convertUnits: (unit: TUnits, v: number) => string;
}

export const Main = (props: IProps) => {
    const [isHourlyOpen, setIsHourlyOpen] = useState(false);
    const [currentData, setCurrenData] = useState<IResponse | null>(null);
    const [currentDay, setCurrentDay] = useState("");
    const [currentRightDay, setCurrentRightDay] = useState<number>(0);
    const [listOfDays, setListOfDays] = useState<{ day: string, index: number }[]>([]);

    const { currentUnits, convertUnits } = props;

    const weatherIcons: Record<number, string> = {
        0: sunny,                // Clear sky
        1: sunny,                // Mainly clear
        2: partly_cloudy,        // Partly cloudy
        3: overcast,             // Overcast
        45: fog, 48: fog,        // Fog
        51: dirzzle, 53: dirzzle, 55: dirzzle, // Drizzle
        61: rain, 63: rain, 65: rain,          // Rain
        71: snow, 73: snow, 75: snow,          // Snow
        95: storm, 96: storm, 99: storm        // Thunderstorms
    };

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", 'Saturday', 'Friday', 'Sunday'];

    useEffect(() => {
        fetchData().then(data => {
            const _currentDay = getDay(data.current.time.toString(), data.timezone);
            setCurrenData(data);
            setCurrentDay(_currentDay);
            console.log(data);

            // init list of days start at today to next 6 days 
            let indexOfCurrentDay = days.findIndex(item => item == _currentDay);
            const temp_days = new Array(7).fill(0).map((item, index) => {
                if (indexOfCurrentDay == 7) {
                    indexOfCurrentDay = 0;
                }
                return { day: days[indexOfCurrentDay++], index: index };
            })
            setListOfDays(temp_days);
        });
    }, [])

    const getStatusImg = (code: number) => {
        return weatherIcons[code] ?? sunny; // fallback
    };

    const onChangeRightDay = (day: string) => {
        setIsHourlyOpen(false);
        const target = listOfDays.find(item => item.day == day);
        if (target) {
            setCurrentRightDay(target.index);
        }
    }

    return (
        <>
            <div className="city-weather">
                <div className="city-weather__left">
                    <div className="city-name">
                        <picture className="city-bg-image">
                            <source media="(max-width: 500px)" srcSet={bgTodaySmall} />
                            <img src={bgTodayLarge} alt="bgLarge" />
                        </picture>
                        <div className="city-name__body">
                            <div className="body-left">
                                <p className="place">Berlin, Germany</p>
                                <p className="date">{currentDay}, Aug 5, 2025</p>
                            </div>
                            <div className="body-right">
                                <img src={sunny} alt="sunny" />
                                <span>68°</span>
                            </div>
                        </div>
                    </div>

                    <div className="weather__details">
                        <ul>
                            <li>
                                <div>
                                    <h4>Feels Like </h4>
                                    <p>{currentData?.current.apparent_temperature}%</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Humidity </h4>
                                    <p>{currentData?.current.relative_humidity_2m}%</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Wind </h4>
                                    <p>{convertUnits('wind_speed', currentData?.current.wind_speed_10m ?? 0)} {currentUnits.windSpeedUnit}</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Precipitation</h4>
                                    <p>{convertUnits('precipitation', currentData?.current.precipitation ?? 0)} {currentUnits.precipitationUnit}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <section className="daily-forecast">
                        <h3>Daily forecast</h3>
                        <ul className="daily-forecast-list">
                            {listOfDays.map((item, idx) => (
                                <li key={idx}>
                                    <section>
                                        <h4>{item.day.slice(0, 3)}</h4>
                                        <img src={getStatusImg(currentData?.daily.weather_code[idx]!)} alt="status" />
                                        <div className="day-night">
                                            <span className="day">
                                                {convertUnits('temperature', currentData?.daily.temperature_2m_max[idx]!)}°
                                            </span>
                                            <span className="night">
                                                {convertUnits('temperature', currentData?.daily.temperature_2m_min[idx]!)}°
                                            </span>
                                        </div>
                                    </section>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className="city-weather__right">
                    <div className="header">
                        <h3>Hourly forecast</h3>
                        <div className="hourly-dropdown">
                            <div className="hourly-chosen" onClick={() => setIsHourlyOpen(!isHourlyOpen)}>
                                <span>{listOfDays[currentRightDay]?.day ?? 'Monday'}</span>
                                <img src={dropdown} alt="dropdown" />
                            </div>
                            <div className={`hourly-dropdown-menu ${isHourlyOpen ? 'show' : ''}`}>
                                {days.map((item, index) => (
                                    <li key={index} onClick={() => onChangeRightDay(item)}>
                                        {item}
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ul className='hourly-temp'>
                        {new Array(24).fill(0).map((item, index) => (
                            <li key={index}>
                                <div className="hour-left">
                                    <img src={getStatusImg(currentData?.hourly.weather_code[currentRightDay * 24 + index]!)} alt="sunny" />
                                    <span>{index < 12 ? `${index} AM` : `${index - 12} PM`}</span>
                                </div>
                                <div className="hour-temp">
                                    <span>{convertUnits('temperature', currentData?.hourly.apparent_temperature[currentRightDay * 24 + index] ?? 0)}°</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}