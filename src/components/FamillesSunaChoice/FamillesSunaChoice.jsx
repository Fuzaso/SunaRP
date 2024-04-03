import { NavLink } from "react-router-dom";

import Urahara from "../../assets/images/uraharalogo.png";
import Bari from "../../assets/images/barilogo.png";

function FamillesSunaChoice() {
  return (
    <div className="famillessunachoice">
      <div className="famillessunachoice-content">
        <NavLink to="/uraharapage" className="color-famillessunachoice" style={{ textDecoration: 'none' }}>
            <img src={Urahara} alt="Suna logo" />
            <span>URAHARA</span>
        </NavLink>
        <div className="color-famillessunachoice">
            <img src={Bari} alt="Konoha logo" />
            <span>BARI</span>
        </div>
        <div className="color-famillessunachoice">
            <span></span>
        </div>
      </div>
    </div>
  );
}

export default FamillesSunaChoice;