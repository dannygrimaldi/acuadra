import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/index.css';

const TypingTitle = () => {
  const [showCursor, setShowCursor] = useState(true);

  const handleInit = (typewriter) => {
    typewriter
      .typeString('App')
      .pauseFor(1000)
      .deleteAll()
      .typeString('cuadra')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Cuadra App')
      .start()
  };
  const handleComplete = () => {
    setShowCursor(false);
  };

  return (
    <div className="text-2xl font-bold">
      <Typewriter options={{ loop: false }}
        onInit={handleInit}
        onComplete={handleComplete} />
    </div>
  );
};

export default TypingTitle;
