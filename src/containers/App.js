import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import logo from './logoWhite.png';
import './App.css';

class App extends Component { // a smart component (syntaxe class, contient state)
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
            return !robots.length ?
            <h1>Chargement en cours...</h1> :
            (
                <div className='tc'>
                    <header>
                        <h1 className='f1'>Recherche de robots</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </header>
                    <main>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </main>
                    <footer>
                        <a href="https://www.jbmerand.fr" title="portfolio de Jean-Baptiste Mérand">
                            <img id="logo" src={logo} alt="logo JBMérand"/>
                        </a>
                    {/* <small className="light-blue">Réalisé par <a className="link blue underline-hover hover-light-gray" href="https://www.jbmerand.fr" title="portfolio de Jean-Baptiste Mérand">JBMérand</a></small> */}
                    </footer>            
                </div>
            );
    }
}

export default App;