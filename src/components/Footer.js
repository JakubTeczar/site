import phone from "../img/telephone.png";
import pin from "../img/location.png";
import document from "../img/document.png";
import githubIcon from "../img/blackGithub.png";

function Footer(){
    return (
        <footer >
            <div className="footer__box">
                <div className="footer__quote">
                    Bardzo ważna jest dla mnie możliwość rozwoju <div className="br"></div>
                    i zdobywania nowych umiejętności.
                </div>
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
                        <a href="http://jakubteczar.j.pl/CV.pdf" className="footer__bottom-panel--git" target="_blank" rel="noreferrer">
                            <img className="footer__bottom-panel--icon" alt="pin" src={document}/>
                            <div className="footer__bottom-panel--text">CV</div>
                        </a>
                    </li>
                </div>
            </div>
            <div className="copy-rights">Ⓒ2023 JAKUB TĘCZAR</div>
        </footer>
    );
}

export default Footer;