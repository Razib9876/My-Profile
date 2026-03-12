import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border border-default border-dashed rounded-base">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
