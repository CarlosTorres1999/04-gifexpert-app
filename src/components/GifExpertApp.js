import React, {useState} from 'react';
import ListItem from './ListItem';
import Nav from './Nav'
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['dragon ball'])

    return (
        <>
            <Nav setCategories = { setCategories }></Nav>
            <ListItem values = { categories } />
        </>
    )
}

export default GifExpertApp;