import React, { useState, useEffect, Suspense, useRef} from "react";
import homeImg from "../img/calendar/home.PNG";

function Calendar() {
    const [isLoading, setIsLoading] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState(homeImg);
    const [gameImg, setgameImg] = useState("");
    const [goalsImg, setGoalsImg] = useState("");
    const [calednarImg, setCalendarImg] = useState("");
    const [statImg, setStatImg] = useState("");

    useEffect(() => {
        // Load background image
        const img = new Image();
        img.src = backgroundImage;
        img.onload = () => setIsLoading(false);
        img.onerror = () => setIsLoading(false);

        // Lazy load other images
        import("../img/calendar/game.PNG").then((module) => {
            setgameImg(module.default);
        });
        import("../img/calendar/goals&Links.PNG").then((module) => {
            setGoalsImg(module.default);
        });
        import("../img/calendar/calendar.PNG").then((module) => {
            setCalendarImg(module.default);
        });
        import("../img/calendar/stat.PNG").then((module) => {
            setStatImg(module.default);
        });

        return () => {
        img.onload = null;
        img.onerror = null;
        };
    }, [backgroundImage]);


////////////////////////

    const homeRef = useRef();
    const list = useRef();
    const img = useRef();
    const calendarRef = useRef();
    const goalsImgRef = useRef();
    const action = useRef();
    const pointer = useRef();
    const activeElement =(el,imgSource) =>{
    
        if (imgSource !== ""){
            list.current.querySelectorAll(".project-side__list").forEach(element => {
                element.classList.remove("active_list");
            });
            el.classList.add("active_list");
            pointer.current.style.display = "none";
            setBackgroundImage(imgSource);
            console.log("udało sie");
        }else{
            console.log("odmowa");
        }
        
    }
    const setPointer = (width , height , x, y) =>{
        if(pointer.current !== undefined){
            pointer.current.style.display = "block";
            pointer.current.style.width = width;
            pointer.current.style.height = height;
            pointer.current.style.top = y;
            pointer.current.style.left = x;
        }
    }
    return(
        <>
        <Suspense >
            <img src={gameImg} alt="" style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={calednarImg} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={goalsImg} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={statImg} alt=""  style={{ display: "none" }} />
        </Suspense>

        <div className="project-side">
            <div className="project-side__title">Kalendarz</div>
                <div className="project-side__links">
                    <a  href="http://jakubteczar.j.pl/calendar/" target='blank' className="project-side__links--a">
                        <div className="project-side__links--icon"></div>
                        Strona projektu
                    </a>
                    <a href="https://github.com/JakubTeczar/calendar.git" target='blank' className="project-side__links--a">
                        <div className="project-side__links--icon git-icon"></div>
                        Pliki źródłowe
                    </a>
                </div>
                <i>//Przykładowe konto Login1234, Haslo1234</i>
                {/* <div className="project-side__about">Jest to mój starszy projekt , który, choć posiada kilka niedoskonałości, przyczynił się do mojego znaczącego 
                    rozwoju. */}
                {/* </div> */}

            <div className="project-side__box">
            {isLoading && <div className="project-side__loader--wrapper">
                <div className="project-side__loader--animation">
                    <div></div><div></div>
                </div>
            </div>}
            {!isLoading &&
            <div className="project-side__img"  style={{backgroundImage: `url(${backgroundImage})`}} ref={img}    onClick={()=>{if(window.innerWidth > 1200){img.current.classList.toggle("big-img") ;pointer.current.style.display = "none";}}}>
                <div className="project-side__img--pointer" ref={pointer}></div>
            </div>
            }
                <div className="project-side__description">
                    <div className="project-side__description--list" ref={list}>
                      
                        <div className="project-side__list" ref={homeRef} onClick={()=>activeElement(homeRef.current,homeImg)}>
                            <div className="project-side__list--title">Pulpit strony</div>
                                <div className="project-side__list--text">
                                    <div className="paragraph"><h4 onMouseEnter={()=>setPointer("96%","25%","3%" , "25%")}>-Plan lekcji</h4> tutaj wyświetlane są wszystkie zajęcia
                                    i przewy w podanym dniu a obecna lekcja jest zaznaczona markerem.
                                    </div>
                                    <div className="paragraph"><h4 onMouseEnter={()=>setPointer("96%","20%","3%","40%")} >-Szybkie informacje</h4> w tym miejscu dowiesz się
                                        za ile będzie kolejna lekcja lub kiedy kończy się przerwa.
                                    </div>
                            </div>
                        </div>
                        <div className="project-side__list" ref={calendarRef} onClick={()=>activeElement(calendarRef.current ,calednarImg)}>
                            <div className="project-side__list--title">Planer i statystki</div>
                                <div className="project-side__list--text">
                                    <div className="paragraph"><h4 onMouseEnter={()=> activeElement(calendarRef.current,calednarImg)}>-Kalendarz</h4> za jego pomocą możesz dodać zadania które chcesz wykonać w wybrane dni miesiące i zapisać je
                                        na serwerze.
                                    </div>
                                    <div className="paragraph"><h4 onMouseEnter={()=> activeElement(calendarRef.current,statImg)}>-Statystki</h4> tutaj sprawdzisz ile zadań i celów wykonałeś , masz wykonać albo które się przedawniły.
                                    </div>
                                </div>
                        </div>
                        <div className="project-side__list" ref={goalsImgRef} onClick={()=>activeElement(goalsImgRef.current,goalsImg)}>
                            <div className="project-side__list--title">Dodawanie celów oraz linków</div>
                                <div className="project-side__list--text">
                                    <div className="paragraph"><h4 onMouseEnter={()=> setPointer("48%","40%","51%","65%")}>-Tworzenie celów</h4> tutaj możesz je otworzyć oraz zaznaczyć czy został wykonane ( automatycznie
                                       obliczy się czas który ci pozostał )
                                    </div>
                                    <div className="paragraph"><h4 onMouseEnter={()=> setPointer("48%","40%","1%","65%")}>-Tworzenie linków</h4> w tym miejscu możesz zapisać najbardziej potrzebne linki z których korzystasz najczęściej.
                                    </div>
                                </div>
                        </div>
                         
                        <div className="project-side__list" ref={action} onClick={()=>activeElement(action.current,gameImg)}>
                            <div className="project-side__list--title">Gra matematyczna</div>
                                <div className="project-side__list--text">
                                    <div className="paragraph">
                                        Twoim zadaniem jest jak najszybsze rozwiązywanie zadań matematycznych , za każdą dobrą odpwiedź uzyskujemy dodatkowy czas .<br/><br/>
                                        Gra kończy się wtedy kiedy wykorzsytamy cały dostępny czas.
                                    </div>
                                </div>
                        </div> 
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}
export default Calendar;