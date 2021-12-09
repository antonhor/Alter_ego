import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { createUseStyles } from "react-jss";
import Main from "./Components/main/Main";
import Profile from './Components/profile/Profile';
import News from "./Components/news/News";

const useStyles = createUseStyles({
  wrapper: {
    background: "gray",
  },
});

function App() {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const ProfileAuto = () => {
    const autorization = localStorage.getItem("autorization");
    console.log(typeof autorization);
    if(autorization === "true") {
      console.log(autorization)
      return(<Profile />)
    } else{
      console.log(autorization)
      return(<Main />)
    }
  };
  const SearchPath = () => {
    const autorization = localStorage.getItem("autorization");
    console.log(autorization)
    if(autorization === "true") {
      console.log(autorization)
      return(<Link to="/profile">Profile</Link>)
    } else {
      console.log(autorization)
      return(<Link to="/">Profile</Link>)
    }
  }
  const login = (user, pass) => {
    if(user === "Admin" && pass === "12345") {
      localStorage.setItem("autorization", true)
      console.log("trueeee")
      // return (
      //   <ProfileAuto />,
      //   <SearchPath />
      // )
    }else {
      localStorage.setItem("autorization", false)
      console.log("falseee")
      // return (
      //   <ProfileAuto />,
      //   <SearchPath />
      // )
    }
  }
  return (
    <div>
    <div>
      <div>
        <div>
          <input placeholder="username" onChange={event => setUsername(event.target.value)}></input>
        </div>
        <div>
          <input placeholder="password" onChange={event => setPassword(event.target.value)}></input>
        </div>
        <div>
          <button onClick={() => login(username, password)}>Submit</button>
        </div>
      </div>
    </div>
      <Router>
        <div className={classes.wrapper}>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li onClick={<SearchPath />}>
            <SearchPath />
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/profile" element={<ProfileAuto />} onClick={<ProfileAuto />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
