import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ScrollAnimationWrapper = ({ 
  children, 
  className = '', 
  animationType = 'fadeInUp' 
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const animationClasses = {
    fadeInUp: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    fadeInLeft: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
    fadeInRight: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
    fadeIn: isVisible ? 'opacity-100' : 'opacity-0',
    slideUp: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20',
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animationType] || animationClasses.fadeInUp} transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
