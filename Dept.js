import React from 'react';
import data from './data.json'
import Item from './Item'
class Dept extends React.Component {
  render() {
    let depts  = [];
    depts = data.map(function(dep,i){
      return ( 
              <Item key={i} name={dep.name} count={dep.count} />
             )
    })
    return( 
      <div>  
        {depts}
      </div> 
    )
  }
}

export default Dept

