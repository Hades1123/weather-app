import { NavBar } from "components/navbar/navbar"
import { Search } from "components/search/search"
import { Main } from "components/main/main"
import './App.scss'
import { useState } from "react"

export type TUnits = 'temperature' | 'wind_speed' | 'precipitation';
type TWindSpeed = 'km/h' | 'mph';
type TTemperature = '°C' | '°F';
type TPrecipitation = 'mm' | 'in';

export type TCurrentUnits = {
    windSpeedUnit: TWindSpeed;
    temperatureUnit: TTemperature;
    precipitationUnit: TPrecipitation;
}

export const App = () => {
    const [currentUnits, setCurrentUntis] = useState<TCurrentUnits>({
        windSpeedUnit: 'km/h',
        temperatureUnit: '°C',
        precipitationUnit: 'mm',
    })

    const [isOpenUnitsMenu, setIsOpenUnitsMenu] = useState(false);

    const convertUnits = (units: TUnits, value: number): string => {
        switch (units) {
            case 'temperature':
                return currentUnits.temperatureUnit == '°C' ? value.toString() : (value * 9 / 5 + 32).toFixed(1);
            case 'precipitation':
                return currentUnits.precipitationUnit == 'mm' ? value.toString() : (value / 25.4).toFixed(1);
            case 'wind_speed':
                return currentUnits.windSpeedUnit == 'km/h' ? value.toString() : (value * 0.621371).toFixed(1);
        }
    }

    return (
        <>
            <header>
                <NavBar
                    isOpenMenu={isOpenUnitsMenu}
                    setIsOpenMenu={setIsOpenUnitsMenu}
                    currentUnits={currentUnits}
                    setCurrentUnits={setCurrentUntis}
                />
            </header>
            <main>
                <Search />
                <Main
                    currentUnits={currentUnits}
                    convertUnits={convertUnits}
                />
            </main>
        </>
    )
}