import React from 'react'
import PropTypes from 'prop-types'
import BasketItem from './BasketItem'

const Basket = ({ basket, total, products, resetBasket }) => {

    return (
        <>
            {basket.map(item =>
            (
                <BasketItem key={item.id} item={item} product={products.find(p => p.id == item.id)} />
            ))}

            <div>
                Toplam: ${total}
            </div>
            <button onClick={resetBasket}>Sepeti Sıfırla</button>
        </>
    )
}


Basket.propTypes = {
    basket: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    })).isRequired,
    total: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })).isRequired,
    resetBasket: PropTypes.func.isRequired
};

export default Basket
