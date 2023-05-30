import phone from "../img/telephone.png";
import pin from "../img/location.png";
import githubIcon from "../img/blackGithub.png";

function Footer(){
    return (
        <footer >
            <div className="footer__box">
                <div className="footer__quote">
                    Zawsze interesowało mnie tworzenie kreatywnych i ciekawych rzeczy <div className="br"></div>
                    które moją sens </div>
                <div className="footer__bottom-panel">
                    <li className="footer__bottom-panel--phone">
                        <img className="footer__bottom-panel--icon"  alt="telephone" src={phone} />
                        <div className="footer__bottom-panel--text">609 043 487</div>
                    </li>
                    <li>
                        <a href="https://github.com/JakubTeczar/" className="footer__bottom-panel--git" target="_blank" rel="noreferrer">
                            <img className="footer__bottom-panel--icon"  alt="githubIcon" src={githubIcon}/>
                            <div className="footer__bottom-panel--text">JakubTeczar</div>
                        </a>
                    </li>
                    <li>
                        <img className="footer__bottom-panel--icon" alt="pin" src={pin}/>
                        <div className="footer__bottom-panel--text">Kraków</div>
                    </li>
                </div>
            </div>
            <div className="copy-rights">Ⓒ2023 JAKUB TĘCZAR</div>
        </footer>
    );
}

export default Footer;