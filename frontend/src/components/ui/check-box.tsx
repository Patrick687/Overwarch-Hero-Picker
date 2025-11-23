import React from 'react';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  className = ''
}) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer disabled:cursor-not-allowed"
      />
      <span className={`text-sm font-medium ${disabled ? 'text-gray-400' : 'text-gray-900'}`}>
        {label}
      </span>
    </label>
  );
};

export default CheckBox;