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
      <h3 className="text-3xl font-bold mb-2 text-[#00adb5]">{title}</h3>
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
        'A full-stack HR Management System designed to simplify and automate employee management processes within an organization. The application provides role-based access (Admin & Employee), ensuring secure and efficient handling of employee data, payroll, attendance, and project tracking.',
      demoLink: "https://github.com/chaitanya211204/User-management-System"
    },
    {
      title: 'Map Navigator',
      description:
        'An interactive campus navigation web application built with HTML, CSS, and JavaScript. "Map Navigator" helps users easily find their way around campus, locating key buildings and points of interest with a clean, user-friendly interface.',
      demoLink: "https://github.com/chaitanya211204/MAP-NAVIGATOR",
    },
    {
      title: 'Weather App',
      description:
        'A Weather Application that provides real-time weather updates for any city worldwide. The app integrates with an external weather API to fetch live data, including temperature, humidity, wind speed, and forecasts. Built with a modern frontend for seamless user experience, it ensures fast performance and accurate information delivery.',
      demoLink: 'https://chaitanya211204.github.io/TempCheck/',
    }
  ];

  return (
    <div className="flex flex-col gap-y-10 w-full max-w-4xl">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          demoLink={card.demoLink}
        />
      ))}
    </div>
  );
};

export default VerticalCardsContainer;
