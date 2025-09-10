import bgTodaySmall from 'assets/bg-today-small.svg'
import bgTodayLarge from 'assets/bg-today-large.svg'
import sunny from 'assets/icon-sunny.png'
import dropdown from 'assets/icon-dropdown.svg'
import { useEffect, useState } from 'react'
import { fetchData } from '@/services/api'
import './main.scss'

export const Main = () => {
    const [isHourlyOpen, setIsHourlyOpen] = useState(false);
    // const [currentData, setCurrenData] = useState<any>();
    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await fetchData();
    //         setCurrenData(res);
    //         console.log({ res });
    //     }
    //     fetch();
    // }, [])

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
                                <p className="date">Tuesday, Aug 5, 2025</p>
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
                                    <p>46%</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Humidity </h4>
                                    <p>46%</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Wind </h4>
                                    <p>46%</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4>Precipitation</h4>
                                    <p>46%</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <section className="daily-forecast">
                        <h3>Daily forecast</h3>
                        <ul className="daily-forecast-list">
                            {new Array(7).fill(0).map((day, idx) => (
                                <li key={idx}>
                                    <section>
                                        <h4>Mon</h4>
                                        <img src={sunny} alt="sunny" />
                                        <div className="day-night">
                                            <span className="day">
                                                x
                                            </span>
                                            <span className="night">
                                                y
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
                            <div className="hourly-chosen">
                                <span>Mon</span>
                                <img src={dropdown} alt="dropdown" />
                            </div>
                            <div className={`hourly-dropdown-menu ${isHourlyOpen ? 'show' : 'hidden'}`}>
                                {new Array(8).fill(0).map((item, index) => (
                                    <li key={index}>
                                        day
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ul className='hourly-temp'>
                        {new Array(8).fill(0).map((item, index) => (
                            <li key={index}>
                                <div className="hour-left">
                                    <img src={sunny} alt="sunny" />
                                    <span>3 PM</span>
                                </div>
                                <div className="hour-temp">
                                    <span>20°</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}