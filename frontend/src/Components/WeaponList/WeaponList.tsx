import React, { SyntheticEvent } from "react";
import Weapon from "../Weapon/Weapon";
import {WeaponSearch} from "../../items";
import {v4 as uuidv4} from "uuid";

interface Props {
  searchResult: WeaponSearch[];
  onProfileCreate: (e: SyntheticEvent) => void;
}

const WeaponList = ({searchResult, onProfileCreate}: Props) => {
  return (
    <>
      <div className="weaponList">
        {searchResult.length > 0 && (
          searchResult.map((result) => {
            return (
              <Weapon id={result.id} key={uuidv4()} searchResult={result} onProfileCreate={onProfileCreate}/>
            );
          })
        )}
      </div>
    </>
  );
};

const weaponString =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ut. Nemo fugiat corrupti blanditiis rem aut eveniet inventore, dolorem praesentium, minima pariatur nobis, quisquam quasi commodi officia doloribus beatae. Reprehenderit.";

export default WeaponList;
