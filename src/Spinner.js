import React from 'react';
import Loader from 'react-loader';
import PropTypes from 'prop-types';

const Spinner = (props) => {
    const options = {
        lines: 13,
        length: 20,
        width: 10,
        radius: 30,
        corners: 1,
        rotate: 0,
        direction: 1,
        color: '#fff',
        speed: 1,
        trail: 60,
    };
    const styleForOverlay = {
        background: 'rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 999,
        display: 'block',
    };
    return (
        <div>
            {props.isLoading ?
                <div key="spinnerContainer" style={styleForOverlay}>
                    <Loader key="Loader" options={options} />
                </div>
            : null}
        </div>
    );
};
Spinner.propTypes = {
    isLoading: PropTypes.bool.isRequired
};
export default Spinner;
