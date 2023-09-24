import React from 'react'
import styled from "styled-components"


function Footer() {
    const Cont = styled.div`
      padding: 58px 600px 58px 0px;
      border: 2px solid black ;
      border-top: 0; 
      margin-left: 80px;

    `
  return (
    <div>
     <Cont>
      <b>THIS IS THE FOOTER CONTENT WHICH IS ALIGNED <br/>LEFT</b>
    </Cont> 
    </div>
  )
}

export default Footer