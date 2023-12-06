import BackBtntyle from "../style/backBtn.style.module.css";
import { TiArrowBack } from "react-icons/ti";
import { NavLink } from "react-router-dom";

export const BackBtn = () => {
  return (
    <NavLink to="/" className={BackBtntyle.continer}>
      <TiArrowBack className={BackBtntyle.backIcon} />
    </NavLink>
  );
};
