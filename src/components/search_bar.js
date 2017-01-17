import React, { Component } from 'react'; 
// const Component = React.Component; 

// import React from 'react'; 

// class SearchBar extends React.Component{
// When to use the class based component vs function based component. 
class SearchBar extends Component {
    render() {
        // return <input onChange={this.onInputChange} />;
        // return <input onChange={(event) => console.log(event.target.value)} />;
        return <input onChange={event => console.log(event.target.value)} />;  
    }

    // onInputChange(event) {
    //     console.log(event.target.value); 
    // }
}; 

export default SearchBar; 