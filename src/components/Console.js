import React from 'react';



const Console = ({consoleClass, textClass}) => {
  return (
    <div className={consoleClass ? consoleClass : 'console'}>
        <div className='console__bar'>
            <div className='console__bar--img'></div>
            <div className='console__bar--text'>WybierzC:\WINDOWS\system32\cmd.exe</div>

            <div className='console__bar--buttons'>
                <div className='console__bar--hideBtn'></div>
                <div className='console__bar--fullSizeBtn'></div>
                <div className='console__bar--closeBtn'>
                    <div className='closeBtn__line'></div>
                    <div className='closeBtn__line'></div>
                </div>
            </div>
        </div>
          <div className={textClass ? textClass : 'console__text'} >
          Microsoft Windows [Version 10.0.19045.2604] <br/>
          (c) Microsoft Corporation. Wszelkie prawa zastrzeżone<br/><br/>
          <div className='console__text--green line1'>C: \Users\Kuba></div>
          <div className='console__text--normal line2'>cd portfolio</div> <br/>
          <div className='console__text--green line3'>C: \Users\Kuba\portfolio></div> 
          <div className='console__text--normal line4'>echo Witam ^</div> <br/>

          <span></span><div className='console__text--normal line5'>Jestem studentem na kierunku informatyka stosowana.^</div>  <br/>
          <span></span><div className='console__text--normal line6'> Interesuje się tworzeniem stron internetowych ^</div> <br/>
          <span></span><div className='console__text--normal line7'>oraz wszystkim co jest z tym związane. {'>>'} cv.txt</div> <br/>
          <span></span><div className='console__text--normal line8'>exit</div> <br/>
        </div>
        <div className='console__skip-btn'>Pomiń</div>
    </div>
  );
}

export default Console;