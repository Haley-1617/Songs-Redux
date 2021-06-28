import {combineReducers} from "redux";

const songsReducer = () => {
  return [
    {title: "Candy", duration: "4:22"},
    {title: "Psycho", duration: "3:31"},
    {title: "Stay", duration: "3:50"},
    {title: "Really", duration: "3:18"},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
