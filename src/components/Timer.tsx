import React, { useEffect, useState, useRef } from 'react';
import '../styles/Timer.css';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Timer: React.FC<{ className?: string }> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<HTMLDivElement | null>(null);

  const startTimer = () => {
    const targetDate = new Date('November 11, 2024 00:07:00').getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalRef.current!);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? '0' + days : days.toString(),
          hours: hours < 10 ? '0' + hours : hours.toString(),
          minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
          seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
        });
      }
    }, 1000);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const { clientX, clientY } = event;

    let DegreeOfRotationX = 20;
    let DegreeOfRotationY = 20;

    let xRotation: number;
    let yRotation: number;

    // Check which quadrant the mouse is in

    // Quadrant Style
    // if (clientX < width / 2 && clientY < height / 2) {
    //   // Up-Left Quadrant
    //   xRotation = -((clientY - height / 2) / height) * DegreeOfRotationX;
    //   yRotation = -((clientX - width / 2) / width) * DegreeOfRotationY;
    // } else if (clientX >= width / 2 && clientY < height / 2) {
    //   // Up-Right Quadrant
    //   xRotation = -((clientY - height / 2) / height) * DegreeOfRotationX;
    //   yRotation = ((clientX - width / 2) / width) * DegreeOfRotationY;
    // } else if (clientX < width / 2 && clientY >= height / 2) {
    //   // Down-Left Quadrant
    //   xRotation = ((clientY - height / 2) / height) * DegreeOfRotationX;
    //   yRotation = -((clientX - width / 2) / width) * DegreeOfRotationY;
    // } else if (clientX >= width / 2 && clientY >= height / 2) {
    //   // Down-Right Quadrant
    //   xRotation = ((clientY - height / 2) / height) * DegreeOfRotationX;
    //   yRotation = ((clientX - width / 2) / width) * DegreeOfRotationY;
    // }

    // Single Style

    xRotation = ((clientY - height / 2) / height) * DegreeOfRotationX;
    yRotation = -((clientX - width / 2) / width) * DegreeOfRotationY;

    const middleWidth = 0.3 * width;  // 20% of screen width
    const middleHeight = 0.2 * height + 20; // 20% of screen height
    const middleXStart = (width - middleWidth) / 2;
    const middleYStart = (height - middleHeight) / 2;

    // Check if mouse is in the middle area
    if (clientX > middleXStart && clientX < middleXStart + middleWidth &&
        clientY > middleYStart && clientY < middleYStart + middleHeight) 
        {
          // Middle area (no tilt or small tilt)
          xRotation = 0;
          yRotation = 0;
        }

    console.log(clientX,clientY);
    console.log(xRotation,yRotation);


    if (timerRef.current) {
      timerRef.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    }
    
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      timerRef.current.style.transform = 'rotateX(0) rotateY(0)';
    }
  };

  useEffect(() => {
    startTimer();

    // Add event listener for mouse movement across the window
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className={`timer ${className}`} 
      ref={timerRef}
    >
      <div className='timerTilt'>
        <section className='containerT'>
        <p className='descT'><small>Days</small></p>
          <p>{timeLeft.days}</p>
          
        </section>
        <span className='dividerT'>:</span>
        <section className='containerT'>
        <p className='descT'><small>Hours</small></p>
          <p>{timeLeft.hours}</p>
          
        </section>
        <span className='dividerT'>:</span>
        <section className='containerT'>
        <p className='descT'><small>Minutes</small></p>
          <p>{timeLeft.minutes}</p>
          
        </section>
        <span className='dividerT'>:</span>
        <section className='containerT'>
        <p className='descT'><small>Seconds</small></p>
          <p>{timeLeft.seconds}</p>
          
        </section>
        
      </div>
      <p className='T_ExtraBits'>Coming Soon</p>
    </div>
  );
};

export default Timer;
