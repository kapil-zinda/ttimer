import {useState, useEffect} from 'react';
import './CountdownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00'
}

const CountdownTimer = ({countDownTime, setCountDownTime}) => {
    console.log(countDownTime);
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    // const [countDownTime, setCountDownTime] = useState(30);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountDownTime(countDownTime-1);
            console.log(countDownTime);
            updateRemainingTime(countDownTime);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countDownTime]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    const h = () => {
        if(remainingTime.hours === '00'){
          return '';
        }else {
          return <><span className="two-numbers">{remainingTime.hours}</span>
          <span className='timename'>hours</span></>;
        //   <span className='timeval'>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
        }
     }

    return(
        <div className="countdown-timer">
            {h()}
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span className='timename'>min</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
            <span className='timename'>sec</span>
        </div>
    );
}

export default CountdownTimer;