import React, { useState } from 'react';

interface MultiSelectDropdownProps {
  options: string[];
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative text-black">
      <div
        className="border p-2 rounded-md cursor-pointer overflow-y-auto max-h-32" // Added max height and overflow styles here
        onClick={toggleDropdown}
      >
        {selectedOptions.length === 0
          ? 'Select options'
          : selectedOptions.join(', ')}
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded-md shadow-md z-10 max-h-40 overflow-y-auto">
          <ul>
            {options.map((option) => (
              <li
                key={option}
                className="p-2 hover:bg-gray-200 text-black"
                onClick={() => handleOptionClick(option)}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  readOnly
                />
                <span className="ml-2">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;