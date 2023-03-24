import Proptypes from 'prop-types'

export const Quote = ({data}) => {
    return (
        <>
            {
                data.map(({quote,author},dataIndex) => {
                    return (
                        <article key={dataIndex}>
                            <header>-{author}-</header>
                            <p>"{quote}"</p>
                        </article>
                    )
                })
            }
        </>
    )
}

Quote.propTypes = {
    data : Proptypes.array.isRequired
}
