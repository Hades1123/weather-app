
export const fetchData = async (): Promise<IResponse> => {
    const daily_weather = 'temperature_2m_max,temperature_2m_min,weather_code';
    const hourly_weather = 'apparent_temperature,relativehumidity_2m,precipitation,weather_code';
    const url_backend = `${import.meta.env.VITE_BACKEND_URL}/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=${hourly_weather}&daily=${daily_weather}&forecast_days=7&timezone=auto`;
    const result = await fetch(url_backend);
    return result.json();
}