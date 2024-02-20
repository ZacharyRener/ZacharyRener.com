import { useEffect, useRef } from 'react';

const ParallaxContent = ({ children, background, options }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Dynamically import simpleParallax without SSR
      import('simple-parallax-js').then((SimpleParallaxModule) => {
        const simpleParallax = SimpleParallaxModule.default ? SimpleParallaxModule.default : SimpleParallaxModule;
        new simpleParallax(contentRef.current, {
          ...options,
        });
      });
    }
  }, [options, background]);

  return (
    <div ref={contentRef} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      {children}
    </div>
  );
};

export default ParallaxContent;
