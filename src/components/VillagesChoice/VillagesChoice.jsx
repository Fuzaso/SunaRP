import { NavLink } from "react-router-dom";

import SunaLogo from "../../assets/images/sunalogo.jpg";
import KonohaLogo from "../../assets/images/konohalogo.jpg";
import AmeLogo from "../../assets/images/amelogo.jpg";

function VillagesChoice() {
  return (
    <div className="villageschoice">
      <div className="villageschoice-content">
        <NavLink to="/sunapage" className="color-villageschoice" style={{ textDecoration: 'none' }}>
            <img src={SunaLogo} alt="Suna logo" />
            <span>SUNA</span>
        </NavLink>
        <div className="color-villageschoice">
            <img src={KonohaLogo} alt="Konoha logo" />
            <span>KONOHA</span>
        </div>
        <div className="color-villageschoice">
            <img src={AmeLogo} alt="Ame logo" />
            <span>AME</span>
        </div>
      </div>
    </div>
  );
}

export default VillagesChoice;