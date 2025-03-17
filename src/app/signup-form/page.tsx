"use client";

// src/components/signup/SignupForm.tsx
import React, { useState } from "react";
import PersonalDetailsForm from "@/components/signup/PersonalDetailsForm";
import BusinessDetailsForm from "@/components/signup/BusinessDetailsForm";
import KiranaStoreAddressForm from "@/components/signup/KiranaStoreAddressForm";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  area: string;
  landmark: string;
  streetAddress: string;
  city: string;
  state: string;
  pinCode: string;
  nominateForAwards: boolean;
  acceptMessages: boolean;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    area: "",
    landmark: "",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
    nominateForAwards: false,
    acceptMessages: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(
        "https://bakcend-n9kq.onrender.com/User/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Image
        src="/images/frame.png"
        alt="Minutos Delivery Bike"
        layout="responsive"
        width={1200}
        height={600}
        className="w-full h-auto"
      />

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mt-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Minutos Merchant Signup
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please enter your details below
        </p>

        {submitSuccess ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            <p className="font-bold">Registration Successful!</p>
            <p>
              Thank you for registering with Minutos. We'll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <PersonalDetailsForm formData={formData} handleChange={handleChange} />
            <BusinessDetailsForm formData={formData} handleChange={handleChange} />
            <KiranaStoreAddressForm formData={formData} handleChange={handleChange} />

            <div className="mb-4">
              <div className="flex items-start mb-2">
                <input
                  type="checkbox"
                  id="nominateForAwards"
                  name="nominateForAwards"
                  checked={formData.nominateForAwards}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="nominateForAwards" className="text-gray-700">
                  <span className="flex items-center">
                    <span role="img" aria-label="trophy" className="mr-1">
                      🏆
                    </span>
                    Nominate for Minutos Awards
                  </span>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptMessages"
                  name="acceptMessages"
                  checked={formData.acceptMessages}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                />
                <label htmlFor="acceptMessages" className="text-gray-700">
                  I accept receiving messages for updates and promotions.
                </label>
              </div>
            </div>

            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p>{submitError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting
                  ? "bg-gray-400"
                  : "bg-kirana-green hover:bg-opacity-90"
              } text-white py-3 px-4 rounded-full font-medium transition duration-200`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
