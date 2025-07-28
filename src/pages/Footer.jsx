import React from "react";

function Footer() {
  return (
    <div className="h-[40vh] bg-secondary rounded-t-[12vw] px-10 py-12 text-primary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold">Dharamraj Prasad Yadav</h3>
          <p className="text-xl">dpy9572@gmail.com.com</p>
          <p className="text-xl">Downloalg Reume</p>
        </div>

        <div className="flex flex-col gap-2">
          <a href="/projects" className="text-lg font-medium hover:underline">
            All Projects
          </a>
          <a href="/about" className="text-lg font-medium hover:underline">
            About
          </a>
          <a href="/blog" className="text-lg font-medium hover:underline">
            Blog
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <a href="/contact" className="text-xl font-medium hover:underline">
            Contact
          </a>
          <a href="/login" className="text-xl font-medium hover:underline">
            Login
          </a>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Dharamraj82"
              target="_blank"
            >
              <i className="devicon-github-original text-xl hover:opacity-80"></i>
            </a>
            <a
              href="https://linkedin.com/in/dharamraj82"
              target="_blank"
            >
              <i className="devicon-linkedin-plain text-xl hover:opacity-80"></i>
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
            >
              <i className="devicon-twitter-original text-xl hover:opacity-80"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-md mt-10 text-primary/50">
        © {new Date().getFullYear()} Dharamraj Pd Yadav. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
