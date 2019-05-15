import React, { useState, useEffect } from "react";
import axios from "axios";
import Trabalhador from "../Painel/Trabalhador"

export default React.memo(function DadosTrab(props) {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8080/");
        return response;
    };

    useEffect(() => {
        setIsLoading(true);
        fetchUsers()
            .then(({ data, status }) => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const style = {

    }

    return (
        <div>
            {users &&
                users.map((user, index) => {
                    return <Trabalhador key={index} userData={user} cliente={props.cliente} posto={props.posto} />
                })}
        </div>
    );
});    