import React from 'react';
import './style.scss';

const Global: React.FC = () => {
  const stats = [
    { number: '5', text: 'Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc.' },
    { number: '30', text: 'Gravida vel convallis id aliquet volutpat nullam dignissim. Amet parturient elementum lectus rhoncus at.' },
    { number: '300', text: 'Sed varius ut venenatis id amet et consectetur pellentesque. Vitae uo ornare vel suspendisse tincidunt.' },
    { number: '8', text: 'Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing feugiat quis convollis velit.' }
  ];

  return (
    <section className="goals-section">
      <h2 className="goals-title">
        Наша цель — создать фантастический <br /> сервис для всех потенциальных
      </h2>
      <div className="stats-container">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-number">{stat.number}</span>
            <p className="stat-description">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Global;
