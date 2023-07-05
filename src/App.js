import React from 'react';
import './App.css';
import Navbar from './Navbar';
import SearchBar from './Searchbar';
import NoteBox from './NoteBox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <div className="note-boxes">
        <NoteBox title="Note 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <NoteBox title="Note 2" content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <NoteBox title="Note 3" content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>
    </div>
  );
}

export default App;
