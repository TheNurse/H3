import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('')

    const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            return dispatch(setAlert('City is required!'));
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }
    return (
        <div>
            <div>
                <div>
                    <h1>{title}</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                        className="input has-text-centered mb-2"
                        placeholder="By navn"
                        style={{maxWidth: 300}}
                        value={city}
                        onChange={handleOnChange}/>
                        <button className="button is-primary is-fullwidth" sytle={{maxWidth: 300, margin: '0 auto'}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}