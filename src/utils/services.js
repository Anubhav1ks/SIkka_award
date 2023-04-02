import axios from "axios";
import { FORM_ENDPOINT } from "./routes";

export const BASE_URL = "https://himashusirapi-production.up.railway.app"; //devlopment//


axios.defaults.baseURL = BASE_URL;


export async function SUBMITFORM(data) {
    try {
  
      const response = await axios.post(FORM_ENDPOINT, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: "Bearer " + token,
        },
      });
      if (response.status === 200) {
        return response;
      } else {
        return response.data;
      }
  
    } catch (err) {
      console.log(err);
      if (err.response) throw err.response.data;
      else throw err.message;
    }
  }