import React from 'react';
import SearchBar from '../components/searchBar';
import DisplayCanvas from '../components/displayCanvas';

class App extends React.Component{

    render(){

        return(
            <div >
                <SearchBar/>
                <DisplayCanvas/>
            </div>
        )
    }
}

export default App;