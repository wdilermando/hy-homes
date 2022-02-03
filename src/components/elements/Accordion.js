import React from 'react';

export default function Accordion({ id, title, description }) {
  return (
    <div id={`accordionExample${id}`}>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id={`heading${id}`}>
          <button
            className="relative flex items-center w-full py-4 px-5 font-bold text-base text-gray-800 text-left bg-white border-0 rounded-md transition focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${id}`}
            aria-expanded={'true'}
            aria-controls={`collapse${id}`}
          >
            {title}
          </button>
        </h2>
        <div
          id={`collapse${id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${id}`}
          data-bs-parent={`#accordionExample${id}`}
        >
          <div className="accordion-body py-4 px-5">{description}</div>
        </div>
      </div>
    </div>
  );
}
