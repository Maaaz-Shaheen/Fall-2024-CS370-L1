export const Account = ({account, setSelectedAccount, selectedAccount}) => {

let {name, imgUrl, id} = account;

    return (
        <div className={id != selectedAccount?.id ? "account" : "account selected" } >
            <img src={imgUrl} onClick={() => setSelectedAccount(account)}   />
            <p>{name}</p>
        </div>  
    );
}