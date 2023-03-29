import React from 'react'
import Proptypes from 'prop-types'

export const Small = React.memo(({value}) => {
    console.log('ola');
    return (
        <small>
            {value}
        </small>
    )
})

Small.propTypes = {
    value : Proptypes.any.isRequired
}
