"use client";
import PageWrapper from "@/components/PageWrapper";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import ContactInfo from "@/components/ContactInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Form validation (all fields required)
  const isFormValid =
    formData.firstname.trim() !== "" &&
    formData.lastname.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.service.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (e) => {
    // handle form submission
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    try {
      console.log("Form submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate server delay
      setSubmitStatus("success");
      //clear form data after successful submission
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        service: "",
        message: "",
      });
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden !scrollbar !scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible py-20 xl:py-0">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-12 items-center">
            {/* text */}
            <div className="flex-1 w-full xl:w-[600px] flex flex-col gap-8">
              <div>
                <h2 className="h2 mb-4">
                  Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[450px]">
                  Looking for a developer/designer to bring your ideas to life?
                  Contact me to discuss your project, request a quote, or
                  explore how we can work together.
                </p>
              </div>
              <div>
                <ContactInfo direction="column" />
              </div>
            </div>
            {/* form */}
            <div className="flex-1 w-full">
              <form
                className="flex flex-col gap-4 xl:gap-6 items-start"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="name">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      value={formData.firstname}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="name">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="info@gmail.com"
                    required
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="service">I am interested in</Label>
                  <Select
                    name="service"
                    value={formData.service}
                    onValueChange={(e) =>
                      setFormData((s) => ({ ...s, service: e }))
                    }
                    required
                  >
                    <SelectTrigger
                      className="h-9 xl:!h-12 w-full bg-white/5 border-white/10 px-3"
                      id="service"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="UI Develoepr">UI Develoepr</SelectItem>
                      <SelectItem value="Front End Developer">
                        Front End Developer
                      </SelectItem>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="min-h-[100px] xl:min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent
                    focus-visible:ring-accent focus-visible:ring-[.5px] resize-none p-3 selection:bg-accent placeholder-text-white/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`btn btn-sm btn-teriary ${
                    !isFormValid || isSubmitting
                      ? "opacity-50 cursor-not-allowed! pointer-events-none"
                      : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Send Message</span>
                        <IoArrowForwardCircleOutline className="text-xl" />
                      </div>
                    )}
                  </div>
                </button>
              </form>
              {submitStatus === "success" && (
                <div className="mt-4 p-3 bg-green-900/30 text-green-400 rounded-md border border-green-800">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Message sent successfully!
                  </div>
                </div>
              )}
              {setSubmitStatus === "error" && (
                <div className="mt-4 p-3 bg-red-900/30 text-red-400 rounded-md border border-red-800">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Error sending message. Please try again later.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <Label htmlFor="email">Your email address</Label>
        <Input type="email" id="email" />
        <Label htmlFor="email">Your email address</Label>
        <Textarea /> */}
      </div>
    </PageWrapper>
  );
};

export default Contact;
