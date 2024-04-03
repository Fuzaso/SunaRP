import { NavLink } from "react-router-dom";

import Kusamaru from "../../assets/images/kusamarulogo.png";
import Kugutsu from "../../assets/images/kugutsulogo.png";
import Satsu from "../../assets/images/satsulogo.png";

function ClansSunaChoice() {
  return (
    <div className="clanssunachoice">
      <div className="clanssunachoice-content">
        <NavLink to="/sunapage" className="color-clanssunachoice" style={{ textDecoration: 'none' }}>
            <img src={Kusamaru} alt="Suna logo" />
            <span>KUSAMARU</span>
        </NavLink>
        <div className="color-clanssunachoice">
            <img src={Kugutsu} alt="Konoha logo" />
            <span>KUGUTSU</span>
        </div>
        <div className="color-clanssunachoice">
            <img src={Satsu} alt="Konoha logo" />
            <span>SATSU</span>
        </div>
      </div>
    </div>
  );
}

export default ClansSunaChoice;