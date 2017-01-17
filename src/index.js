import React from 'react'; 
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar'; 

const API_KEY = 'AIzaSyAc-Ot3NFym0ie7wl9jC-qjNuwm37fi3Xc'; 

// Create a component. This should produce some HTML. 
const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page. (DOM)
ReactDOM.render(<App />, document.querySelector('.container')); 