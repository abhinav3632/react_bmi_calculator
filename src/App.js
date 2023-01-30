import React, { useState } from 'react'

import './index.css'

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  

  let calcBmi = (event) => {
    event.preventDefault()
    if(weight === 0 || height === 0){
      alert('Please enter a valid height and weight')
    }else{
      let bmi = (weight/(height * height))
      setBmi(bmi.toFixed(1))

      //Logic for message
      if( bmi < 18.5) {
        setMessage('You are underweight')
      } 
      else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are healthy weight')
      } 
      else if (bmi >= 25 && bmi < 29.9){
        setMessage('You are overweight')
      } 
      else{
        setMessage('You are obese')
      }
    }
  }

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 18.5) {
      imgSrc = require('../src/assets/underweight.gif')
    } else if(bmi >= 18.5 && bmi < 24.9){
      imgSrc = require('../src/assets/healthy.gif')
    } else if(bmi >= 25 && bmi < 29.9){
      imgSrc = require('../src/assets/overweight.gif')
    } else{
      imgSrc = require('../src/assets/obese.gif')
    }
  }


  let reload = () =>{
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kgs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (m)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>          
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App;
