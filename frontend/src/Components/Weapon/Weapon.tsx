import React, { SyntheticEvent } from "react";
import { WeaponSearch } from "../../items";
import AddProfile from "../Profile/AddProfile/AddProfile";

interface Props {
  id: string;
  searchResult: WeaponSearch;
  onProfileCreate: (e: SyntheticEvent) => void;
}

const Weapon = ({searchResult, onProfileCreate}: Props) => {
  console.log("Weapon Data:", searchResult);
  console.log("Attack Data:", searchResult.attack[0].amount);
  return (
    <div className="weaponList">
      <div className="weapon">
      <img
        src={searchResult.image}
        alt="weapon image"
      />
      <div className="details">
        <h2>
          {searchResult.name} 
        </h2>
      </div>
      <p className="info">
        {searchResult.description}
      </p>
      <AddProfile onProfileCreate={onProfileCreate} id={searchResult.id}></AddProfile>
    </div>
    </div>
  );
};

export default Weapon;
