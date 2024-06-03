import axios from "axios";
import { serverString } from "../config";

export const instanceWithoutToken = axios.create({
  baseURL: serverString,
});

export const instance = axios.create({
  baseURL: serverString,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});
