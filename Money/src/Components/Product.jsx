import React from 'react'
import PropTypes from 'prop-types';

const Product = ({ product, basket, setBasket }) => {


    const addBasket = () => {

        setBasket([...basket, product]);
    }
    return (
        <div className="product">
            <h6>{product.title}</h6>
            <div className='price'>${product.price}</div>
            <div className="actions">
                <button>Sat</button>
                <span className="amount">0</span>
                <button onClick={addBasket}>Satın Al</button>
            </div>
        </div>
    )
}

Product.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    basket: PropTypes.array.isRequired,
    setBasket: PropTypes.func.isRequired
};

export default Product
