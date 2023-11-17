import React from 'react';
import LoggedIn from './LoggedIn';
import Error from './Error';

const components = {
    loggedIn : LoggedIn,
    error: Error
    
  }
  function LoginRender(props){
    const SelectUser = components[props.validation];
    
  
    return (
    <SelectUser />
    )
  };
  
  export default LoginRender;