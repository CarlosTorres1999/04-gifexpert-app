import React from 'react';
import PropTypes from 'prop-types';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

const Item = ({ value = '' }) => {
    const { loading, data } = useFetchGifs(value);
    

    return (
        <>
            <h3> {value}</h3>
            {loading && <p>Cargando</p>}




            {
                data.map(( img ) =>
                    <GifItem
                        key = {img.id}
                        img = {img}
                    />





                )
            }

        </>
    )
}

Item.propTypes = {
    value: PropTypes.string
}

export default Item;