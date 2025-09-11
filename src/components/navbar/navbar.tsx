import logo from 'assets/logo.svg'
import dropdown from 'assets/icon-dropdown.svg'
import units from 'assets/icon-units.svg'
import './navbar.scss'
import type { TCurrentUnits } from '@/App';
import check from 'assets/check.svg'

interface IProps {
    isOpenMenu: boolean;
    setIsOpenMenu: (v: boolean) => void;
    currentUnits: TCurrentUnits;
    setCurrentUnits: (v: TCurrentUnits) => void;
}

export const NavBar = (props: IProps) => {
    const { isOpenMenu, setIsOpenMenu, currentUnits, setCurrentUnits } = props;

    return (
        <>
            <nav>
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="dropdown">
                    <div className="units" onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <img src={units} alt="units icon" />
                        <span>Units</span>
                        <img src={dropdown} alt="units icon" />
                    </div>

                    <div className={`dropdown-menu ${isOpenMenu ? 'show' : ''}`}>
                        <h2>Switch to Imperial</h2>
                        <ul>
                            <li>
                                <h3>Temperature</h3>
                                <div
                                    className={`${isOpenMenu && currentUnits.temperatureUnit == '°C' ? 'active' : ''}`}
                                    onClick={() => setCurrentUnits({ ...currentUnits, 'temperatureUnit': '°C' })}
                                >
                                    <img src={check} alt="" />Celsius (°C)</div>
                                <div
                                    className={`${isOpenMenu && currentUnits.temperatureUnit == '°F' ? 'active' : ''}`}
                                    onClick={() => setCurrentUnits({ ...currentUnits, 'temperatureUnit': '°F' })}
                                ><img src={check} alt="" />Fahrenheit (°F)</div>
                            </li>
                            <div className="hr"></div>
                            <li>
                                <h3>Wind Speed</h3>
                                <div
                                    className={`${isOpenMenu && currentUnits.windSpeedUnit == 'km/h' ? 'active' : ''}`}
                                    onClick={() => setCurrentUnits({ ...currentUnits, 'windSpeedUnit': 'km/h' })}
                                >
                                    <img src={check} alt="" />km/h</div>
                                <div
                                    className={`${isOpenMenu && currentUnits.windSpeedUnit == 'mph' ? 'active' : ''}`}
                                    onClick={() => setCurrentUnits({ ...currentUnits, 'windSpeedUnit': 'mph' })}
                                >
                                    <img src={check} alt="" />
                                    mph</div>
                            </li>
                            <div className="hr"></div>
                            <li>
                                <h3>Precipitation</h3>
                                <div
                                    className={`${isOpenMenu && currentUnits.precipitationUnit == 'mm' ? 'active' : ''}`}
                                    onClick={() => setCurrentUnits({ ...currentUnits, 'precipitationUnit': 'mm' })}
                                >
                                    <img src={check} alt="" />
                                    Millimeters (mm)</div>
                                <div
                                    className={`${isOpenMenu && currentUnits.precipitationUnit == 'in' ? 'active' : ''}`}
                                    onClick={() => setCurrentUnits({ ...currentUnits, 'precipitationUnit': 'in' })}>
                                    <img src={check} alt="" />
                                    Inches (in)</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`overlay ${isOpenMenu ? 'show' : ''}`} onClick={() => setIsOpenMenu(false)}></div>
            </nav>
        </>
    )
}