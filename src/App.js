import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const ImagesList = lazy(() => import('./Components/Images/List.js'));


class App extends React.PureComponent {


  render() {

    return (
      <>

        <Router>

          <Switch>
            <Suspense fallback="Loading...">
              <ImagesList />
            </Suspense>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
