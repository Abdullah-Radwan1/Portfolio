"use client";
import React, { useState } from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted

    const form = e.target as HTMLFormElement;

    // Form data
    const data = {
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setErrorMessage(null);
      } else {
        throw new Error("Failed to send email. Please try again later.");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setLoading(false); // Reset loading to false after the request
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold  my-2">Let&apos;s Connect</h5>
        <p className=" mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Abdullah-Radwan1">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/abdullah-radwan-280140284/"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className=" block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <Input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className=" block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <Input
                name="message"
                id="message"
                required
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className={`bg-primary-500 hover:bg-primary-600 text-white  font-medium py-2.5 px-5 rounded-lg w-full ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <span className="ml-2">Sending...</span>
                  <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-current border-t-transparent"></div>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
