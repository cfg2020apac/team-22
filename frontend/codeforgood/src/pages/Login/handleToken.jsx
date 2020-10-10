import React, {useState} from "react";

export const setToken = token => {
    localStorage.setItem('ClientToken',token)

}
export const removeToken = () => {
    localStorage.removeItem('ClientToken')
}
export const getToken = props => {
//    const {clientToken} =  React.useContext(DashboardContext);
  return localStorage.getItem('ClientToken')
}

export const config ={
  headers:{ Authorization: `Bearer ${getToken()}`}
}