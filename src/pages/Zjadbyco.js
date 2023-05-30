import React, { useState, useEffect, Suspense, useRef} from "react";
import helloImg from "../img/zjadbyco/hello.PNG";

function Zjadbyco() {
    const [isLoading, setIsLoading] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState(helloImg);
    const [fridgeImg, setFridgeImg] = useState("");
    const [calednarImg, setCalednarImg] = useState("");
    const [shoppingImg, setShoppingImg] = useState("");
    const [settingsImg, setSettingsImg] = useState("");
    const [configImg, setConfigImg] = useState("");
    // const [sett, setStatImg] = useState("");

    useEffect(() => {
        // Load background image
        const img = new Image();
        img.src = backgroundImage;
        img.onload = () => setIsLoading(false);
        img.onerror = () => setIsLoading(false);

        // Lazy load other images
        import("../img/zjadbyco/calendar.PNG").then((module) => {
            setCalednarImg(module.default);
        });
        import("../img/zjadbyco/fridge.PNG").then((module) => {
            setFridgeImg(module.default);
        });
        import("../img/zjadbyco/shopping.PNG").then((module) => {
            setShoppingImg(module.default);
        });
        import("../img/zjadbyco/settings.PNG").then((module) => {
            setSettingsImg(module.default);
        });
        import("../img/zjadbyco/configuration.PNG").then((module) => {
            setConfigImg(module.default);
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
    const fridgeRef = useRef();
    const settingsRef = useRef();
    const shoppingRef = useRef();
    const pointer = useRef();
    const activeElement =(el,imgSource) =>{
    
        if (imgSource !== ""){
            list.current.querySelectorAll(".project-side__list").forEach(element => {
                element.classList.remove("active_list");
            });
            if(el !== undefined){
                el.classList.add("active_list");
            }
            pointer.current.style.display = "none";
            setBackgroundImage(imgSource);
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
            <img src={shoppingImg} alt="" style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={calednarImg} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={settingsImg} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={fridgeImg} alt=""  style={{ display: "none" }} />
        </Suspense>
        <Suspense >
            <img src={configImg} alt=""  style={{ display: "none" }} />
        </Suspense>

        <div className="project-side zjadbyco-side">
            <div className="project-side__title">Zjadbyco</div>
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
                    <b>Zamysł korzystania z aplikacji</b>
                    Na początku użytkownik <h5 onClick={()=>activeElement(undefined,configImg)}>konfiguruje konto</h5> wpisując swoje zapotrzebowanie kalorczyne oraz wybierając pulę produktów i dań z których będzie korzystał podczas użytkania  aplikacji.
                    <span>Dalej korzysta ze strony która składa się z 4 części: </span>
                    <div className="project-side__description--list" ref={list}>
                        <div className="project-side__list" ref={calendarRef} onClick={()=>activeElement(calendarRef.current,calednarImg)}>
                            <div className="project-side__list--title">-Kalendarza</div>
                                <div className="project-side__list--text">
                                    w którym można planować co będzie się jadało przez najbliższe dni.
                                </div>
                        </div>
                        <div className="project-side__list" ref={shoppingRef} onClick={()=>activeElement(shoppingRef.current,shoppingImg)}>
                            <div className="project-side__list--title">-Zakupów</div>
                                <div className="project-side__list--text">
                                służących do generowania listy produktów które są ci potrzebne do zaplanowanych posiłków  (w kalendarzu) uwzględniając już posiadane w lodówce.
                                </div>
                        </div>
                        <div className="project-side__list" ref={fridgeRef} onClick={()=>activeElement(fridgeRef.current,fridgeImg)}>
                            <div className="project-side__list--title">-Lodówki</div>
                                <div className="project-side__list--text">
                                do której dodasz wszystkie dostępne produkty , które sam posiadasz oraz w łatwy sposób odfiltrujesz co ma najkrótszą datę ważności.
                                </div>
                        </div>
                        <div className="project-side__list" ref={settingsRef} onClick={()=>activeElement(settingsRef.current,settingsImg)}>
                            <div className="project-side__list--title">-Ustawień</div>
                                <div className="project-side__list--text">
                                umożliwiających edycję puli dostępnych dań i produktów oraz dodawanie własnych.
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}
export default Zjadbyco;