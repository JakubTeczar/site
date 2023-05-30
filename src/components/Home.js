import React, { useRef, useEffect, useState } from 'react';
import Console from './Console';

// import Expenses from './components/Expenses/Expenses';

const Home = (props) => {
  // const purplePart = useRef();
  
 
  const purplePart = useRef(null);
  const[display , setDisplay] = useState(props.diplay);

  useEffect(() => {
    setDisplay(props.diplay);
    const resizeObserver = new ResizeObserver(entries => props.setPosition(entries[0].target.offsetLeft));
    resizeObserver.observe(purplePart.current);
    if (purplePart.current) {
      resizeObserver.observe(purplePart.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [purplePart,props]);

  return (
    <section className='home'>
        <div className='home__contents'>
            <div className='home__contents--headline'>Witam! </div>&shy;
            <div className='home__contents--text'>
            Jestem studentem na<div className='mobile-br'></div> kierunku <span>informatyka</span><div className='mobile-br'></div> <div className='desktop-br'></div>
            <span>stosowana.</span> Interesuje <div className='mobile-br'></div>się tworzeniem stron <div className='mobile-br'></div><div className='desktop-br'></div>
            internetowych oraz <div className='mobile-br'></div>wszystkim co jest z tym <div className='mobile-br'></div><div className='desktop-br'></div>
            związane.
            </div>
            <button className='home__contents--buttton' onClick={props.moveToProjectF}>Moje Projekty</button>
        </div>
        <div className={display ? 'emptyCircle fast-fadeIn' : 'emptyCircle'} ></div>
        <div className={display ? 'fullCircle fast-fadeIn' : 'fullCircle'} ></div>
        <div className='line'></div>
        <div className='home__purplePart' ref={purplePart}></div>
    </section>
  );
}

export default Home;