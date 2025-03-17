import React from 'react';

interface BusinessDetailsFormProps {
  formData: {
    businessName: string;
    businessType: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BusinessDetailsForm: React.FC<BusinessDetailsFormProps> = ({ 
  formData, 
  handleChange 
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-4 text-gray-700">Enter Business Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            placeholder="Type of Business"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsForm;