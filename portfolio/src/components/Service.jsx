import React from "react";

const services = [
  {
    id: 1,
    title: "Advanced ABAP Development",
    description: "Expertise in SmartForms and ALV for creating customized documents and interactive data presentation.",
  },
  {
    id: 2,
    title: "User Interface Creation and Maintenance",
    description: "Development of intuitive and effective interfaces for an enhanced user experience.",
  },
  {
    id: 3,
    title: "RFC Integration",
    description: "Implementation of Remote Function Calls for efficient integration between SAP and non-SAP systems.",
  },
  {
    id: 4,
    title: "Customization with BAPIs and Enhancement Points",
    description: "Utilization of BAPIs, User Exits, and Enhancement Points for customizing and extending standard SAP functionalities.",
  },
  {
    id: 5,
    title: "Fiori Application Development",
    description: "Creation of List Reports, Worklists, and Fiori apps, integrated with the SAP GUI environment.",
  },
  {
    id: 6,
    title: "Data Modeling and Integration",
    description: "Data modeling with CDS Views, integration using SAP Gateway, and development of OData services.",
  },
];

const Service = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 dark:bg-gray-700 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-800 dark:text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-600 dark:text-green-400 hover:text-blue-600 dark:hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;