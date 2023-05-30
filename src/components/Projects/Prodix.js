import React from 'react';
import { Link } from 'react-router-dom';

const Prodix = ({odd}) => {
 
  return (
    <section className={odd ? "project odd-project":"project"} >
        <div className={odd ? "project__view odd-project__view":"project__view"}>
            <div className='project__view--img' ></div>
        </div>
        <div className={odd ? "project__descriptionSide odd-project__descriptionSide":"project__descriptionSide"} >
            <div className='project__description' >
                <div className='project__description--top-panel'>
                  <h3 className='project__description--name'>Prodix</h3>
                  <div className='project__description--icons'>
                      <div className='js-icon'></div>
                      <div className='html-icon'></div>
                      <div className='sass-icon'></div>
                      <div className='php-icon'></div>
                      <div className='mysql-icon'></div>
                  </div>
                </div>
                <div className='project__description--text'>
                  Jest to strona która umożliwa tworzenie spersonalizowanych planów treningowych oraz śledzenie postępów na siłowni.
                  <br/><br/>
                  Dodatkowo, zapewnia łatwy dostęp do planu treningowego oraz pozwala na zapisywanie swojej aktywności w kalendarzu.
                <br/>
       
                </div>
                <Link to="/prodix" target='blanck' className='project__description--button'>Przejdź do projektu</Link>
            </div>
        </div>
    </section>
  );
}

export default Prodix;