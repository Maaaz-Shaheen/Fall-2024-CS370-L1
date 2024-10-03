import { useState } from "react"
import "./custom.css"
import { AccountList } from "./components/Account/AccountList";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faCoffee} from "@fortawesome/free-solid-svg-icons"

const App = () => {

  // const [count, setCount] = useState(0);

  // const clickMe = () => {
  //   setCount(count+1);
  // }

  let userAccounts = [
    {
      name: "Ahsan",
      id: 1,
      email: "abc1@example.com",
      profilePic: "https://api.multiavatar.com/ahsan.svg"
    },
    {
      name: "Ali",
      id: 2,
      email: "abc2@example.com",
      profilePic: "https://api.multiavatar.com/ali.svg"
    },
    {
      name: "Ahmed",
      id: 3,
      email: "abc3@example.com",
      profilePic: "https://api.multiavatar.com/ahmed.svg"
    },
    {
      name: "Asad",
      id: 4,
      email: "abc4@example.com",
      profilePic: "https://api.multiavatar.com/asad.svg"
    }
  ]


  return (
    <div className="main" >
      {/* <h1>{count}</h1> */}
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      {/* <button onClick={clickMe}>Click Me</button> */}
      <h1>Who{"'"}s watching?</h1>
      <AccountList userAccounts={userAccounts} />
    </div>
  );
}

export default App;