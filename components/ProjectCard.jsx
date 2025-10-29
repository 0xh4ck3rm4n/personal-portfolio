import React from 'react';

const ProjectCard = ({ tag = 'DeFi', title, description, href = '#' }) => {
  return (
    <div className="relative w-full h-full min-h-[20rem] flex flex-col">
      {/* Badge top-left */}
      <div className="absolute left-4 top-4">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: 'linear-gradient(90deg, rgba(125,249,255,0.12), rgba(82,39,255,0.08))', color: '#7df9ff' }}
        >
          {tag}
        </span>
      </div>

      {/* Card content */}
      <div className="flex-1 flex flex-col justify-between p-6 pt-14">
        <div>
          <h4 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h4>
          <p className="text-sm text-white/80">{description}</p>
        </div>

        <div className="mt-6">
          <a
            href={href}
            className="inline-block px-4 py-2 bg-[#7df9ff] text-black font-medium rounded-lg shadow-sm hover:brightness-95"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
