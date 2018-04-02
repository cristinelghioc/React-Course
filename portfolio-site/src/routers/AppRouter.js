import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage'
import Portfolio from '../components/Portfolio'
import IndividualPortfolio from '../components/IndividualPortfolio'
import Contact from '../components/Contact'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Homepage} exact={true}/>
                <Route path="/portfolio" component={Portfolio} exact={true} />
                <Route path="/portfolio/:id" component={IndividualPortfolio} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;