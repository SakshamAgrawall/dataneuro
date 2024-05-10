export const BASE_URL =  "https://dataneuro-ula1.onrender.com/api/v1/";
export const GETDATA =()=>BASE_URL+'data';
export const GET_SINGLE_DATA =(id)=> `${BASE_URL}data?id=${id}`;
export const ADD_DATA =()=> BASE_URL+'data/add';
export const UPDATE_DATA = (id)=> `${BASE_URL}data/update?id=${id}`;
export const GET_COUNT =()=> BASE_URL+'data/count';