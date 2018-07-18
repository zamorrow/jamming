import React from 'react';
import ReactDOM from 'react-dom';
import './PlayList.css';
import '././TrackList/TrackList.js';

export class PlayList extends React.Component{
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event){
		this.props.onNameChange(event.target.mvalue);
  }
  render(){
    <div className="Playlist">
      <input placeholder={this.props.playlistName}  mvalue={this.props.playlistName} onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
      <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
  }
}
