import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuthContext } from '../AuthContext';

const Secret = () => {
    const [secretValue, setSecretValue] = useState();
    const { user } = useAuthContext();

    useEffect(() => {
        const getSecretValue = async () => {
            const { data } = await axios.get('/api/secret/getvalue');
            setSecretValue(data.value);
        }

        getSecretValue();
    }, []);

    return <div>
        <h1>Welcome {`${user.firstName} ${user.lastName}`}!</h1>
        <h1>The secret value is: {secretValue}</h1>
    </div>
}

export default Secret;