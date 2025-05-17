import React from 'react';
import PropTypes from 'prop-types';

const ZodiacCard = ({ sign, dateRange, description, image, color }) => {
    console.log('ZodiacCard props:', { sign, dateRange, description, image, color }); // Debugging log

    return (
        <div className="zodiac-card" style={{ backgroundColor: color }}>
            <h2 className="text-center text-white">{sign}</h2>
            <p className="text-center text-gray-200">{dateRange}</p> {/* Display formatted date range */}
            <img src={image} alt={`${sign} icon`} className="mx-auto" />
            <p className="text-center text-white">{description}</p>
        </div>
    );
};

ZodiacCard.propTypes = {
    sign: PropTypes.string.isRequired,
    dateRange: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ZodiacCard;