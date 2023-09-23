import './App.css';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';
import BtnComponent from './Components/Buttons/BtnComp';

function App() {
  const [nexttime, setnexttime] = useState(0);
  const [subject, setSubject] = useState("Subject");
  // const [status, setStatus] = useState(0);

  const [seen, setSeen] = useState(false);
  console.log(nexttime);

    function togglePop () {
        setSeen(!seen);
    };

    function enterFullScreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      }else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();     // Firefox
      }else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();  // Safari
      }else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();      // IE/Edge
      }
    };

    function exitFullscreen() {
      if(document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    };
    
    // let btn = document.getElementById("full_screen");
    var number1 = 0;
    function fullscreenfunction(){
      let videoEle = document.getElementById('kuchh');
      if(number1 === 0){
        number1 = 1;
        enterFullScreen(videoEle);
      }
      else{
        number1 = 0;
        exitFullscreen();
      }
    };
    
    document.addEventListener('fullscreenchange', (event) => {
      if (document.fullscreenElement) {
        console.log('Entered fullscreen:', document.fullscreenElement);
      } else {
        console.log('Exited fullscreen.');
      }
    });

  // useEffect(() => {

  // }, [seen]);

  // const reset = () => {
  //   setnexttime(nowDayjs + 1500)
  // };

  // const stop = () => {
  //   setStatus(2);
  // };

  // const start = () => {
  //   // run();
  //   setStatus(1);
  //   // setInterv(setInterval(run, 10));
  // };

  // const resume = () => start();

  return (<div className='App' id='kuchh'>
  {seen ? <SetTime toggle={togglePop} settingSubject={setSubject} settingTime={setnexttime}/> : null}
      <div className='subjectName'>{subject}</div>
    <div className="App1">
      <CountdownTimer
     countDownTime={nexttime} setCountDownTime={setnexttime}/>
    </div>
    <div className='stopwatch'>
     {/* <BtnComponent status={togglePop} resume={resume} reset={reset} stop={stop} start={start}/> */}
     <BtnComponent status={togglePop}/>
     </div>
     {/* <button onClick={fullscreenfunction}>full</button> */}
    </div>
  );
}

export default App;

function SetTime(props) {
  const [hour, sethour] = useState(0)
  const [minute, setminute] = useState(0)
  const [second, setsecond] = useState(0)
  const [subject, setSubject] = useState('')

  function handlePopup(e) {
      e.preventDefault()
      // Code to handle login goes here
      props.settingSubject(subject);
      props.settingTime((Number(second) + Number(minute*60) + Number(hour*3600)));
      console.log((second + (minute*60) + (hour*3600)));
      props.toggle()
  }

  return (
      <div className="popup">
          <div className="popup-inner">
              <h2>Login</h2>
              <form onSubmit={handlePopup}>
                  <label>
                      Subject:
                      <input type="text" value={subject} onChange={e => setSubject(e.target.value)} />
                  </label>
                  <label>
                      Time:
                      <div>
                      <input type="number" value={hour} onChange={e => sethour(e.target.value)} />
                      <input type="number" value={minute} onChange={e => setminute(e.target.value)} />
                      <input type="number" value={second} onChange={e => setsecond(e.target.value)} />
                      </div>
                  </label>
                  <button type="submit">Start</button>
              </form>
              <button onClick={props.toggle}>Close</button>
          </div>
      </div>
  )
}
