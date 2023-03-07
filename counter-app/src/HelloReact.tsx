import React, {ReactElement} from "react";
import PropTypes from 'prop-types';

interface HelloReactProps{
    title ?: string;
    subtitle ?: string;
}

export const HelloReact = ({title,subtitle} : HelloReactProps) : ReactElement => {
    return(
        <div className="container-fluid headings">
            <h1 key='message'>Me llamo: {title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

HelloReact.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string
};

HelloReact.defaultProps = {
    title : "No hay Nada",
    subtitle : "Que triste"
} as HelloReactProps;



