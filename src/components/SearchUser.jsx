import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from '../SearchForm';
import UsersList from '../UserList';

const API = 'https://api.github.com/';

export default function SearchUser() {
    const [users, setUsers] = useState(false);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        fetchSearch(keyword);
    }, []);

    const fetchSearch = keyword => {
        let url = `${API}search/users?q=${keyword}&per_page=10`;

        axios
            .get(url)
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log('Oops! Fetching failed:', error);
                setUsers(false);
            });
    };

    return (
        <>
            <SearchForm
                keyword={keyword}
                setKeyword={setKeyword}
                fetchSearch={fetchSearch}
            />
            <UsersList users={users} />
        </>
    );
}
