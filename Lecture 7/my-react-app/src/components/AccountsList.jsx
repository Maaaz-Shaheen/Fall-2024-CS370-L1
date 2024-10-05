import {Account} from "./Account"

export const AccountsList = ({accounts, setSelectedAccount, selectedAccount}) => {

    console.log(accounts);

    return (
        <div className="accountsList">
            {
                accounts.map(account => <Account selectedAccount={selectedAccount} account={account} setSelectedAccount={setSelectedAccount} />)
            }
        </div>
    );
}