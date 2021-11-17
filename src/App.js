import React from "react";
import './App.css'
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";

// BucketList 컴포넌트를 import 해옵니다. import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Home from "./Home";
import Day from "./Day";

function App() {

    const [list] = React.useState([
        "Mon",
        "Tue",
        "Wed",
        "Thur",
        "Fri",
        "Sat",
        "Sun"
    ]);


    return (
        <div className="App">
            
                <Container>
                   
                    <Switch>
                      <Route path="/" exact render={(props) => (<Home list={list}/>)}/>
                      <Route path="/day/:no" component={Day}/>
                      <Route><NotFound/></Route>
                    </Switch>
                </Container>
            

        </div>
    );
}

const Container = styled.div `
  max-width: 320px;
  min-height: 50vh;
  background-color: #fff;
  padding: 16px;
  margin:0 auto;
  
  border-radius: 10px;
  border: 3px solid #b0b0b0;
`;



export default App;