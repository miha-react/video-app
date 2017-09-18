import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    searchQuery(term){

    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render(){
        return(<div className="search-bar">
            <input
                value={this.state.term}
                onChange={(e)=>this.onInputChange(e.target.value)}
                type="text"/>

            </div>
            )

    }
}