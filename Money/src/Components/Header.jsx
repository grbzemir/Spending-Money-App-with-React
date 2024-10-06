import React from 'react'
import PropTypes from 'prop-types'
import { moneyFormat } from '../Helpers'

const Header = ({ money, total }) => {
    return (
        <>
            <div>
                {total > 0 && money - total !== 0 && (
                    <div className="header">Harcayacak <span>${moneyFormat} </span> paranız kaldı!</div>
                )}
                {total === 0 && (
                    <div className="header">Harcamak için <span>${moneyFormat}  </span>paranız var!</div>
                )}
                {money - total === 0 && (
                    <div className="header">Paran bitti, parasız insan boş insandır!</div>
                )}
            </div>
        </>
    )
}

Header.propTypes = {
    money: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,

}

export default Header
