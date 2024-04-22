// React Component
import React, { useState } from 'react';
import Select from 'react-select/async';
import { colourOptions } from './data';


const filterColors = (inputValue) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

const CustomAsyncSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      padding: 20,
      display: 'flex',
      alignItems: 'center', // Center items vertically
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '16px', // Change font size
      fontFamily: 'Arial, sans-serif', // Change font family
      boxShadow: 'none',
      paddingLeft: 20,
      border: 'none',
      marginLeft: 1,
    }),
    control: (provided) => ({
      ...provided,
      border: '1px solid #e2e8f0',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
   
    searchButton: {
      width: '120px',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      borderLeft: '1px solid #e2e8f0',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      backgroundColor: '#229A24',
      color: '#ffffff',
      borderRadius: '8px',
      fontSize: '16px',
      height: '55px'
    },
  };

  const customOption = (props) => (
    <div onClick={() => window.open(props.data.pdfLocation, '_blank')} style={{cursor: 'pointer'}}>
      <img
        alt=""
        src={props.data.image}
        style={{ width: 100, marginRight: 100, marginBottom: 50 }}
      />
      <span style={{ textAlign: 'center', marginTop: '-50px' }}>{props.label}</span>
    </div>
  );

  return (
    <Select
      className="custom-select" // SCSS Class
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onChange={handleChange}
      value={selectedOption}
      styles={customStyles}
      placeholder="Enter name of report, article, research or subject" // Placeholder text
      isSearchable
      menuIsOpen={menuIsOpen}
      onMenuOpen={() => setMenuIsOpen(true)}
      onMenuClose={() => setMenuIsOpen(false)}


      components={{
        Option: customOption,
        IndicatorSeparator: null,
        DropdownIndicator: (props) => (
          <div>
            <div
              style={customStyles.searchButton}
              onClick={() => console.log('Search Button clicked')}
            >
              
              SEARCH
            </div>
          </div>
        ),
      }}


    />
  );
};

export default CustomAsyncSelect;
