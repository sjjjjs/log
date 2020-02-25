import React, { useEffect, useState } from 'react';
import store from 'store/index';

function Demo() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        // async function add(){
        //     await store.friends.add({
        //         name: 'Camilla',
        //         age: 25,
        //         street: 'East 13:th Street'
        //     });
        // }
        // add();
        async function fetch() {
            const list = await store.friends.toArray();
            setFriends(list);
        }
        fetch();
    }, []);
    return <div>
        <ul>{
            friends.map(f => (
                <li><strong>{f.name}</strong>, {f.age} year(s) old, live in {f.street}.</li>
            ))
        }</ul>
    </div>;
}

export const component = Demo;
export const path = '/demo';