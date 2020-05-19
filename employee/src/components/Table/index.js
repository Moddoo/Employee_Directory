import React from 'react';
import './style.css'

function Table(props) {
    
    return (
        <table class="table table-hover   text-center table-striped ">
  <thead className= 'bg-dark text-white'>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">First
       <i className="fas fa-arrow-up ml-2" onClick= {() => props.handleSort('first','asc')}></i>
       <i className="fas fa-arrow-down ml-1" onClick= {() => props.handleSort('first','desc')}></i>
      </th>
      <th scope="col">Last
       <i className="fas fa-arrow-up ml-2" onClick= {() => props.handleSort('last','asc')}></i>
       <i className="fas fa-arrow-down ml-1" onClick= {() => props.handleSort('last','desc')}></i>
      </th>
      <th scope="col">Email
       <i className="fas fa-arrow-up ml-2" onClick= {() => props.handleSort('email','asc')}></i>
       <i className="fas fa-arrow-down ml-1" onClick= {() => props.handleSort('email','desc')}></i>
      </th>
      <th scope="col">Phone
       <i className="fas fa-arrow-up ml-2" onClick= {() => props.handleSort('cell','asc')}></i>
       <i className="fas fa-arrow-down ml-1" onClick= {() => props.handleSort('cell','desc')}></i>
      </th>
      <th scope="col">Age
       <i className="fas fa-arrow-up ml-2" onClick= {() => props.handleSort('age','asc')}></i>
       <i className="fas fa-arrow-down ml-1" onClick= {() => props.handleSort('age','desc')}></i>
      </th>
    </tr>
  </thead>
  <tbody>
      {
        props.data ? 
        props.data.map(el => {
         return(
          <tr>
            <td><img src= {el.picture.thumbnail} /></td>
            <td className='align-middle'>{el.name.first} </td>
            <td className='align-middle'>{el.name.last}</td>
            <td className='align-middle'>{el.email} </td>
            <td className='align-middle'>{el.cell}</td>
            <td className='align-middle'>{el.dob.age}</td>
          </tr>
         ) 
        })
        : null
      }
  </tbody>
</table>
    )
}

export default Table;