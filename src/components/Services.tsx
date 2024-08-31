import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Services() {
  type SoftwareProduct = {
    name: string;
    description: string;
    price: number;
    pricingDetails: string;
  };

  const [employeeCount, setEmployeeCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [checked, setChecked] = useState<
    Pick<SoftwareProduct, "name" | "price">[]
  >([]);
  const [proceedToCheckOut, setProceedToCheckOut] = useState<boolean>(false);

  const softwareProducts: SoftwareProduct[] = [
    {
      name: "Customer Relationship Management (CRM) Software",
      description:
        "A platform to help businesses manage their interactions with current and potential customers. Features include contact management, sales pipeline tracking, and customer service automation.",
      price: 30,
      pricingDetails: "$30/user/month",
    },
    {
      name: "Project Management Tool",
      description:
        "A tool for teams to plan, execute, and track projects efficiently. It includes task management, Gantt charts, and team collaboration features.",
      price: 10,
      pricingDetails: "$10/user/month",
    },
    {
      name: "Email Marketing Platform",
      description:
        "A service that allows businesses to create, send, and analyze email campaigns. Features include automation, A/B testing, and analytics.",
      price: 50,
      pricingDetails: "$50/month for up to 5,000 subscribers",
    },
    {
      name: "Accounting Software",
      description:
        "A platform for managing financial transactions, generating invoices, tracking expenses, and producing financial reports. It integrates with banks and payment gateways.",
      price: 20,
      pricingDetails: "$20/user/month",
    },
    {
      name: "Human Resources Management System (HRMS)",
      description:
        "A tool for managing employee data, payroll, attendance, performance, and recruitment. It also includes self-service portals for employees.",
      price: 25,
      pricingDetails: "$25/user/month",
    },
    {
      name: "Social Media Management Tool",
      description:
        "A platform that helps businesses manage their social media presence, schedule posts, analyze performance, and engage with their audience across multiple platforms.",
      price: 30,
      pricingDetails: "$30/month for 10 social media accounts",
    },
    {
      name: "Inventory Management System",
      description:
        "A system that helps businesses track inventory levels, manage stock, and automate order fulfillment. It integrates with e-commerce platforms and POS systems.",
      price: 50,
      pricingDetails: "$50/month",
    },
    {
      name: "Customer Support Ticketing System",
      description:
        "A service for managing customer inquiries, support tickets, and feedback. Features include ticket tracking, live chat, and automated responses.",
      price: 15,
      pricingDetails: "$15/user/month",
    },
    {
      name: "Document Management System (DMS)",
      description:
        "A platform for storing, managing, and sharing documents within a business. It includes version control, secure access, and collaboration tools.",
      price: 40,
      pricingDetails: "$40/month for 100GB of storage",
    },
    {
      name: "Employee Training and E-Learning Platform",
      description:
        "A platform for delivering and managing employee training programs. It includes course creation tools, progress tracking, and certification management.",
      price: 100,
      pricingDetails: "$100/month for up to 50 users",
    },
  ];

  const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const name = e.target.name;
    const price = parseFloat(e.target.value);
    const newItem = { name, price };
    if (isChecked) {
      setChecked((prev) => [...prev, newItem]);
      setTotalPrice((prev) => (prev += price));
    } else {
      setChecked((prev) => prev.filter((item) => item.name != name));
      setTotalPrice((prev) => (prev -= price));
    }
  };
  const HandleCalculateFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const HandleCheckOutFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProceedToCheckOut(true);
  };
  return (
    <>
      {proceedToCheckOut && (
        <Navigate
          to="/checkout"
          state={{
            checked: checked as Pick<SoftwareProduct, "name" | "price">[],
            employeeCount: employeeCount,
          }}
          replace={true}
        />
      )}
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Software Solution to Your Business is now one Click away!
        </h1>
        <form onSubmit={HandleCalculateFormSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="employeeCount"
            >
              Number of Employees in the Company:
            </label>
            <input
              type="number"
              id="employeeCount"
              name="employeeCount"
              defaultValue={1}
              onChange={(e) => {
                setEmployeeCount(parseInt(e.target.value));
              }}
              min="1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {softwareProducts.map((sol: SoftwareProduct, i: number) => (
            <div
              key={i}
              className="flex items-start bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <input
                type="checkbox"
                value={sol.price}
                name={sol.name}
                onChange={HandleInputChange}
                className="mr-4 mt-1"
              />
              <details className="flex-grow" name="accordion">
                <summary className="font-semibold text-lg cursor-pointer">
                  {sol.name}
                </summary>
                <p className="text-sm text-gray-700">{sol.description}</p>
                <p className="text-sm font-semibold mt-1">
                  {sol.pricingDetails}
                </p>
              </details>
            </div>
          ))}
          <input
            type="submit"
            value="Calculate Total"
            className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-600"
          />
        </form>
        {formSubmitted && (
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
                    <td className="px-4 py-2">
                      ${(sol.price * employeeCount).toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className="px-4 py-2 font-bold">
                    Total Price
                  </td>
                  <td className="px-4 py-2 font-bold">
                    ${(totalPrice * employeeCount).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <form onSubmit={HandleCheckOutFormSubmit}>
              <input
                type="submit"
                value="CheckOut"
                className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-600"
              />
            </form>
          </div>
        )}
      </div>
    </>
  );
}
