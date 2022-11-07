import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users)

    const handleDelete = user => {

        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);
        if(agree){
            console.log('Delling id is: ', user._id);
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'

            })
            .then(res =>res.json())
            .then(data => {
                
                console.log(data);
                if(data.deletedCount > 0){
                    alert('user deleter successfully');
                    const remainingUSers = displayUsers.filter(usr =>usr._id !== user._id);
                    setDisplayUsers(remainingUSers);
                }
            
            });

        }
        
    }


    return (
        <div>
            <h1>This is home:{displayUsers.length}</h1>
            {
                displayUsers.map(user => <p kay={user._id}>{user.name},{user.email}<button onClick={() => handleDelete(user)}>X</button></p>)
            }
        </div>
    );
};

export default Home;