import React from 'react';
import {Button} from 'antd'
function App(props) {
  return (
    <div className="App">
      {/* <Button>btn</Button> */}
      <hr/>
      {props.children}
    </div>
  );
}

export default App;
