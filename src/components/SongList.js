import React from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // this.props === {songs:state.songs}
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

// Can name this function whatever we want, like 'getMyState', etc. Tranditionally, we name it 'mapStateToProps'
// In class SongList, this.props === {songs:state.songs}. That's how we get data from redux store
const mapStateToProps = (state) => {
  console.log(state);
  return {songs: state.songs};
};

// connect is a function that returns SongList function
// connect will take selectSong action creator and pass it as this.props
export default connect(mapStateToProps, {selectSong})(SongList);
