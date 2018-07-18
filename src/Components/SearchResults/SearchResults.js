import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackList from '././TrackList/TrackList.js';
import './SearchResults.css';

export class SearchResults extends React.Component{
  render(){
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={this.props.SearchResults} onAdd={this.props.onAdd} isRemoval={false}/>
    </div>
  }
}
