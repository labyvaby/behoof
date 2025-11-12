import React from 'react';
import './style.scss';

const CameraAutonomy: React.FC = () => {
  return (
    <div className="camera-autonomy">
      <h2 className="autonomy-title">Камера автономность</h2>
      <p className="autonomy-description">
     Другой фишкой Redmi Turbo 3 стала основная камера Sony LYT-600 разрешением 50 Мп. Она поддерживает оптическую стабилизацию, ночную съёмку, портретную съёмку и запись 4K-видео в 60 fps.
      </p>
      <div className="image-gallery">
        <div className="image-item">
          <img src="src/assets/images/CameraAutonomy/image2.png" alt="Outdoor camera use" />
          <span className="image-caption">Ночная</span>
        </div>
        <div className="image-item">
          <img src="src/assets/images/CameraAutonomy/img1.png" alt="Indoor camera use" />
          <span className="image-caption">Дневная</span>
        </div>
      </div>
    </div>
  );
};

export default CameraAutonomy;