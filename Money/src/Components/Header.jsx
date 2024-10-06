import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ money }) => {
    return (
        <div>
            Harcamak için {money} $ paranız var.
        </div>
    )
}
Header.propTypes = {
    money: PropTypes.number.isRequired
}

export default Header

