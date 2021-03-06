import React from 'react';
import { Cards, CountryPicker, Graphs} from './ProjectComponents';
//import SignApp from './SignApp';
import { fetchData } from './ApiServer/';
import styles from './App.module.css';

import image from './images/images (1).jpg';
import DatePickerr from './ProjectComponents/DatePickerr/DatePickerr';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
                <DatePickerr />
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Graphs data={data} country={country} /> 
      </div>
    );
  }
}

export default App;