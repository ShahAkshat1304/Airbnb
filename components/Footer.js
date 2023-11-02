import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-16 bg-gray-100 text-gray-600">
      <div className="text-xs space-y-4">
        <h3 className="font-bold">ABOUT</h3>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="text-xs space-y-4">
        <h3 className="font-bold">COMMUNITY</h3>
        <p>Accessiblity</p>
        <p>This is not a real site</p>
        <p>It's pretty awesome clone</p>
        <p>Referrals Acceptef</p>
        <p>Papafam</p>
      </div>
      <div className="text-xs space-y-4">
        <h3 className="font-bold">HOST</h3>
        <p>Papareact</p>
        <p>Presents</p>
        <p>Zero To Full Stack Hero</p>
        <p>Hundreds Of Students</p>
        <p>Join Now</p>
      </div>
      <div className="text-xs space-y-4">
        <h3 className="font-bold">SUPPORT</h3>
        <p>Helpcenter</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube </p>
        <p>Easter Eggs</p>
        <p>For The Win</p>
      </div>
    </div>
  );
};

export default Footer;
