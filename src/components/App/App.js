import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Rate from '../../components/Rate/Rate.js'
import Points from '../../components/Points/Points.js';
import Contacts from '../../components/Contacts/Contacts.js';
import About from '../../components/About/About.js';
import ErrorPage from '../../components/ErrorPage/ErrorPage.js';



class App extends React.Component {
    render() {
        return (
            <div>

                <Header/>

                <div className="container">
                    <main>
                        <Router>
                            <Switch>
                                <Route exact path='/' component={Rate} />
                                <Route exact path='/pointmap' component={Points} />
                                <Route exact path='/contacts' component={Contacts} />
                                <Route exact path='/about' component={About} />
                                <Route component={ErrorPage} />

                            </Switch>
                        </Router>
                    </main>
                </div>

                <div className="container" id="cookie_info">
                    <div className="site-content">
                        <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В
                            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона
                            вашего местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default App;
