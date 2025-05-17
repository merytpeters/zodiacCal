import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({ onDateChange }) => {
    const handleInputChange = (event) => {
        const dateValue = event.target.value;
        console.log('Input value:', dateValue); // Debugging log
        if (!dateValue) {
            console.log('Empty input value.'); // Debugging log
            onDateChange(null); // Pass null if the input is empty
            return;
        }
        const parsedDate = new Date(dateValue); // Parse the input value into a Date object
        console.log('Parsed date:', parsedDate); // Debugging log
        onDateChange(parsedDate); // Pass the Date object to the parent
    };

    return (
        <div className="date-picker">
            <label htmlFor="birthdate" className="text-white">
                Select your birth date:
            </label>
            <input
                type="date"
                id="birthdate"
                onChange={handleInputChange}
                className="mt-2 p-2 rounded"
            />
        </div>
    );
};

DatePicker.propTypes = {
    onDateChange: PropTypes.func.isRequired,
};

export default DatePicker;