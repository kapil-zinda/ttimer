import React, {useState} from 'react';

function BtnComponent(props) {
  return (
    <div>
      {
        <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.status}>Set</button>
      }

      {/* {(props.status === 1)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Pause</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      } */}

     {/* {(props.status === 2)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      } */}
     
    </div>
  );
}

export default BtnComponent;