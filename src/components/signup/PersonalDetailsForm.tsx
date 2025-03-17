import React from 'react';

interface PersonalDetailsFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({ 
  formData, 
  handleChange 
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-4 text-gray-700">Enter Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;