import FamillesSunaChoice from "../../components/FamillesSunaChoice/FamillesSunaChoice";
import ClansSunaChoice from "../../components/ClansSunaChoice/ClansSunaChoice";

function SunaPage() {
  return (
    <div className="sunapage">
      <ClansSunaChoice />
      <FamillesSunaChoice />
    </div>
  );
}

export default SunaPage;