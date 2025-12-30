import React, { useEffect, useState } from 'react';
import './style.scss';

interface ProcessorItem {
  id: number;
  text: string;
}

const ProcessorSpec: React.FC = () => {
  const [specs, setSpecs] = useState<ProcessorItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4091/processor")
      .then(res => res.json())
      .then(data => setSpecs(data));
  }, []);

  return (
    <div className="processor-spec">
      <h2 className="spec-title">Процессор</h2>

      <div className="spec-content">
        {specs.map(item => (
          <p key={item.id} className="spec-item">
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProcessorSpec;
