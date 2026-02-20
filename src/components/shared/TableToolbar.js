import React from "react";

const TableToolbar = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-white border border-gray-200 rounded px-2 py-1 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default TableToolbar;
