import React from 'react'

function reducer(state,action) {
    switch(action.type){
        
        case "GET_STORIES":
            return{
                ...state, //return previous state ... is a spread operator
                products:action.payload.products,
                total:action.payload.total,
                categories: action.payload.categories,

            };
            case "SET_CATEGORY":
            return {
                ...state,
                selectedCategory: action.payload,
                page: 0,  // Reset page to 0 when changing category
      };
        case "search":
            return{
                ...state,
                query:action.payload,
            };
        case "next":
            let nextNum=state.total;
            if(state.page>=nextNum-1){
                state.page=nextNum-1;
            }
            return{
                ...state,
                page:state.page+1,
            }
            case "prev":
            let num=state.page;
            if(num<=1){
                state.page=2;
            }
            return{
                ...state,
                page:state.page-1,
            }
    }

    return state;
    return (
        <div>

        </div>
    )
}

export default reducer
