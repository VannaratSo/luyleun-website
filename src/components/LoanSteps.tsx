import React from "react";

const LoanSteps = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Loan Application Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
            <p className="text-gray-600">Complete our secure application</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
            <p className="text-gray-600">Instant analysis and approval</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
            <p className="text-gray-600">Secure document verification</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">Receive Funds</h3>
            <p className="text-gray-600">Fast and secure transfer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanSteps;
