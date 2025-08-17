import React, { useState } from "react";
import { Link } from "react-router-dom";

function Project({ project }) {
  const { id, title, description, skill, img, bgColor } = project;
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileImages, setShowMobileImages] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${
        isHovered ? bgColor : ""
      } transition-all duration-700 ease-in-out flex flex-col`}
    >
      {/* Top Section */}
      <div className="w-full min-h-[30%] max-md:gap-4 flex max-md:flex-col justify-between items-start py-8 p-7 border-t">
        
        {/* Title + Button */}
        <div className="w-[30%] h-full gap-15 max-md:gap-4 max-md:w-full flex flex-col">
          <h1 className="text-3xl font-bold">{title}</h1>
          <Link
            to={`/projects/${id}`}
            className="rounded-lg text-sm font-medium  hover:text-blue-600"
          >
            View Details
          </Link>
        </div>

        {/* Description */}
        <div className="w-[40%] max-md:w-full">{description}</div>

        {/* Skills */}
        <div className="w-[30%] max-md:w-full flex items-center max-md:justify-start justify-center">
          <ul>
            {skill.map((s, index) => (
              <li key={index} className="text-sm  mb-1">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Section */}
      {/* Desktop → Fixed 3 images | Mobile → 1 image + expandable toggle */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isHovered ? "h-[44vh]" : "h-0"
        } px-10`}
      >
        {/* Large screen view (3 images side by side) */}
        <div className="hidden md:flex items-start justify-between gap-4 h-full">
          <img className="w-[30%] rounded-md object-cover" src={img} alt="" />
          <img className="w-[25%] rounded-md object-cover" src={img} alt="" />
          <img className="w-[30%] rounded-md object-cover" src={img} alt="" />
        </div>

        {/* Mobile view (1 main image + toggle) */}
        <div className="md:hidden flex flex-col gap-3">
          {/* Always show one image */}
          <img className="w-full rounded-md object-cover" src={img} alt="" />

          {/* Toggle Button */}
          {/* <button
            onClick={() => setShowMobileImages(!showMobileImages)}
            className="text-sm text-blue-600 underline"
          >
            {showMobileImages ? "Hide Images" : "Show More"}
          </button> */}

          {/* Collapsible extra images */}
          {showMobileImages && (
            <div className="flex flex-col gap-3">
              <img className="w-full rounded-md object-cover" src={img} alt="" />
              <img className="w-full rounded-md object-cover" src={img} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
