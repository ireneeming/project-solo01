// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import {useHistory} from "react-router-dom";

const Home = (props) => {
    let history = useHistory();

    const my_lists = props.list;
    
    //function randomNum(min,max){
    //  
    //  let randNum = Math.floor(Math.random()*(max-min+1)) + min;
    //  return randNum;
    //}
    //let RandNum = randomNum(1,5);

    //const circles = [false, false, false, false, false]


    
    

    


    return (
        <ListStyle>
          <Title>How were your days?</Title>
          <Line/>
            {
                my_lists.map((list, index) => {
                    return (
                      <>
                        <DateList>
                            <p style={{ width:'40px',color:'#404040' }}>{list}</p>
                            <div style={{width:'70%',display:'flex',justifyContent:'space-around'}}>
                            {
                             Math.floor(Math.random()*6)
                            }
                            
                              <Circle></Circle>
                              <Circle></Circle>
                              <Circle></Circle>
                              <Circle></Circle>
                              <Circle></Circle>
                            </div>
                            <BtnGo className="list_item" key={index}  onClick={() => { history.push(`/day/${list}`);  }}>    
                            <i className="fas fa-chevron-right"></i>
                            </BtnGo>
                           
                            
                        </DateList></>
                    );
                })
            }

           
        </ListStyle>
    );
};
const Title = styled.h1 `
  color: #420a0a;
  text-align: center;
  
`;

const Line = styled.hr `
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const ListStyle = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const DateList = styled.div `
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin:4px;
  margin-bottom: 8px;
  font-weight:bold;
  background-color: #f8d3d3;
  text-align:left;
  border-radius:8px;
`;

const Circle = styled.div `
width:28px; 
height:28px; 
border-radius:50%;
background-color:#f1a7a7;
`;

const BtnGo = styled.div `
display:inline-block;
cursor:pointer;
`;

export default Home;