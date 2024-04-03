import VideoBG from "../../components/VideoBG/VideoBG";
import ClansSunaChoice from "../../components/ClansSunaChoice/ClansSunaChoice";

function AccueilPage() {
  return (
    <div className="accueilpage">
      <VideoBG />
      <div className="accueilpage-content">
        <ClansSunaChoice />
      </div>
    </div>
  );
}

export default AccueilPage;