import { useEffect, useState } from 'react';
import { getGifs } from '../utils/api';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs( category )
        .then( imgs => {
            setTimeout(()=> {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 100);
        });
    }, [ category ]);
    


    return state;
}