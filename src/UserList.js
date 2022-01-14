import { Link } from 'react-router-dom';

export default function UsersList({ users }) {
    if (users) {
        if (users.message === 'Not Found') {
            return (
                <div className="not-found">
                    <h2>Oops !!</h2>
                    <p>
                        The API couldn't find any user. Try again with a
                        different keyword
                    </p>
                </div>
            );
        } else {
            let userList = users.items.map(function (user) {
                return (
                    <Link key={user.id} to={'user/' + user.login}>
                        <div className="bs-callout bs-callout-info">
                            <img
                                className="user"
                                alt="User profile"
                                src={user.avatar_url}
                            />
                            <h4>Username : {user.login}</h4>
                            <p> Url : {user.html_url}</p>
                            <p> Score : {user.score} </p>
                        </div>
                    </Link>
                );
            });
            return <div>{userList}</div>;
        }
    } else {
        return <div>Please write a nickname</div>;
    }
}
