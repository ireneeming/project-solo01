import React , {useState}from 'react';
import {useHistory} from 'react-router-dom';
import styled from "styled-components";
import './App.css'

const Day = ({match}) => {

    const history = useHistory();
    const my_list = match.params.no + 'day';
    const [clicked, setClicked] = useState([false,false,false,false,false]);
    const handleStarClick = (e, index)=>{
        e.preventDefault();
        let clickStates = [...clicked];
        for(let i = 0 ; i< 5 ; i++){
            if (i<=index) clickStates[i] = true;
            else clickStates[i] = false;
        }
        setClicked(clickStates);
    };

    

    return (

        <div>
            <Title>How was your<br/><Today>{my_list}</Today>?</Title>
            <Line/>

            <DateList>
               
                <div style={{width: '70%', display: 'flex', justifyContent: 'space-around'}}>
                
                    <Circle
                        onClick={(e) => handleStarClick(e, 0)}
                        className={clicked[0] ? 'Clickedcircle' : null}
                    />
                    <Circle onClick = {(e) => handleStarClick (e,1)}
                        className = {clicked[1] ? 'Clickedcircle' : null}
                    />
                    <Circle onClick = {(e) => handleStarClick (e,2)}
                        className = {clicked[2] ? 'Clickedcircle' : null}
                    />
                    <Circle onClick = {(e) => handleStarClick (e,3)}
                        className = {clicked[3] ? 'Clickedcircle' : null}
                    />
                    <Circle onClick = {(e) => handleStarClick (e,4)}
                        className = {clicked[4] ? 'Clickedcircle' : null}
                    />
                    
                    
                </div>

            </DateList>

            <BtnBack onClick={() => history.goBack()}>평점 남기기</BtnBack>
        </div>
    );
}

//참고: https://ichi.pro/ko/css-mich-reactleul-sayonghayeo-byeolpyo-pyeongjeom-eul-mandeuneun-bangbeob-101140130179867

const Title = styled.h1 `
  color: #420a0a;
  text-align: center;
  
`;

const Line = styled.hr `
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const Today = styled.span `
text-decoration:underline;
`;
const DateList = styled.div `
  display:flex;
  justify-content: center;
  margin-top:90px;
  align-items: center;
  padding: 10px 15px;
  border:3px solid #f8d3d3;
  border-radius:8px;
`;

const Circle = styled.div `
width:28px; 
height:28px; 
border-radius:50%;
background-color:#bbb;
`;

const BtnBack = styled.button`
color:#fff;
border:none;
background:#906f6f;
padding:12px 20px; 
border-radius:10px;
margin-top:20px; 
`;
export default Day;