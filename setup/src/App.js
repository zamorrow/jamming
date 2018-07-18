import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './src/Components/PlayList/PlayList.js';
import SearchBar from './src/Components/SearchBar/SearchBar.js';
import SearchResults from './src/Components/SearchResults/SearchResults.js';
import Spotify from './src/util/Spotify.js'

class App extends Component {
  constructor(props){
    super();
    this.state= {
      SearchResults:[{
        'name': 'test name'
        'artist': 'test artist'
        'album': 'test album'
        'id': 'test id'
    }]
      playlistName: 'Play List Name',
		  playlistTracks: [{
				'name': 'Test Name 2',
				'artist': 'Test Artist 2',
				'album': 'Test Album 2',
				'id': 'Test ID 2'
      }]
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
  }
  addTrack(track) {
   let newPlaylistTracks = this.state.playlistTracks;
   if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
     return;
   } else {
     newPlaylistTracks.push(track);
     this.setState({ playlistTracks: newPlaylistTracks });
   }
 }
 removeTrack(track){
		let tracks = this.state.playlistTracks;
		tracks = tracks.filter(current => current.id !== track.id);
		this.setState({ playlistTracks: tracks});
    }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => {
      return track.uri;
    });
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({
      playListName: 'New Playlist',
      playlistTracks: []
    });
  }
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => {
      return track.uri;
    });
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({
      playListName: 'New Playlist',
      playlistTracks: []
    });
  }
  search(searchTerm) {
   Spotify.search(searchTerm).then(tracks => {
     this.setState({ searchResults: tracks});
   });
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
						<Playlist
							playlistTracks={this.state.playlistTracks}
							playlistName={this.state.playlistName}
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
