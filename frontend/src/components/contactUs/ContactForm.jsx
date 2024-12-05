import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = ({ onClose }) => {

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    requirement: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.contactNo.trim())
      newErrors.contactNo = "Contact number is required.";
    if (!formData.requirement.trim())
      newErrors.requirement = "Requirement is required.";
    if (!formData.budget.trim()) newErrors.budget = "Budget is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users",
          formData
        );
        if (response.status === 201) {
          toast.success("User information saved successfully!", {
            position: "top-center",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setFormData({ name: "", contactNo: "", requirement: "", budget: "" });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Failed to submit the form. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  return (
    <div className="fixed w-full h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative inset-0 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-11/12 max-w-sm sm:max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Contact Number Field */}
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-medium text-gray-700">Contact No.</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="Enter your contact number" 
              required
            />
          </div>
          {/* Requirement Field */}
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-medium text-gray-700">Requirement</label>
            <textarea
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="Describe your requirement"
              rows="3"
            ></textarea>
          </div>
          {/* Budget Field */}
          <div className="mb-4">
            <label className="block text-sm sm:text-base font-medium text-gray-700">Budget</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="Enter your budget"
              required
            />
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
