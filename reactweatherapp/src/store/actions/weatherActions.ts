import { ThunkAction } from  'redux-thunk';
import {RootState} from '..';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR} from '../types';
import { async } from 'q';


const apiKey: string = 'd9d6b1ec87b72b83cf007be072b7973b';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);

            if (!result.ok) {
                const response: WeatherError = await result.json();
                throw new Error(response.message);
            }

            const response: WeatherData = await result.json();
            dispatch({
                type: GET_WEATHER,
                payload: response
            });
        }catch(error){
            dispatch({
                type: SET_ERROR,
                payload: error.message
            });
        }
    }
}

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}