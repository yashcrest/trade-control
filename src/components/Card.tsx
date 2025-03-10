import React from "react";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h6 className=" font-semibold text-gray-900">{title}</h6>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
