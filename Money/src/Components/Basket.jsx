import React from 'react'
import PropTypes from 'prop-types'
import BasketItem from './BasketItem'

const Basket = ({ basket, total, products, resetBasket }) => {

    return (
        <>
            <div className="basket-container">
                <h3>Alışveriş Detayları</h3>
                {basket.map(item =>
                (
                    <BasketItem key={item.id} item={item} product={products.find(p => p.id == item.id)} />
                ))}

                <div className="total">
                    Toplam: ${total}
                </div>
                <button className="btn3" onClick={resetBasket}>Sepeti Sıfırla</button>
            </div>
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
