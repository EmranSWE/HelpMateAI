import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const FooterPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      {/* <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          title="Embedded Video"
          src="https://www.loom.com/embed/22ff3b1f06da461b8a69608514154cda?sid=ad304f8a-4388-4bc9-9c71-22908b0d5fe5"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div> */}
      <div className="bg-[#192339] border-none text-white py-6">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            {/* <img src="your-logo.png" alt="Logo" className="mb-2 w-16 h-16 mx-auto"> */}
            <p className="text-xl my-3">HelpMateAI</p>
            <p className="text-sm font-mono">
              Empowering Innovation, Simplifying Solutions: Your Creativity
              Starts with HelpMateAI.
            </p>
            <div className="flex my-2">
              <Linkedin className="mx-2  rounded bg-blue-500"></Linkedin>
              <Instagram className="mx-2  rounded bg-pink-500"></Instagram>
              <Facebook className="mx-2  rounded bg-blue-500"></Facebook>
              <Youtube className="mx-2  rounded bg-red-500"></Youtube>
              <Twitter className="mx-2  rounded bg-blue-500"></Twitter>
            </div>
            <p className="text-center  py-2">
              &copy; {currentYear} HelpMateAI, Inc.
            </p>
          </div>

          <div className="w-full md:w-1/5 mb-4 md:mb-0 ">
            <h4 className="text-lg font-bold mb-3 ">Features</h4>
            <ul className="text-sm font-mono">
              <Link href="/conversation">
                <li>AI Conversation</li>
              </Link>
              <Link href="/image">
                <li>AI Image</li>
              </Link>
              <Link href="/code">
                <li>AI Code</li>
              </Link>
              <Link href="/music">
                <li>AI Music</li>
              </Link>
              <Link href="/music">
                <li>AI Video</li>
              </Link>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-3 ">Company</h4>
            <ul className="text-sm font-mono">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Legal</h4>
            <ul className="text-sm font-mono">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="w-full md:w-1/5">
            <h4 className="text-lg font-bold mb-2">Community</h4>
            <ul className="text-sm font-mono">
              <li>Roadmap</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
