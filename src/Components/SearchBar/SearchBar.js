import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
  search(){
    this.props.onSearch(this.state.term);
  }
  handleTermChange(e) {
       this.setState({ term: e.target.value })
   }
  render(){
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange}/>
      <a>SEARCH</a>
    </div>
  }
};
