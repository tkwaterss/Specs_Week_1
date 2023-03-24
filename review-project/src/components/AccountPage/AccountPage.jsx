import React, {useState} from "react";

const AccountPage = (props) => {
    const [listItem, setListItem] = useState('');
    let {account, updateAccount} = props;

    const trackListItem = (event) => setListItem(event.target.value);

    const addHandler = (event) => {
        event.preventDefault();
        account.toDoList.push(listItem);
        updateAccount(account);
        //TODO pretty sure this is working
        //! I think that I need to "logout" to login to a different account to check if list stays updated
    }

let listItems = account.toDoList.map((item, index) => {
    return (
        <li key={index}>{item}</li>
    )
})

    return (
        <div>
            <form onSubmit={addHandler}>
                <input onChange={trackListItem} type="text" placeholder="enter to-do item" ></input>
                <button>Add</button>
            </form>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default AccountPage;