import React from 'react'
import "./Searchbar.css"

const Searchbar = (props) => {
    return (
        <div className="search-wrapper">
            <form className="search">
      
                <input type="text" 
                name="focus" 
                required className="search-box" 
                placeholder=" search post" 
                onChange={props.onsearchValueChange} 
                value={props.searchValue} />

                <button onClick={props.handleRemove} className="close-icon" type="reset"></button>
            
           </form>
    </div>
        
    
    )
}

export default Searchbar