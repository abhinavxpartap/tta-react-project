import React from 'react'
import styled from "styled-components"


function Middle() {

    
    const Cont = styled.div`
       font-size: 15px;
       text-align: center;
       margin-top: 80px;
       margin-left: 80px;
    `
    const Div = styled.div`
    padding: 143px 120px;
    border: 2px solid black ;
    border-top:0;    
        
    `
    
    const Divl = styled.div`
    padding: 122px 265px;
    border: 2px solid black ;
    border-top:0;
    border-left:0 ;   
    
    `

  return (
    <div style={{"display":'flex'}}>
   <Cont> 
    <Div>
      <b>THIS IS SOME CONTENT ALIGNED IN THE CENTER<br/>VERTICALLY AND HORIZONTALLY</b>
    </Div>
   </Cont>
    <Divl>
    </Divl>
  </div>
  )
}

export default Middle