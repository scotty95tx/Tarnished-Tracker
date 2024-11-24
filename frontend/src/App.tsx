import React, {ChangeEvent, SyntheticEvent, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Weapon from "./Components/Weapon/Weapon";
import WeaponList from "./Components/WeaponList/WeaponList";
import Search from "./Components/Search/Search";
import {ItemSearch, WeaponSearch} from "./items";
import {searchWeapons} from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<WeaponSearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setSearch(e.target.value);
  };

  const onProfileCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchWeapons(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  return (
    <div>
      { <iframe src="https://mapgenie.io/elden-ring/maps/the-lands-between?embed=light"></iframe> }
      <h2 className="weaponSearch">Weapon Search</h2>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {serverError && <h1>{serverError}</h1>}
      <header className="App-header">
        <WeaponList searchResult={searchResult} onProfileCreate={onProfileCreate}/>
      </header>
    </div>
  );
}

export default App;
