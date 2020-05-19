import React from 'react';

function Search(props) {
    return (
        <div>
          <h1 className= 'text-center mb-3'> Employee Directory </h1>
          <form className="search">
            <div className="form-group">
            <input
            onChange={props.handleInputChange}
            name="employee"
            type="text"
            className="form-control w-25 mx-auto"
            placeholder="Search Here"
            />
         </div>
         </form>
     </div>
    )
}

export default Search