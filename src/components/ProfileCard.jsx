import React from "react";

function ProfileCard() {
  return (
    <div className=" bg-primary text-secondary text-center p-6 shadow-xl space-y-4 border border-secondary/30 h-[80vh] w-[24%] rounded-3xl">
      <img
        src="/profileImage.png"
        alt="Profile"
        style={{
          filter: "drop-shadow(1px 1px 20px rgba(0, 0, 255))",
        }}
      />

      <h1 className="text-3xl font-bold tracking-wide">Dharamraj Pd. Yadav</h1>
      <p className="text-lg font-medium text-secondary/80">
        <a
          href="mailto:dpy9572@gmail.com"
          className=" hover:text-accent transition-colors"
        >
          dpy9572@gmail.com
        </a>
      </p>
      <p className="text-lg text-secondary/80">
        I’m a final-year BCA student skilled in full-stack development, DSA, and
        AI tools, passionate about building scalable and interactive web
        applications.
      </p>
    </div>
  );
}

export default ProfileCard;
