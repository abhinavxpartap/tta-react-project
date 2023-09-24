import React from 'react'
import styled from "styled-components"


const Layout = () => {

    const Div = styled.div`
         display: flex;
         margin-left: 80px;
        
    `
     const Topleft = styled.div`
         position: fixed;
         margin-top: 20px;
         padding: 35px 100px;
         top: 0;
         left:5 ;
         border: 2px solid black ;

     `
     const Topright = styled.div`
     position: fixed;
     margin-top: 20px;
    //  margin-left: 1050px;
     top: 0;
     border: 2px solid black ;
     right:5 ;
     padding: 35px 35px 35px 1040px;

 `

    return (
    <div> 
    <Div>
     <Topleft>
        <b>LOREM IPSUM</b>
      </Topleft>
      <Topright>
        <b>LINK 1</b>
      </Topright>
    </Div>
   


</div>
  )
}

export default Layout