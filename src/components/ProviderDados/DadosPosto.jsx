import React, { useState, useEffect } from "react";
import axios from "axios";
import Posto from "../Painel/Posto";

export default React.memo(function DadosPosto(props) {
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

    const { clientePosto } = props;

    return (
        <div>
            {users &&
                // users.filter((user) => {
                //     if ('Cliente' in user && 'Posto' in user == clientePosto.cliente && clientePosto.posto)
                //         return user;
                //     console.log(user);
                // })

                users
                    .filter(x => {
                        if (!clientePosto.cliente && !clientePosto.posto) return x
                        return (x.Cliente == clientePosto.cliente && x.Posto == clientePosto.posto)
                    })
                    .map((user, index) => {
                        return <Posto
                            key={index}
                            userData={user}
                            value={index}
                            state={props.state}
                        />
                    })
            }
        </div>
    );
});


