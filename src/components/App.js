import React from 'react';
import { 
  BrowserRouter,Switch, Route } from 'react-router-dom';
import * as Pages from '../pages';
import './App.scss';

const App =()=> {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path='/'
      render={() => <Pages.MainPage/>}
      />
    </Switch>
    <Switch>
      <Route path='/ci'
      render={()=><Pages.CIPage/>}
      />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
