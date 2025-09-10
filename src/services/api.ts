import axios from 'services/axios.customize';

export const fetchData = () => {
    const url_backend = '/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=apparent_temperature,relativehumidity_2m,precipitation&daily=temperature_2m_max,temperature_2m_min&forecast_days=7&timezone=auto';
    return axios.get(url_backend);
}