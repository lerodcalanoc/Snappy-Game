import React, { Component } from 'react';
import './App.css';
import avengers from './marvel.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import MarvelCard from './components/MarvelCard'

class App extends Component {
    state = {
        message: "Click a gif to begin!",
        topScore: 0,
        curScore: 0,
        avengers: avengers,
        unselectedAvengers: avengers
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectAvenger = character => {
        const findAvenger = this.state.unselectedAvengers.find(item => item.character === character);

        if(findAvenger === undefined) {
            // failure to select a new avenger
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                avengers: avengers,
                unselectedAvengers: avengers
            });
        }
        else {
            // success to select a new avenger
            const newAvengers = this.state.unselectedAvengers.filter(item => item.character !== character);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                avengers: avengers,
                unselectedAvengers: newAvengers
            });
        }

        this.shuffleArray(avengers);
    };

    render() {
   
        return (
            <Wrapper >
           
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                
                {
                    this.state.avengers.map(avenger => (
                        <MarvelCard
                            character={avenger.character}
                            image={avenger.image}
                            selectAvenger={this.selectAvenger} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper >
            
        );
    }
}

export default App;
