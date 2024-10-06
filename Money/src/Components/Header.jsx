import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ money, total }) => {
    return (
        <>
            <div>
                {total > 0 && money - total !== 0 && (
                    <div>Harcayacak {money - total} $ paranız kaldı!</div>
                )}
                {total === 0 && (
                    <div>Harcamak için {money} $ paranız var!</div>
                )}
                {money - total === 0 && (
                    <div>Paran bitti, parasız insan boş insandır!</div>
                )}
            </div>
        </>
    )
}

Header.propTypes = {
    money: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default Header
