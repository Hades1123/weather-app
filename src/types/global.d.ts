export { };
declare global {

    interface ICurrentForecast {
        time: Date;
        temperature: number;
        windspeed: number;
    }

    interface IHourlyForecast {
        apparent_temperature: number[];
        precipitation: number[];
        relativehumidity_2m: number[];

    }
}