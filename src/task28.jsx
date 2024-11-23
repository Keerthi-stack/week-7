import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt, placeholder, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } 
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : placeholder} // Load actual image only if visible
      alt={alt}
      className={className}
    />
  );
};

const App = () => {
  const placeholder = "path/to/placeholder-image.jpg"; // Placeholder image

  return (
    <div>
      <h1>Lazy Loading Images</h1>
      <div style={{ height: "1000px" }}>Scroll down to load the image</div>
      <LazyImage
        src="path/to/your/actual-image.jpg"
        placeholder={placeholder}
        alt="A beautiful view"
        className="lazy-image"
      />
    </div>
  );
};

export default App;