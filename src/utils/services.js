import axios from "axios";
import { FORM_ENDPOINT, OTP_ENDPOINT, VERIFY_ENDPOINT } from "./routes";

export const BASE_URL = "https://projects.skymetweather.com/SikkaAPI"; //devlopment
// export const BASE_URL = "http://localhost:7000"; //production//


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
        return {res:response};
      } else {
        return response.data;
      }
  
    } catch (err) {
      console.log(err);
      if (err.response) throw err.response.data;
      else throw err.message;
    }
  }

  
export async function SENDOTP(data) {
  try {

    const response = await axios.post(OTP_ENDPOINT, data, {
      headers: {
        "Content-Type": " application/json",
        // Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return {res:response};
    } else {
      return response.data;
    }

  } catch (err) {
    console.log(err);
    if (err.response) throw err.response.data;
    else throw err.message;
  }
}

export async function VerifyOTP(data) {
  try {

    const response = await axios.post(VERIFY_ENDPOINT, data, {
      headers: {
        "Content-Type": " application/json",
        // Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return {res:response};
    } else {
      return response.data;
    }

  } catch (err) {
    console.log(err);
    if (err.response) throw err.response.data;
    else throw err.message;
  }
}