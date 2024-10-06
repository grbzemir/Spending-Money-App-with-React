import React from 'react'
import PropTypes from 'prop-types';

const Product = ({ product, basket, setBasket, total, money }) => {

    const basketItem = basket.find(item => item.id === product.id)


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

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }
    return (
        <div className="product">
            <h6>{product.title}</h6>
            <div className='price'>${product.price}</div>
            <div className="actions">
                <button disabled={!basketItem} onClick={removeBasket}>Çıkart</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button disabled={total + product.price > money} onClick={addBasket}>Ekle</button>
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
    setBasket: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    money: PropTypes.number.isRequired
};

export default Product
