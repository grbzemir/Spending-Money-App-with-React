import React from 'react'
import PropTypes from 'prop-types'

const BasketItem = ({ item, product }) => {
    return (
        <div>
            {product.title} x {item.amount}
            {/* {product.price * item.amount} */}
        </div>
    )
}

BasketItem.propTypes = {
    item: PropTypes.shape({
        amount: PropTypes.number.isRequired,
    }).isRequired,
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
}

export default BasketItem
