import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AdditionalInfoForm = ({ title, description, setTitle, setDescription, handleSubmit  }) => (
    <form id='additionalInfoForm' className='custom-list' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Title" 
            className="info-item" 
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
        />
        
        <input
            type="text" 
            placeholder="Description" 
            className="info-item"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        
        <input
            type="submit"
            className="btn"
            value="Add new goal"
        />
    </form>
);

const AdditionalInfoComponent = ({ addGoal }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newGoal = {
            title: title,
            description: description,
        };
        if (title !== '') {
            addGoal(newGoal);

            setTitle('');
            setDescription('');
        }
    };

    return (
        <React.Fragment>
            <AdditionalInfoForm 
                title={title} 
                description={description} 
                setTitle={setTitle} 
                setDescription={setDescription} 
                handleSubmit={handleFormSubmit} 
            />
        </React.Fragment>
    );
};
AdditionalInfoComponent.propTypes = { 
    addGoal: PropTypes.func.isRequired,
};

AdditionalInfoForm.propTypes = { 
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,

};

export default AdditionalInfoComponent;
