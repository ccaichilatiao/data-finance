import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaRegLightbulb,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto w-full py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="text-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          repudiandae ut sunt nulla unde placeat optio dolorem eius laudantium,
          rem vero accusamus in facilis exercitationem culpa dolore sit, illo
          iure?
        </p>
        <div className="flex my-6 justify-between md:w-[75%]">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaRegLightbulb size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="flex justify-between lg:col-span-2 mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">SUpport</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
            <li className="py-2 text-sm">Documentation</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
