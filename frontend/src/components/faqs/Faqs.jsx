import React from "react";

const Faqs = () => {
  const faqs = [
    {
      question: "Where is the signature luxury apartment project by Godrej Properties located in Noida?",
      answer: "The iconic premium apartment project is located in Sector 44 in Noida.",
    },
    {
      question: "Does the project offer modern amenities to its residents?",
      answer: "Yes, the residents of Godrej Riverine can avail unmatched amenities; that include a swimming pool, clubhouse, kid’s play area and more.",
    },
    {
      question: "What unit type does the project offer?",
      answer: "The premium 3 BHK and 4 BHK apartments features in Godrej Sector 44 Noida.",
    },
    {
      question: "Is this project worth investing in?",
      answer: "Yes, investing in the project guarantees higher ROI, assured rental income and significant appreciation of the property value.",
    },
    {
      question: "Who has developed the luxury residential apartments in Sector 44 in Noida?",
      answer: "The premium residential apartment project in Sector 44, Noida is developed by the notable real estate developer Godrej Properties.",
    },
  ];

  return (
    <div className="bg-gray-50 p-6 sm:p-10 md:p-16">
      <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {index + 1}. {faq.question}
            </h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
