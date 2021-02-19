import { useState } from 'react';
import './App.css';
import TabList from './TabList';
import Body from './Body';

const pages = ["Text","Image","Video","Table","Email"];

function App() {
  const [tabID, setTabID] = useState("Text");
  return (
    <div className="App">
      <header className="App-header">
        <TabList pages={pages} selected={tabID} setPage={(tab) => setTabID(tab)}></TabList>
        <Body pages={pages} selected={tabID}></Body>
      </header>
    </div>
  );
}

export default App;
