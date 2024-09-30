import React from 'react'
import { useGlobalContext } from './Context'

function Search() {
    const {query,searchPost}=useGlobalContext();
    return (
        <>
          <div className='search-div'>
                <form>
                    <div>
                        <input type="text"  placeholder="search here" value={query} onChange={(e)=>searchPost(e.target.value)}/>{/* call searchPost function that are declare in context file */}  
                    </div>
                </form> 
            </div> 
        </>
    )
}

export default Search
