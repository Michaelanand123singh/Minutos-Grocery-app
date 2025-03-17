import React from 'react';

interface KiranaStoreAddressFormProps {
  formData: {
    area: string;
    landmark: string;
    streetAddress: string;
    city: string;
    state: string;
    pinCode: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const KiranaStoreAddressForm: React.FC<KiranaStoreAddressFormProps> = ({ 
  formData, 
  handleChange 
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-4 text-gray-700">Enter Minutos Store Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="House Number and Area"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>

        



        <div>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            placeholder="Street Address"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Land Mark"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            placeholder="PIN Code"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 "
            required
          />
        </div>

        
      </div>
    </div>
  );
};

export default KiranaStoreAddressForm;