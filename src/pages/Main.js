import React ,{useState, useRef ,useEffect}from 'react';
import Home from '../components/Home';
import Prodix from '../components/Projects/Prodix'
import Zjadbyco from '../components/Projects/Zjadbyco'
import Calendar from '../components/Projects/Calendar'
import OtherProjects from '../components/OthersProject';
import Footer from '../components/Footer';
import Console from '../components/Console';
function Main (){
    const[rightPosition , setRightPosition] = useState(0);
    const[consoleClass , setConsoleClass] = useState("");
    const[textClass , setTextClass] = useState("");
    const[adjustLine , SetAdjustLine] = useState(0);
    const[diplayCircle , setDiplayCircle] = useState(false);
    let path = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    
    let stylePosition = {
      left : rightPosition+"px",
      strokeDasharray: 2000,
      strokeDashoffset: (2000-((scrollPosition  )/ windowHeight)*4000) < 0 ? 0 : (2000-((scrollPosition +100 )/ windowHeight)*4000),
    }
    let isMobileFirt = false;
    window.addEventListener("resize",()=>{
      if(window.innerWidth < 688){
        setConsoleClass("console");
        document.querySelector("body").style.overflow = "auto";
        backdropRef.current.classList.remove('backdrop-animation');
        backdropRef.current.classList.add('backdrop-skip-animation');
        backdropRef.current.style.diplay = "none";
      }
    });
    const backdropRef = useRef();
    document.addEventListener('DOMContentLoaded', function() {
      const distanceFromTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      console.log(distanceFromTop);
    });
    useEffect(() => {
    
      const handleScroll = () => setScrollPosition(window.pageYOffset);
      const handleResize = () => setWindowHeight(window.innerHeight);
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
 
      if(window.innerWidth > 688){
        isMobileFirt= true;
        backdropRef.current.classList.add('backdrop-animation');
        setConsoleClass("console console-animation");
        setTextClass("console__text console__text-animation");
        window.onbeforeunload = function () {
          window.scrollTo(0,0);
        };
        document.querySelector("body").style.overflow = "hidden";
        setTimeout(()=>{
          document.querySelector("body").style.overflow = "auto";
          SetAdjustLine(2);
        },18000)
        setTimeout(()=>{
          document.querySelector(".skip__btn").style.diplay = "none";
        },17000)

      }
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const skipAnimation=()=>{
      backdropRef.current.classList.remove('backdrop-animation');
      backdropRef.current.classList.add('backdrop-skip-animation');
      setConsoleClass("console");
      setTextClass("console__text");
      document.querySelector("body").style.overflow = "auto";
      setDiplayCircle(true)
    }
    const moveToProject = () =>{
      document.querySelector(".project").scrollIntoView({ behavior: 'smooth' });
    }

    return (
      <React.Fragment>
        <nav>
          <div className='nav__logo'>Jakub Tęczar</div>
          <button className='nav__contact' onClick={()=>{ document.querySelector("footer").scrollIntoView({ behavior: 'smooth' });}}>Kontakt</button>
        </nav>
        <div className='backdrop' ref={backdropRef}>
            <button className='skip__btn' onClick={()=>skipAnimation()}>Przejdź dalej</button>
        </div>
        <svg className='home__line' style={stylePosition} viewBox="0 0 616.737 1238.487" preserveAspectRatio='xMidYMax meet'>
          <path ref={path} id="Path_1" data-name="Path 1" d="M-671,1322.655s480.565-41.549,428.629,297.77-315.083,333.549-450.118,394.719-205.439,143.115-121.186,541.3" transform="translate(852.659 -1318.47)" fill="none" stroke="#f4b393" strokeWidth="5"/>
        </svg>
        
        <Home setPosition={setRightPosition} diplay={diplayCircle} adjust={adjustLine} moveToProjectF={()=>{moveToProject()}}></Home>
        <Console consoleClass={consoleClass} textClass={textClass}></Console>
          <div className='decoration'>
            <div className='decoration__text'>MOJE PROJEKTY</div>
            <div className='decoration__elements'>
              <li></li> <li></li> <li></li><li></li> <li></li> <li></li>
              <li></li> <li></li> <li></li><li></li> <li></li> <li></li>
            </div>
          </div>
        <Zjadbyco></Zjadbyco>
        <div className='decoration odd-decoration'>
          <div className='decoration__elements'>
                <li></li> <li></li> <li></li><li></li> <li></li> <li></li>
                <li></li> <li></li> <li></li><li></li> <li></li> <li></li>
          </div>
        </div>
        <Prodix odd={true}></Prodix>
        <div className='decoration'>
          <div className='decoration__elements'>
                <li></li> <li></li> <li></li><li></li> <li></li> <li></li>
                <li></li> <li></li> <li></li><li></li> <li></li> <li></li>
          </div>
        </div>
        <Calendar odd={false}></Calendar>
        <div className='decoration odd-decoration'>
          <div className='decoration__elements'>
                <li></li> <li></li> <li></li><li></li> <li></li> <li></li>
                <li></li> <li></li> <li></li><li></li> <li></li> <li></li>
          </div>
        </div>
        <OtherProjects></OtherProjects>
        <Footer></Footer>
      </React.Fragment>
    );
}
export default Main;