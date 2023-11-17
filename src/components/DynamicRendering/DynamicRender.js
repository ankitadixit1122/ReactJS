import React from 'react';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import welcomePage from './welcomePage';

const components = {
  loggedIn : HomePage,
  invalidUser: ErrorPage,
  welcomePage: welcomePage
}
function DynamicRender(props){
  const SelectUser = components[props.validation];
  

  return (
  <SelectUser />
  )
};

export default DynamicRender;