export { };
declare global {
    interface IResponse {
        latitude: number;
        longitude: number;
        timezone: string;
        timezone_abbreviation: string;
        elevation: number;

        current_weather: ICurrentForecast;
        hourly: IHourlyForecast;
        daily: IDailyForecast;
    }

    interface ICurrentForecast {
        time: Date;
        temperature: number;
        windspeed: number;
        weathercode: number;
    }

    interface IHourlyForecast {
        apparent_temperature: number[];
        precipitation: number[];
        relativehumidity_2m: number[];
        weather_code: number[];
    }

    interface IDailyForecast {
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weather_code: number[];
    }

}   