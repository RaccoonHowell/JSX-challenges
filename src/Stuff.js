import React from "react";
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Clicked from './Clicked';
import ToggleText from './ToggleText';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import Length from './Length';
import PasswordStrength from './PasswordStrength';
import TempConverter from './TempConverter';
import Footer from "./Footer";
import FourOhFour from "./FourOhFour";
import {
    BrowserRouter as Router,
    Route, Switch
  } from "react-router-dom";
  
const Stuff = () => (
    <Router>

        <Switch>

            <Route path='/header'>
                <Header>Hello, world!</Header>
            </Route>

            <Route path='/paragraph' component={ Paragraph } />

            <Route path="/square/:color" render={ ({ match }) => ( <Square color={ match.params.color } />
            ) } />

            <Route path='/people'>
                <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
            </Route>

            <Route path='/clicked' component={ Clicked } />

            <Route path='/toggleText'>
                <ToggleText initial="Hello" alternate="World" />
            </Route>

            <Route path='/counter'>
                <Counter initial={ 50 } max={ 100 } />
            </Route>

            <Route path='/stepCounter'>
                <StepCounter max={ 100 } step={ 5 } />
            </Route>

            <Route path='/catchMe'>
                <CatchMeIfYouCan jump={ 100 } />
            </Route>

            <Route path='/length' component={ Length } />

            <Route path='/passwordStrength' component={ PasswordStrength } />

            <Route path='/tempConverter' component={ TempConverter } />

            <FourOhFour />

        </Switch>

        <Footer />

    </Router>
);

export default Stuff;