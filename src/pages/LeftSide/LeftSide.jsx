import React, { useEffect, useState } from 'react';
import { Link, json } from 'react-router-dom';

const LeftSide = () => {
    const [catagores,setCatagores] = useState([]);

    useEffect(()=>{
        fetch('catagores.json')
        .then(res => res.json())
        .then(data => setCatagores(data))
    },[])
    return (
        <div>
            <h1 className='font-medium'>All Caterogy</h1>
            <div>
                <button className='bg-[#E7E7E7] w-full py-3 font-medium my-4'>National News</button>
            </div>
            <div className='pl-16 space-y-4 text-slate-500'>
                {
                    catagores.map(catagore => <Link to={`/catagore/${catagore.id}`}><p
                    key={catagore.id} className='mb-4'>{catagore.name}</p></Link>)
                }
            </div>
        </div>
    );
};

export default LeftSide;