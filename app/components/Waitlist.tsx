"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { saveToWaitlist } from "@/app/services/waitlist";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) {
      toast.error("Please enter your name");
      return;
    }

    if (!phone) {
      toast.error("Please enter your phone number");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create the data object
      const waitlistData = {
        name,
        phone,
        ...(email && { email }),
        ...(company && { company }),
      };

      // Save via API service
      const result = await saveToWaitlist(waitlistData);

      if (result.success) {
        setIsSubmitted(true);
        toast.success("You've been added to our waitlist!", {
          description: "We'll notify you when Stashify is ready for you.",
        });

        // Reset form
        setName("");
        setPhone("");
        setEmail("");
        setCompany("");
      } else {
        toast.error(
          result.message || "Unable to join waitlist. Please try again."
        );
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Waitlist submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-stashify-100 rounded-full opacity-60 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 space-y-6">
              <span className="bg-stashify-50 text-stashify-700 py-1 px-3 rounded-full text-sm font-medium inline-block opacity-0 animate-fade-in">
                Join Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold opacity-0 animate-fade-in anim-delay-100">
                Ready to Simplify?
              </h2>
              <p className="text-lg text-gray-600 opacity-0 animate-fade-in anim-delay-200">
                Stop juggling spreadsheets and sticky notes. Let Stashify handle
                the heavy lifting so you can focus on growing your business.
              </p>

              <div className="space-y-4 opacity-0 animate-fade-in anim-delay-300">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-stashify-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Custom batch tracking</h4>
                    <p className="text-gray-500">
                      Define your own workflow stages
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-stashify-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Real-time updates</h4>
                    <p className="text-gray-500">
                      Always know where your inventory stands
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-stashify-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">OCR bill scanning</h4>
                    <p className="text-gray-500">
                      Say goodbye to manual data entry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 opacity-0 animate-fade-in anim-delay-400">
              {!isSubmitted ? (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    Join our waitlist
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Be among the first to experience Stashify when we launch.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stashify-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stashify-500 focus:border-transparent transition-all"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stashify-500 focus:border-transparent transition-all"
                        placeholder="your@email.com (optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stashify-500 focus:border-transparent transition-all"
                        placeholder="Your company (optional)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="stashify-button w-full flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By joining, you agree to our Terms of Service and Privacy
                      Policy
                    </p>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 shadow-sm text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Thank you for joining!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You&apos;ve been added to our waitlist. We&apos;ll notify
                    you as soon as Stashify is ready for you.
                  </p>
                  <button
                    className="text-stashify-600 font-medium hover:text-stashify-700"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Join with another number
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
