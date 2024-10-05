import { useState } from "react";
import { AccountsList } from "./components/AccountsList";
import "./App.css";

const App = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);

  const accounts = [
    {
      id: 1,
      name: "Ahsan",
      imgUrl: "https://api.multiavatar.com/ahsan.svg",
    },
    {
      id: 2,
      name: "Ranjish",
      imgUrl: "https://api.multiavatar.com/ranjish.svg",
    },
    {
      id: 3,
      name: "Ifrah",
      imgUrl: "https://api.multiavatar.com/ifrah.svg",
    },
  ];

  return (
    <div className="main">
      <div className="content">
        <h1>Whos watching?</h1>
        <AccountsList
          accounts={accounts}
          setSelectedAccount={setSelectedAccount}
          selectedAccount={selectedAccount}
        />
        <button>Log in</button>
      </div>
    </div>
  );
};

export default App;
