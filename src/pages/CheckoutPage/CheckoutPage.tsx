import React from "react";
import { useLocation } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const { employeeCount, checked } = location.state || {};

  const totalPrice = checked?.reduce((acc, item) => acc + item.price, 0) || 0;
  const HandleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {};
  return (
    <>
      {/* <h1>Check out Page</h1>
      <h3>Total Price: {totalPrice}</h3>
      <h4>Employee Count: {employeeCount}</h4> */}
      <div>
        {checked && checked.length > 0 ? (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Selected Services</h3>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">Service</th>
                  <th className="px-4 py-2 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {checked.map((sol, i: number) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">{sol.name}</td>
                    <td className="px-4 py-2">${sol.price.toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className="px-4 py-2 font-bold">
                    Total Price
                  </td>
                  <td className="px-4 py-2 font-bold">
                    ${totalPrice.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <form onSubmit={HandleFormSubmit}>
              <input
                type="submit"
                value="Complete Payment"
                className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-600"
              />
            </form>
          </div>
        ) : (
          <p>No items selected.</p>
        )}
      </div>
    </>
  );
}
