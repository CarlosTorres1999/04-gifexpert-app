import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Nav = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        
        if( inputValue.trim.length <  2 ){
            setCategories(category => [inputValue, ...category] );
        } 
        setInputValue('');
        e.preventDefault();
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <a className="navbar-brand" href = ".">GiftExpertApp</a>
                    <form className="d-flex" onSubmit={ handleSubmit }>
                        <input 
                            className="form-control me-2"
                            value={ inputValue }
                            onChange= { handleChange } 
                            type="text" />
                            
                        <button
                            className="btn btn-outline-primary"
                            type="submit"
                        >Agregar</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

Nav.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default Nav;
