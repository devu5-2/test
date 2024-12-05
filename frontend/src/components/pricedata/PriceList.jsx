import React from "react";

const priceData = [
  {
    type: "3 BHK + Servant",
    area: "2800 - 3100",
    price: "₹6 Cr*",
  },
  {
    type: "4 BHK + Servant",
    area: "3700 - 4000",
    price: "₹8.5 Cr*",
  },
];

const PriceList = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">Price List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="py-2 px-4 border-b border-gray-300">TYPE</th>
              <th className="py-2 px-4 border-b border-gray-300">Area (Sq.ft.)</th>
              <th className="py-2 px-4 border-b border-gray-300">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-300">{row.type}</td>
                <td className="py-2 px-4 border-b border-gray-300">{row.area}</td>
                <td className="py-2 px-4 border-b border-gray-300">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceList;
