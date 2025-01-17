import  { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";
import image3 from "../assets/P1430669.jpg"
import image4 from "../assets/P1430795.jpg"
import image5 from "../assets/Photo1.jpg"
import image7 from "../assets/LINE_ALBUM_RABES 2_241226_1.jpg"
import image8 from "../assets/LINE_ALBUM_RABES 3_241226_1.jpg"

function MultipleItems() {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    if (!trackRef.current) return;

    const clientX = (e as MouseEvent).clientX ?? (e as TouchEvent).touches[0].clientX;
    trackRef.current.dataset.mouseDownAt = clientX.toString();
  };

  const handleOnUp = () => {
    if (!trackRef.current) return;

    trackRef.current.dataset.mouseDownAt = "0";
    trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage ?? "0";
  };

  

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    if (!trackRef.current || trackRef.current.dataset.mouseDownAt === "0") return;

    const clientX = (e as MouseEvent).clientX ?? (e as TouchEvent).touches[0].clientX;
    const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt!) - clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(trackRef.current.dataset.prevPercentage ?? "0") + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.dataset.percentage = nextPercentage.toString();

    trackRef.current.animate(
      {
        transform: `translate(${nextPercentage}%, 0%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of trackRef.current.getElementsByClassName("image") as HTMLCollectionOf<HTMLElement>) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  useEffect(() => {
    let direction = -1; // Start by scrolling left
    const autoScroll = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
  
      // Get the current percentage
      const currentPercentage = parseFloat(track.dataset.percentage ?? "0");
  
      // Determine if the screen is mobile and adjust the limits
      const isMobile = window.innerWidth <= 768; // You can adjust this value based on your breakpoints
      let leftLimit = isMobile ? -125 : -30; // Larger left limit for mobile
      let rightLimit = isMobile ? 5 : 5; // Larger right limit for mobile
  
      // Incrementally scroll the track
      let nextPercentage = currentPercentage + direction; // Scroll in the current direction
  
      // If the track has reached the left limit, switch to scrolling right
      if (nextPercentage <= leftLimit) {
        direction = 1; // Change direction to scroll right
        nextPercentage = leftLimit; // Don't go beyond the leftmost position
      }
  
      // If the track has reached the right limit, switch to scrolling left
      if (nextPercentage >= rightLimit) {
        direction = -1; // Change direction to scroll left
        nextPercentage = rightLimit; // Don't go beyond the rightmost position
      }
  
      // Apply the new scroll position
      track.dataset.percentage = nextPercentage.toString();
  
      // Smooth animation duration (increased duration for smoothness)
      track.animate(
        {
          transform: `translate(${nextPercentage}%, 0%)`,
        },
        {
          duration: isMobile ? 600 : 1200, // Increased duration for smoothness
          fill: "forwards",
          easing: "ease-in-out", // Smooth easing function
        }
      );
  
      // Animate images to adjust their object position
      for (const image of track.getElementsByClassName("image") as HTMLCollectionOf<HTMLElement>) {
        const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px
        const movementFactor = isMobile ? 120 : 100; // Reduce the movement for mobile
      
        image.animate(
          {
            objectPosition: `${movementFactor + nextPercentage}% center`, // Use smaller movement for mobile
          },
          {
            duration: 500, // Increased duration for smoothness
            fill: "forwards",
            easing: "ease-in-out", // Smooth easing function
          }
        );
      }
    }, 90); // Auto-scroll every 90ms
  
    return () => clearInterval(autoScroll);
  }, []);
  

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => handleOnDown(e);
    const handleMouseUp = () => handleOnUp();
    const handleMouseMove = (e: MouseEvent) => handleOnMove(e);
    const handleTouchStart = (e: TouchEvent) => handleOnDown(e);
    const handleTouchEnd = () => handleOnUp();
    const handleTouchMove = (e: TouchEvent) => handleOnMove(e);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div id="image-track" ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0">
      {/* <img className="image" src={image1} draggable="false" />
      <img className="image" src={image2} draggable="false" /> */}
      <img className="image" src={image3} draggable="false" />
      <img className="image" src={image4} draggable="false" />
      <img className="image" src={image5} draggable="false" />
      {/* <img className="image" src={image6} draggable="false" /> */}
      <img className="image" src={image7} draggable="false" />
      <img className="image" src={image8} draggable="false" />
    </div>
  );
}

export default MultipleItems;
