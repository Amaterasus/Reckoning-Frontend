import React, { Fragment } from 'react';
import './App.css';

import Authorised from "./components/authorised/Authorised"
import UnAuthorised from "./components/unauthorised/UnAuthorised"

function App() {
  return <Fragment>
        {null ? <Authorised /> : <UnAuthorised />}    
      </Fragment>
}

export default App;
