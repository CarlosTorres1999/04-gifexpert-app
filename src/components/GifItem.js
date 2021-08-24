import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
const GiftItem = ( {img} ) => {
    console.log(img);
    return(
        <>
            <div className = "card">
                <h4 className = "card-title" >{ img.title }</h4>
                <div className = "card-body">
                    <img 
                        key = { img.id }
                        src = { img.url }
                        alt = { img.title }
                    />
                </div> 
            </div>
        </>
    )
}

GiftItem.defaultProps = {
    img: {
        id: '',
        title: '',
        url: ''
    }
}
GiftItem.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string
    })
}
export default GiftItem;