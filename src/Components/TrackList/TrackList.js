import React from 'react';
import ReactDOM from 'react-dom';
import './TrackList.css';
import '././Track/Track.js';

export class TrackList extends React.Component {
    render(){
      <div class="TrackList">
      {this.props.tracks.map(track =>
        <Track
          key={track.id}
          track={track}
          onAdd={this.props.onAdd}
          isRemoval={this.props.isRemoval}
          onRemove={this.props.onRemove} />
      </div>
    }
}
