import React from 'react'
import PropTypes from 'prop-types';

const Product = ({ product, basket, setBasket }) => {


    const addBasket = () => {

        const checkBasket = basket.find(item => item.id === product.id)
        //ürün daha önce eklenmişse
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id, amount: 1

            }])
        }
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
        price: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    basket: PropTypes.array.isRequired,
    setBasket: PropTypes.func.isRequired
};

export default Product
