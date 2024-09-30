/*to use usecontext hook yoy need to 3 step*/
//1.create a context
//2.provide a context
//3.deliver to customer ,it is a length process so that we use useContext() hook

import React, { useEffect, useContext, useReducer,createContext } from "react";
import reducer from "./Reducer";

//define api key
const api = "https://dummyjson.com/products/search?";

const initialstate = {
  total: 0,
  limit: 10,
  page:1,
  query: " ",
  products:[],
  categories: [],
};

//1.create a context
const AppContext =createContext();
//provide a context
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

   /*fetch api in a console */
    const fetchApiData = async (url) => {
    try{
      const data = await fetch(url).then((res) => res.json());
      console.log(data);

      const allCategories = data.products.map((product) => product.category);
      const distinctCategories = [...new Set(allCategories)];

      //pass data in reducer function,it trigger the action method
      dispatch({
        type:'GET_STORIES',
      
        //extra information share
        payload:{
          products:data.products, 
          total:data.total,
          categories: distinctCategories,
        },
      })
    }catch(er){
      console.log(er);
    }
  }
  //search function declare
  const searchPost=(SearchVal)=>{
    dispatch({
      type:"search",
      payload:SearchVal,
    })
  }

  //pagination
  const getNext=()=>{
    dispatch({
      type:"next"
    })
  }

  const getPrev=()=>{
    dispatch({
      type:"prev"
    })
  }
  

  useEffect(() => {
    fetchApiData(`${api}q=${state.query}&limit=${state.limit}&skip=${state.page}`);
  },[state.query,state.page]);


  return (
    <AppContext.Provider value={{...state,searchPost,getNext,getPrev}}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext=()=>{
  //create useContext() hook
  return useContext(AppContext)
}
export { AppContext, AppProvider,useGlobalContext };
