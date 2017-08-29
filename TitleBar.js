import React from 'react';
class TitleBar extends React.Component {
  render() {
    return( 
      <div>  
        <p style={title}>
          招聘部门
        </p>
        <p style={clean}>
          清空
        </p>
 
      </div> 
    )
  }
}
const title = {
  color: '#e3e3e3',
  float: 'left',
  width: '50%',
}
const clean = {
  cursor: 'pointer',
  fontSize: '14px',
  float: 'right',
  textAlign: 'right',
  width: '50%',
}

export default TitleBar

