import React from "react";
import ShinyButton from "./ui/shiny-button";
import { Button } from "./ui/button";

const JobCard = ({ job }) => {
  return (
    <div className="p-5 rounded-lg shadow-lg bg-white/10 backdrop-blur-lg border border-black w-full max-w-md">
      {/* Job Title */}
      <h3 className="text-2xl font-extrabold gradient-title">{job.title}</h3>
      
      {/* Company Name */}
      <p className="text-base font-serif font-bold text-gray-900">{job.company}</p>

      {/* Location & Category */}
      <div className="text-sm text-gray-900 mt-2">
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Category:</strong> {job.category}</p>
      </div>

      {/* Divider */}
      <hr className="border-gray-900/30 my-3" />

      {/* Description */}
      <p className="text-gray-900 text-sm">{job.description}</p>

      <div className="pt-5 flex justify-end">
        <Button>Apply</Button>
      </div>
    </div>
  );
};

export default JobCard;
