import React from "react";

function PageHeader(props) {
  return (
    <div className="p-5 border-b-[0.5px] border-slate-700">
      <p className="text-lg font-semibold text-gray-200">{props.label}</p>
    </div>
  );
}

export default PageHeader;
