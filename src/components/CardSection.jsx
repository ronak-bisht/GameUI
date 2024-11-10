"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
const ScrollableGameGrid = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={scrollRef}
        className="overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none scrollbar-hide"
        style={{
          scrollbarWidth: 'none',  /* Firefox */
          msOverflowStyle: 'none',  /* IE and Edge */
          WebkitOverflowScrolling: 'touch'
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div className="grid grid-rows-2  auto-cols-min grid-flow-col gap-4 px-4">
        {[...Array(15)].map((_, index) => (
              <div
                key={index}
                className=" w-[290px] px-[6px] py-[22px] h-[240px] frame-2"
              >
                <div className="w-full h-full  overflow-hidden">
                <Image
                  src="/images/game-card.png"
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="w-full h-full"
                  draggable='false'
                />
                </div>
               
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableGameGrid;