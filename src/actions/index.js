// Action creator

// Named export - need curly bracket when importing this function in other js files
export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
