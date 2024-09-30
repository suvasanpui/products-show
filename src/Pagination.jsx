import React from 'react'
import { useGlobalContext } from './Context'


function Pagination() {
    const {page,total,getNext,getPrev}=useGlobalContext();
    return (
        <>
            <div className="pagination-btn">
                <button onClick={()=>getPrev()}> PREV </button>
                <p>{page} of {total}</p>
                <button onClick={()=>getNext()}>Next</button>
            </div>
        </>
    )
}

export default Pagination
