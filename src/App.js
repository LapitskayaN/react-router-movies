import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar"
import Home from "./components/home"
import MovieList from "./components/movie-list"
import ClickedMovie from "./components/clicked-movie"


// https://github.com/Gabriellji/react-routes-workshop


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello Wilders!</p>
        <Navbar />
        <Switch> 
          <Route exact path="/" render={(props)=> <Home {...props}/>} />
          <Route exact path="/list" render={(props)=> <MovieList {...props}/>} />
          {/* <Route exact path="/list/:id" render={(props)=> <Movie {...props}/>} /> */}          
          <Route exact path="/movie" render={(props)=> <ClickedMovie {...props}/>} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
