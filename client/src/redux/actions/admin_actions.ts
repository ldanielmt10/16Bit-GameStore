
import axios from "axios";
import { EditProduct, } from "../../interfaces";

// import { EDIT_PRODUCT } from "../types";
import { Dispatch } from "redux";
import { EDIT_NAVBAR, CREATE_NAVBAR, USERS_INFO, GET_ORDERS, GET_SALES_DATA } from "../types"

interface Detail { 
    type: string;
}

interface Users { 
  type: string;
}


export const editProduct = (payload: EditProduct) => {
  return async function (dispatch: Dispatch<Detail>) {
    const userData = JSON.parse(localStorage.getItem("userData") as string);
    const token = userData?.data.token;
    const data = await axios.put("/videogames/OneGame", payload, {
      headers: { "x-access-token": token },
    });
    return data;
  };
};

export const deleteProduct = (id: number) => {
  const userData = JSON.parse(localStorage.getItem("userData") as string);
  const token = userData?.data.token;
  return async function (dispatch: Dispatch<Detail>) {
    const data = await axios.delete(`/videogames/OneGame/${id}`, {
      headers: { "x-access-token": token },
    });
    return data;
  };
};
export const deleteUser = (id:number | unknown) => {
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.delete(`/user/${id}`)
    return data;
  }
}
export const banUser = (id:number | unknown, status: boolean | string) => {
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.put(`/user/${id}/${status}`)
    return data;
  }
}
export const promoteUser = (id:number | unknown, admin: boolean | string) => {
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.put(`/user/${admin}/${id}`)
    return data;
  }
}

export const sendMail = (email: string) => {
  
  return async function (dispatch: Dispatch<Detail>){
    const data = await axios.post('/user/mail', { email });
    return data;
  }
}

export const getUsers = () => {
  return async function (dispatch: Dispatch<Users>){
    const {data} = await axios.get(`/user`)

    return dispatch({
      type: USERS_INFO,
      payload: data,
    });
  }
}

export const getOrders = () => {
  return async function (dispatch: Dispatch<Detail>){
    const {data} = await axios.get(`/order`)
    // console.log('action creator;' , data)
    return dispatch({
      type: GET_ORDERS,
      payload: data,
    });
  }
}

export const deleteNavbar = () => {
    return (dispatch: any) => {
      return dispatch({
        type: EDIT_NAVBAR,
        payload: false,
      });
    };
  };
export const createNavbar = () => {
    return (dispatch: any) => {
      return dispatch({
        type: CREATE_NAVBAR,
        payload: true,
      });
    };
  };

  export const getSalesData = () => {
    return async function (dispatch: Dispatch<Detail>){
      const {data} = await axios.get(`http://localhost:3001/orderproduct`)
      console.log('dataaa',data)
      return dispatch({
        type: GET_SALES_DATA,
        payload: data,
      });
    }
  }