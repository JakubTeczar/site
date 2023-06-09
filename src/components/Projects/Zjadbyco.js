import React from 'react';
import { Link } from 'react-router-dom';

const Zjadbyco = ({odd}) => {
 
  return (
    <section className={"project"} >
        <div className={"project__view"}>
            <div className='project__view--img zjadbyco-img' ></div>
        </div>
        <div className={"project__descriptionSide"} >
            <div className='project__description' >
                <div className='project__description--top-panel'>
                        <h3 className='project__description--name'>Zjadbyco</h3>
                        <div className='project__description--icons'>
                            <div className='react-icon'></div>
                            <div className='java-icon'></div>
                            <div className='sass-icon'></div>
                        </div>
                </div>
                <div className='project__description--text'>
                    Za pomocą tej strony będziesz mógł w łatwy sposób zaplanować posiłki na kolejne dni 
                    oraz automatycznie wygenerować listę zakupów.<br/>
                    <br/>
                    Stronę współtworzyłem z <a href='https://github.com/nerfi58' target='black'>nerfi</a>, który zajął się back-endem strony.
                    <span>//Dostępna jest wersja mobilna</span>
                </div>
                
                <Link to="/zjadbyco" target='blanck' className='project__description--button'>Przejdź do projektu</Link>
            </div>
        </div>
    </section>
  );
}

export default Zjadbyco;