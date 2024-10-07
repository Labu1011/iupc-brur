// components/GoogleMapEmbed.js
import React from "react"
import SectionHeader from "./header"

const GoogleMapEmbed = () => {
  return (
    <div className=" w-full space-y-12 lg:space-y-20">
      <div className="w-full h-20 lg:h-44"></div>

      <SectionHeader
        title={
          <>
            <span className="text-white opacity-30">{"Brur::"}</span>
            <span>Location</span>
            <span className="text-white opacity-30">{".find()"}</span>
          </>
        }
        subtitle={
          <>
            Easily find your way to the competition venue or{" "}
            <br className="hidden lg:block" /> join us remotely with clear and
            simple location details.
          </>
        }
      />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.6671564802205!2d89.25778217604302!3d25.715442077381006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32d9bb08522bb%3A0x83741b8b6c8ee4ee!2sBegum%20Rokeya%20University%2C%20Rangpur!5e0!3m2!1sen!2sbd!4v1727672099085!5m2!1sen!2sbd"
        width="100%"
        height="400"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default GoogleMapEmbed
