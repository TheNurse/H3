import React, { FC } from 'react';
import './App.css';
import { RootState } from './store'
import { useDispatch, useSelector } from 'react-redux';
import Search from './components/Search';
import Weather from './components/Weather';
import Alert from './components/Alert';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMessage = useSelector((state: RootState) => state.alert.message);
  return (
    <div className="App">
      <Search title="Indtast By Navn"/>
      {loading ? <h2 className="is-size-3 py-2">loading..</h2> : weatherData && <Weather data={weatherData} />}

      {alertMessage && <Alert message="Indtast by navn" onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
    </div>
  );
}

export default App;
