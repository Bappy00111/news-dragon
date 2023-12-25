import React from 'react';
import { useParams } from 'react-router-dom';

const Catagore = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>categores:{id}</h1>
        </div>
    );
};

export default Catagore;