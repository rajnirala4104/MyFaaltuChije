import './App.css';
import Navbar from './Components/Navbar';
import WebContentes from './Components/WebContents';
import { useState } from 'react';

function App() {
  const colors = {
    containerStyle: {
      "white": {
        color: "black",
        background: "white",
      },
      "red": {
        color: "black",
        background: "#ef3c3c"
      },
      "orange": {
        color: "black",
        background: "#ef9b00"
      },
      "blue": {
        color: "black",
      background: "#5151bf"
      },
      "green": {
        color: "black",
        background: "#468746"
      },
      "black": {
        color: "#cdc8c8",
      background: "#1e1e1e"
      }
    },
    // ElementStyle: {

    // }
  }

  
  const [colorTheme, setColorTheme] = useState(null)
  const changeTheme = (colorDic)=>{
    if(colorTheme==null){
      setColorTheme(colors.containerStyle.white)
    }else{
      console.log(colorDic)
    }
  } 
  changeTheme(colorTheme)
  return (
    <div className="App" style={colorTheme}>
      <Navbar  userColors={colors} setColorTheme={setColorTheme} theme={colorTheme}/>
      <div className="container" theme={colorTheme}>
        <WebContentes theme={colorTheme}/>
      </div>
    </div>
  );
}

export default App;
