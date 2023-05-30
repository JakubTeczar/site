import React, { useState, useEffect, Suspense, useRef} from "react";
import prodixImg from "../img/prodix.PNG";

function Prodix() {
    const [isLoading, setIsLoading] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState(prodixImg);
    const [creatingImg, setCreatingImg] = useState("");
    const [measurementsImg, setMeasurementsImg] = useState("");
    const [actionImg, setActionImg] = useState("");
    const [creatingSet, setCreatingSet] = useState("");
    const [creatingExercise, setCreatingExercise] = useState("");
    const [homeImg, setHomeImg] = useState("");

    useEffect(() => {
        // Load background image
        const img = new Image();
        img.src = backgroundImage;
        img.onload = () => setIsLoading(false);
        img.onerror = () => setIsLoading(false);

        // Lazy load other images
        import("../img/creatingProdix.PNG").then((module) => {
            setCreatingImg(module.default);
        });
        import("../img/actionProdix.PNG").then((module) => {
            setActionImg(module.default);
        });
        import("../img/measurements.PNG").then((module) => {
            setMeasurementsImg(module.default);
        });
        import("../img/creatingSet.PNG").then((module) => {
            setCreatingSet(module.default);
        });
        import("../img/creatingExercise.PNG").then((module) => {
            setCreatingExercise(module.default);
        });
        import("../img/homeProdix.PNG").then((module) => {
            setHomeImg(module.default);
        });

        return () => {
        img.onload = null;
        img.onerror = null;
        };
    }, [backgroundImage]);


////////////////////////

    const home = useRef();
    const list = useRef();
    const img = useRef();
    const measurements = useRef();
    const creating = useRef();
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
            <img src={creatingImg} alt="" style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={actionImg} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={measurementsImg} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={creatingSet} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={creatingExercise} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={homeImg} alt=""  style={{ display: "none" }} />
        </Suspense>

        <div className="project-side">
            <div className="project-side__title">Prodix</div>
            <div className="project-side__links">
                <a href="1" className="project-side__links--a">
                    <div className="project-side__links--icon"></div>
                    Strona projektu
                </a>
                <a href="1" className="project-side__links--a">
                    <div className="project-side__links--icon git-icon"></div>
                    Pliki źródłowe
                </a>
            </div>
            {/* <Link to="/home">dsa</Link> */}
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
                      
                        <div className="project-side__list" ref={home} onClick={()=>activeElement(home.current,homeImg)}>
                            <div className="project-side__list--title">Strona główna</div>
                                <div className="project-side__list--text">
                                    <div className="paragraph"><h4 onMouseEnter={()=>setPointer("47%","55%","48%" , "50%")}>-Ostatnia aktywność</h4> jest to historia uruchomionych
                                        planów treningowych.
                                    </div>
                                    <div className="paragraph"><h4 onMouseEnter={()=>setPointer("39%","52%","2%","50%")} >-Kalendarz</h4> na nim możemy zaznaczyć kiedy odbyliśmy trening aby 
                                        mieć łatwiejszy pogląd na ilość wykonywanych przez nas ćwiczeń.
                                    </div>
                            </div>
                        </div>
                        <div className="project-side__list" ref={measurements} onClick={()=>activeElement(measurements.current ,measurementsImg)}>
                            <div className="project-side__list--title">Monitorowanie postępów</div>
                                <div className="project-side__list--text">
                                    <div className="paragraph"><h4 onMouseEnter={()=>setPointer("51%","60%","48%","53%")}>-Wykres </h4> pokazujący postępy siłowe oraz , pomiary ciała względem czasu
                                    </div>
                                    <div className="paragraph"><h4 onMouseEnter={()=>setPointer("42%","62%","6%","53%")}>-Dzienniczek postępów</h4> tutaj możesz zapisać swoje aktualne pomary ciała oraz najelpsze wyniki siłowe
                                    tak aby sprawdzić w jakim tempie się rozwijasz.
                                    </div>
                                </div>
                        </div>
                        <div className="project-side__list" ref={creating} onClick={()=>activeElement(creating.current,creatingImg)}>
                            <div className="project-side__list--title">Tworzenie planów treningowych</div>
                                <div className="project-side__list--text">
                                    <div className="paragraph"><h4 onMouseEnter={()=> {img.current.style.backgroundImage = "url("+creatingImg+")";}}>-Panel edycyjny</h4> za pomocą którego zmienimy kolejność ćwiczeń (drag&drop) 
                                    oraz je zedytujemy.
                                    </div>
                                    <div className="paragraph"><h4 onMouseEnter={()=> {img.current.style.backgroundImage = "url("+creatingSet+")";}}>-Tworzenie serii</h4><h4 onMouseEnter={()=> {img.current.style.backgroundImage = "url("+creatingExercise+")";}}> i ćwiczeń</h4> w łatwy sposób możemy dodać nowe ćwiczenia oraz utworzyć z
                                     nich serie treningowe które wykorzystamy w naszym planie.
                                    </div>
                                </div>
                        </div>
                        
                        <div className="project-side__list" ref={action} onClick={()=>activeElement(action.current,actionImg)}>
                            <div className="project-side__list--title">Wyświetlanie planu treningowego</div>
                                <div className="project-side__list--text">
                                    <div className="paragraph"><h4 onMouseEnter={()=>setPointer("63%","66%","18%","53%")}>-Informacje treningowe</h4>  jakie ćwiczenie masz wykonywać oraz
                                     wszystkie szczegóły z nim związane a także nasępne ćwiczenie.
                                    </div>
                                    <div className="paragraph"><h4 onMouseEnter={()=>setPointer("64%","12%","18%","17%")}>-Pasek postępu</h4> informujący w jakim momęcię treningu jesteś.
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
export default Prodix;