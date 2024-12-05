import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  // Infinite slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [data.length]);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

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
    <div className="relative flex flex-col justify-center items-center w-screen h-screen overflow-hidden">
      {/* ToastContainer */}
      <ToastContainer />

      {/* Navigation Arrows */}
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute left-4 text-white w-10 h-10 drop-shadow-md hover:cursor-pointer z-10"
      />
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute right-4 text-white w-10 h-10 drop-shadow-md hover:cursor-pointer z-10"
      />

      {/* Carousel Images */}
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            slide === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots for navigation */}
      <div className="absolute bottom-4 flex z-10">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full border-none mx-2 cursor-pointer ${
              slide === idx ? "bg-white shadow-md" : "bg-gray-400"
            }`}
            onClick={() => setSlide(idx)}
          ></button>
        ))}
      </div>

      <div className="   p-6 md:p-12 lg:p-24 flex justify-evenly m-7">
        {/* Carousel Caption */}
        <div className="relative bottom-12 text-center text-nowrap text-black backdrop-blur-sm rounded-md bg-white/30 self-center  text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          <FaLocationDot className="text-2xl md:text-3xl lg:text-4xl font-bold inline-block mr-2 text-red-500" />
          Godrej Sector 44,<br /> Noida
        </div>

        {/* Contact Form */}
        <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 p-6 w-screen max-w-md bg-white/70 rounded-lg shadow-lg self-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Contact No.</label>
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your contact number"
              />
              {errors.contactNo && (
                <p className="text-red-500 text-sm">{errors.contactNo}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Requirement</label>
              <textarea
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows="3"
                placeholder="Describe your requirement"
              ></textarea>
              {errors.requirement && (
                <p className="text-red-500 text-sm">{errors.requirement}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Budget</label>
              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your budget"
              />
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
