
function OtherProjects(){
    return(
        <div className="other-projects">
            <div className="other-projects__header">Pierwsze projekty</div>
            {/* <div className="other-projects__description">Podczas tworz</div> */}
            <div className="other-projects__box">
                <div className="other-projects__box--element">
                    <div className="element__title">Gra Not</div>
                    <div className="element__description">W grze musisz podejmować szybkie decyzje, ponieważ czas jest kluczowy. Twoim zadaniem jest zdobycie jak największej liczby punktów.</div>
                    <a href="http://jakubteczar.j.pl/old-projcts/not/"  target='blanck'><button className="element__button">Sprawdź</button></a>
                </div>
                <div className="other-projects__box--element">
                    <div className="element__title">Gra pamięciowa</div>
                    <div className="element__description">Na początku należy zapamiętać ułożenie czarnych pól, a następnie po ich zakryciu odnaleźć i zaznaczyć je na podstawie pamięci</div>
                    <a href="http://jakubteczar.j.pl/old-projcts/game/"  target='blanck'><button className="element__button">Sprawdź</button></a>
                </div>
                <div className="other-projects__box--element">
                    <div className="element__title">Flex-box</div>
                    <div className="element__description">Strona pokazuje w jaki sposób działa flex-box , tutaj możesz przetestować jego działanie i nauczyć się jego obsługi</div>
                    <a href="http://jakubteczar.j.pl/old-projcts/flex/"  target='blanck'><button className="element__button">Sprawdź</button></a>
                </div>
            </div>
        </div>
    );
}
export default OtherProjects;