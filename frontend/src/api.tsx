import axios from "axios";
import {ItemSearch, WeaponSearch} from "./items";

interface SearchResponse {
  data: WeaponSearch[] | string;
}

export const searchWeapons = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://eldenring.fanapis.com/api/weapons?name=${query}`
    );
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occured.";
    }
  }
};
