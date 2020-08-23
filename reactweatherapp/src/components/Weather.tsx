import React, { FC } from 'react';
import { WeatherData } from '../store/types';

interface WeatherProps {
    data: WeatherData
}

const Weather: FC<WeatherProps> = ({ data }) => {
    return (
        <section>
            <div>
                <h1>{data.name} - {data.sys.country}</h1>
                <div>
                    <div>
                        <div>
                            <p>{data.weather[0].description}</p>
                            <p><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>temp</p>
                            <div>
                                <p className="mb-2"> {data.main.temp} </p>
                                <p className="mb-2"> {data.main.temp} </p>
                                <p className="mb-2"> {data.main.temp} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather;