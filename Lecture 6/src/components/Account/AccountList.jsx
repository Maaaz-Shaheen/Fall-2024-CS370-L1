import { Account } from './Account';
export const AccountList = ({userAccounts}) => {
    return (
        <div className="account-list">
        {userAccounts.map((user) => (
            <Account key={user.id} user={user} />
        ))}
        </div>
    );
}