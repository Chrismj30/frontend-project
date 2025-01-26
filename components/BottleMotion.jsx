'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function BottleAnimation() {
  const lidControls = useAnimation(); // Controls the lid animation
  const bottleControls = useAnimation(); // Controls the bottle movement
  const circleControls = useAnimation(); // Controls the circle animation
  const buttonControls = useAnimation(); // Controls the button animation
  const iconControls = useAnimation(); // Controls the side icons
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    const bottleHeight = 600; // Height of the bottle image
    const lidHeight = 75; // Height of the lid image
    const maxLidHeight = -130; // Maximum height the lid can go
    const bottleDropOffset = 240; // Amount the bottle base moves down
    const scrollDuration = 2000; // Duration for the scroll

    // Ensure the page height is enough for the animation
    document.body.style.height = `${window.innerHeight + bottleHeight + lidHeight}px`;

    let lastScrollTop = window.scrollY; // Track the last scroll position

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollDirection = currentScrollTop > lastScrollTop ? "down" : "up";

      if (scrollDirection === "up") {
        setScrollingUp(true);

        // Animate lid opening
        lidControls.start({
          y: maxLidHeight,
          transition: { duration: 1 },
        });

        // Keep bottle base slightly down
        bottleControls.start({ y: bottleDropOffset, transition: { duration: 1 } });

        // Show the circle image, text, and button
        circleControls.start({ opacity: 1, transition: { duration: 0.5 } });
        buttonControls.start({ opacity: 1, transition: { duration: 0.5 } });
        document.getElementById("text").style.opacity = 1;
      } else {
        setScrollingUp(false);

        // Animate lid closing
        lidControls.start({ y: 595, transition: { duration: 1 } }); // Lid closed

        // Animate bottle moving down
        bottleControls.start({ y: bottleHeight, transition: { duration: 1 } });

        // Hide the circle image, text, and button
        circleControls.start({ opacity: 0, transition: { duration: 0.5 } });
        buttonControls.start({ opacity: 0, transition: { duration: 0.5 } });
        document.getElementById("text").style.opacity = 0;
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    const initialAnimation = async () => {
      // Animate lid opening and bottle dropping
      await Promise.all([
        lidControls.start({
          y: maxLidHeight,
          transition: { duration: 2 },
        }),
        bottleControls.start({
          y: bottleDropOffset,
          transition: { duration: 2 },
        }),
        iconControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 2 }, // Same transition as circle and text
        }),
      ]);
    
      // Show the circle image, welcome text, and button
      circleControls.start({ opacity: 1, transition: { duration: 0.5 } });
      buttonControls.start({ opacity: 1, transition: { duration: 0.5 } });
      document.getElementById("text").style.opacity = 1;
    
      // Wait for 1.5 seconds for visibility, and then hide elements
      await new Promise((res) => setTimeout(res, 1500)); // Wait for text display
    
      // Hide the circle image, text, and button after delay
      circleControls.start({ opacity: 0, transition: { duration: 0.5 } });
      buttonControls.start({ opacity: 0, transition: { duration: 0.5 } });
      document.getElementById("text").style.opacity = 0;
    
      // Automated scroll down after the initial animation
      const startTime = performance.now();
    
      const scrollDown = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / scrollDuration, 1);
    
        // Smooth scroll simulation
        window.scrollTo({
          top: progress * window.innerHeight,
          behavior: "instant", // Immediate positioning to match the animation
        });
    
        // Animate bottle and lid based on scroll progress
        bottleControls.set({ y: progress * (bottleHeight - bottleDropOffset) + bottleDropOffset });
        lidControls.set({ y: maxLidHeight + progress * 445 }); // 445 = (295 - maxLidHeight)
    
        // Move the icons up without fading
        iconControls.set({ y: progress * -300, opacity: 1 });
    
        if (progress < 1) {
          requestAnimationFrame(scrollDown);
        }
      };
    
      requestAnimationFrame(scrollDown);
    };
    
    

    // Perform the initial animation sequence
    initialAnimation();

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lidControls, bottleControls, circleControls, buttonControls, iconControls]);

  return (
    <div>
      {/* Fullscreen container for Bottle Animation */}
      <div
        style={{
          height: "calc(100vh + 800px)", // Extend height to fit the bottle
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          top: 0, // Adjust top to prevent unnecessary offset
          zIndex: 10, // Ensure it stays above other sections
        }}
      >
        {/* Animated Lid */}
        <motion.div
          animate={lidControls} // Animate lid
          initial={{ y: 0 }} // Start at closed position
          style={{
            position: "absolute",
            top: 150, // Adjust lid's initial position to prevent overlap with navbar
            zIndex: 10, // Lid should have the highest z-index to stay on top
            overflow: "visible", // Ensure lid doesn't get clipped
          }}
        >
          <img
            src="/bottle-lid.jpg"
            alt="Bottle Lid"
            width={150}
            height={75}
          />
        </motion.div>

        {/* Side Icons */}
        <motion.img
  animate={iconControls}
  initial={{ y: 0, opacity: 0 }} // Start with `top` position
  src="/icon1.jpg" // Replace with your actual path
  alt="Left Icon"
  style={{
    position: "absolute",
    top: 520, // Place at the upper side
    left: 30,
    width: "80px",
    height: "80px",
    zIndex: 9,
  }}
/>


<motion.img
  animate={iconControls}
  initial={{ y: 0, opacity: 0 }} // Start with `top` position
  src="/icon2.jpg" // Replace with your actual path
  alt="Right Icon"
  style={{
    position: "absolute",
    top: 520, // Place at the upper side
    right: 30,
    width: "80px",
    height: "80px",
    zIndex: 9,
  }}
/>

        {/* Circle Image */}
        <motion.img
          animate={circleControls}
          initial={{ opacity: 0 }}
          src="/circle.jpg" // Replace with the correct path to your circle image
          alt="Circle Animation"
          style={{
            position: "absolute",
            width: "480px", // Adjust size as needed
            height: "480px",
            top: 100, // Position it between the lid and the base
            zIndex: 5, // Circle is behind the bottle and text
          }}
        />

        {/* Bottle Base */}
        <motion.div
          animate={bottleControls} // Animate bottle movement
          initial={{ y: 0 }}
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 6, // Bottle should be above the circle
            top: 140,
          }}
        >
          <img
            src="/bottle-base.jpg"
            alt="Bottle Base"
            width={150}
            height={300}
          />
        </motion.div>

        {/* Text during animation */}
        <div
          id="text"
          style={{
            position: "absolute",
            fontFamily: "Familjen Grotesk",
            fontSize: "100px",
            fontWeight: 600,
            lineHeight: "100px",
            letterSpacing: "0.02em",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "black",
            opacity: 0, // Initially hidden
            transition: "opacity 0.5s",
            top: 150, // Adjusted to stay in the space between lid and base
            zIndex: 7, // Ensure text is above the circle and bottle
          }}
        >
          The Ultimate Companion for Hydration
        </div>

        {/* Button */}
        <motion.div
          animate={buttonControls}
          initial={{ opacity: 0 }}
          style={{
            position: "absolute",
            top: 350,
            zIndex: 8,
          }}
        >
          <button
            className="text-white bg-blue-500 rounded-lg hover:bg-blue-600 px-6 py-3 font-medium text-lg transition duration-300 ease-in-out"
          >
            Inquiry now
          </button>
        </motion.div>
        <div
          style={{
            position: "absolute",
            top: 680,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1, // Ensure the background is behind all other elements
            width: '100%',
            height: '50%',
          }}
        >
          <Image
            src="/bottle-bg.jpg"
            alt="Background Image"
            layout="fill" // Make image cover the container
            objectFit="cover" // Ensure image covers the area
            objectPosition="center top" // Adjust the image position
          />
        </div>

        

      </div>
    </div>
  );
}
