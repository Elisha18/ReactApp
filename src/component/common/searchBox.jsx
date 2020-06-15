import React from 'react';

const SearchBox = (props) => {
    return (  
        <input className="border"
                type="text"
                name="query"
                placeholder = "Search..."
                value={props.value}                
                onChange = {(e)=>props.onChange(e.currentTarget.value)}
            />
    );
}
 
export default SearchBox;