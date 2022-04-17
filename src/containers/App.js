import React from "react";
import CardList from "../components/CardList";
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                this.setState({robots: users})
            })
            .catch(err => console.log(err))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(robots.length === 0) {
            return <h1>Loading..</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className= "f1">AvaFriends</h1>
                    <p>Developed by Yushau | April, 2022</p>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;