import React from 'react';

const Calendar = ({odd}) => {
 
  return (
    <section className={"project"} >
        <div className={"project__view"}>
            <div className='project__view--img calednar-img' ></div>
        </div>
        <div className={"project__descriptionSide"} >
            <div className='project__description' >
              <div className='project__description--top-panel'>
                <h3 className='project__description--name'>Kalendarz</h3>
                  <div className='project__description--icons'>
                    <div className='js-icon'></div>
                    <div className='html-icon'></div>
                    <div className='sass-icon'></div>
                    <div className='mysql-icon'></div>
                    <div className='php-icon'></div>
                  </div>
                  
                </div>
                <div className='project__description--text'>
                  Za pomocą tej strony można planować zadania i cele na wybrane dni , 
                  sprawdzać statystki wykonanych zadań a także dodawać najbardziej przydatne linki tak aby mieć je pod ręką.
                  W wolnym czasie można również zagrać w grę matematyczną dostępną na stronie.
                  <br/><br/>
       
                </div>
                <button className='project__description--button'>Przejdź do projektu</button>
            </div>
        </div>
    </section>
  );
}

export default Calendar;