import React, { useEffect, useState } from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleImages((prev) => {
        if (prev.length < data.length * 4) {
          return [...prev, prev.length];
        }
        clearInterval(timer);
        return prev;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);


  const data = [
    {
      title: "Palermo, Italy",
      dates: "24 - 26 Sep 2025 (Upcoming)",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Fintech Partner at The 21st Quantitative Finance Conference <a href="https://www.wbstraining.com/events/qfc/" target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"> Visit Now</a>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/Palermo/img01.png"
              alt="hero template"
              width="100%"
              height="100%"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/Palermo/img02.png"
              alt="hero template"
              width="100%"
              height="100%"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      )
    },
    {
      title: "QuantVision",
      dates: "22nd May 2025",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Sponsor at QuantVision 2025: Fordham's Quantitative Conference & Data Summit, Fordham University, Gabelli School of Business, Lincoln Center Campus
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/QuantVision/img01.jpg"
              alt="hero template"
              width="100%"
              height="100%"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/QuantVision/img02.jpg"
              alt="hero template"
              width="100%"
              height="100%"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      )
    },
    {
      title: "IIQC",
      dates: "16th May 2025",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Education Partners at LAQSA  Indian Institutional Quant Conference – Bengaluru Edition 2025
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/IIQC/img01.png"
              alt="hero template"
              width="100%"
              height="100%"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/IIQC/img02.png"
              alt="hero template"
              width="100%"
              height="100%"
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      )
    },
    {
      title: "NIT Tirchy",
      dates: "29 - 30 March  2025",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            2 days Workshop at NIT Trichy on Statistical Arbitrage and Quant finance careers
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/NITT/nit01.jpg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/NITT/nit02.jpg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/NITT/nit03.jpg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/NITT/nit04.jpg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      )
    },
    {
      title: "Columbia University",
      dates: "20 March 2025",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Quant Insider Sponsored Columbia Mathematics of Finance (MAFN) 2025 Future of Portfolio Management & Artificial Intelligence Conference.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/CI/ci01.jpeg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/CI/ci02.jpeg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/CI/ci03.jpg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/CI/ci04.jpg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      )
    },
    {
      title: "IISc Bangalore",
      dates: "3rd March 2025",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Quant Finance career and Market Making competition at IISC bangalore
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/IISC/IISC01.jpg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/IISC/IISC03.jpg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      )
    },
    {
      title: "IIT Kharagpur",
      dates: "9 Jan - 21 Jan 2025",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Quant Insider conducted Quant Quest (Algo Trading competition) at Kshitij Fest 2025 IIT Kharaghpur
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/IITKGP/kgp1.jpeg"
              alt="hero template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/IITKGP/kgp2.jpeg"
              alt="cards template"
              width={500}
              height={800}
              className="rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "BITS Pilani",
      dates: "November 2024",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Workshop on "Quant finance careers and Algo trading" at BITS Pilani HYD.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/BITS/bits1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/BITS/bits5.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/BITS/bits3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/BITS/bits4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "ISM Dhanbad",
      dates: "October 2024",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Workshop on "Introduction to quantitative finance" at IIT Dhanbad.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/ISMD/ism1.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/ISMD/ism2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/ISMD/ism5.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/ISMD/ism4.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "CHRIST University",
      dates: "April & July 2024",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Panelist at Christ University. Workshop at Christ Univeristy Bangalore on "Price Action Trading and technical analysis".
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/CH/ch1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/CH/ch2.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/CH/ch3.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/CH/ch4.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "IIT Delhi",
      dates: "March 2024",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Workshop at IIT Delhi on "Career in Quantiative Finance".
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/IITD/iitd1.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/IITD/iitd2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/IITD/iitd5.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/IITD/iitd4.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "IIT Madras",
      dates: "February 2024",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Workshop at IIT Madras on Statistical Arbitrate.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/IITM/iitm1.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/IITM/iitm2.JPG"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "BSE",
      dates: "January 2024",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
            Guest speakers at Option symposium, gave a session on 0DTE options trading at Bombay stock exchange.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./eventsection/BSE/bse1.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/BSE/bse2.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/BSE/bse3.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="./eventsection/BSE/bse4.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline
        data={data.map((item, index) => ({
          ...item,
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
                {item.content.props.children[0].props.children}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {React.Children.map(item.content.props.children[1].props.children, (child, imageIndex) =>
                  React.cloneElement(child, {
                    className: `${child.props.className} transition-opacity duration-1000 ${visibleImages.includes(index * 4 + imageIndex) ? 'opacity-100' : 'opacity-0'}`,
                  })
                )}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
}
