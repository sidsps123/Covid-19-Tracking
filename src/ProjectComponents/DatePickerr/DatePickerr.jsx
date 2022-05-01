import React, { useState, useEffect, useCallback } from "react";
import DatePicker from "react-datepicker";
import styles from './DatePickerr.module.css'

import "react-datepicker/dist/react-datepicker.css";
import { fetchDailyData } from '../../ApiServer';

const  DatePickerr = (sendDate) => {

  const [startDate, setStartDate] = useState(new Date());
  const [dailyData, setDailyData] = useState([]);
  const [todayData, setTodayData] = useState({});
  const [showButton, setShowButton] = useState(false);


  const dateHandler = (date) =>{  
    setStartDate(date);
  }
  const dateToggler = () =>{  
    setShowButton(prev => !prev);
  }

  const fetchData = useCallback(async ()=> {
    const data = await fetchDailyData();

    setTimeout(() => {  
      setDailyData(data);
    }, 1000);

  },[]);

  useEffect(()=>{
    fetchData();
  },[]);
  
  
  const event = (new Date(startDate).toJSON()).substr(0,10);
  
  const de = dailyData.find(d => {
    // console.log( d.date.toString());
    // console.log( event.toString());
    return d.date.toString() === event.toString()});
   console.log(de);

  

  useEffect(()=>{
    setTodayData(de);
  },[dailyData]);
  // console.log(de);

  
    return (
       <div className={styles.cont}>
         <div className={styles.contt}>
            <button  className={styles.butt}onClick={dateToggler}>Check by Date(Global Data)</button>
         </div>

          { showButton && 
          <div>
            <DatePicker selected={startDate} onChange={dateHandler} />
            <div className={styles.container}>
              <div className={styles.inner_1}><h2 className={styles.in1}>Confirmed Cases</h2> <br></br>{de ? de.confirmed :"No data found" }</div> 
              <div className={styles.inner_2}><h2 className={styles.in1}>Recovered Cases</h2><br></br>No data found</div>
              <div className={styles.inner_3}><h2 className={styles.in1}>Deceased</h2><br></br><br></br>{de ? de.deaths :"No data found" }</div>
            </div> 
          </div>
          }
      </div>
    );
};

export default DatePickerr;