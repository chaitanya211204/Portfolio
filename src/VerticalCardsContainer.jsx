import React from 'react';

const Card = ({ title, description, imageUrl, demoLink }) => {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto p-6 md:p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl text-white">
      {imageUrl && (
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={imageUrl}
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              'https://placehold.co/400x200/cccccc/333333?text=Image+Not+Found';
          }}
        />
      )}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>

      {demoLink && (
        <div className="flex justify-end mt-4">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full bg-[#00adb5] text-white font-semibold shadow-md hover:bg-opacity-90 transition-colors duration-200"
          >
            Live Demo
          </a>
        </div>
      )}
    </div>
  );
};

const VerticalCardsContainer = () => {
  const cardData = [
    {
      title: 'AccessPro',
      description:
        'A Spring Boot and React-based HR management system with role-based access control, powered by a MySQL database.',
    },
    {
      title: 'Weather App',
      description:
        'A sleek weather app delivering accurate forecasts at your fingertips.Plan your day confidently with live updates and intuitive design.',
      demoLink: 'https://chaitanya211204.github.io/TempCheck/',
    },
    {
      title: 'Calculator',
      description:
        'A basic and scientific calculator built using html, css and JavaScript to perform mathematical and scientifc calculations.',
      demoLink: 'https://chaitanya211204.github.io/Calculator/',
    },
    {
      title: 'Map Navigator',
      description:
        'An interactive campus navigation web application built with HTML, CSS, and JavaScript. "Map Navigator" helps users easily find their way around campus, locating key buildings and points of interest with a clean, user-friendly interface.',
    },
    {
      title: 'Basic Chrome Extension',
      description:
        'A simple Chrome extension that greets the user with a "Hello!" message when clicked. It is a fun, lightweight tool designed to demonstrate basic extension functionality.',
    },
  ];

  return (
    <div className="flex flex-col gap-y-10 w-full max-w-4xl">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          demoLink={card.demoLink} // ✅ pass demoLink here
        />
      ))}
    </div>
  );
};

export default VerticalCardsContainer;
