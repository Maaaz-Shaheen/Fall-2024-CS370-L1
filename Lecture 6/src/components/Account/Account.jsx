export const Account = ({ user }) => {
    return (
        <div className="account">
            <img src={user.profilePic} alt={user.name} />
            <h2>{user.name}</h2>
        </div>
    );
}