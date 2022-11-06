import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});
    const handleAddUser = event =>{
        event.preventDefault();
    }

    const handleInputBlur = event =>{

        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);


        console.log(newUser);


    }

    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                    <input onBlur={handleInputBlur} type="text" name="name" placeholder='Name' />
                    <br/>
                    <input onBlur={handleInputBlur} type="text" name="address" placeholder='Address' />
                    <br/>
                    <input onBlur={handleInputBlur} type="email" name="email" placeholder='Email' />
                    <br />
                    <button type="submit">Add user</button>
            </form>
        </div>
    );
};

export default AddUser;