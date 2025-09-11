export { };
declare global {
    interface IResponse {
        latitude: number;
        longitude: number;
        timezone: string;
        timezone_abbreviation: string;
        elevation: number;

        current: ICurrentForecast;
        hourly: IHourlyForecast;
        daily: IDailyForecast;
    }

    interface ICurrentForecast {
        time: Date;
        temperature: number;
        wind_speed_10m: number;
        weathercode: number;
        apparent_temperature: number;
        precipitation: number;
        relative_humidity_2m: number;
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