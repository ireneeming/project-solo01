import React from 'react';
import {useHistory} from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    return (
    <>
        <h3> Can not found the page.</h3>
        <button onClick ={()=> history.goBack()}>Please go back go Main page</button> 
    </>
    );
}

export default NotFound;