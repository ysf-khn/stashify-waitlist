"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { toast } from "sonner";
import { saveToWaitlist } from "@/app/services/waitlist";
import Image from "next/image";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await saveToWaitlist({
        name: "Hero Signup",
        phone: `email-${Date.now()}`,
        email,
      });

      if (result.success) {
        setIsSubmitted(true);
        toast.success("You've been added to our waitlist!", {
          description: "We'll notify you when Stashify is ready.",
        });
        setEmail("");
      } else {
        toast.error(
          result.message || "Failed to join waitlist. Please try again."
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-stashify-100 rounded-full opacity-60 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-blue-50 rounded-full opacity-60 filter blur-3xl animate-float anim-delay-300"></div>
        <div className="absolute top-1/3 left-[30%] w-40 h-40 bg-stashify-200 rounded-full opacity-30 filter blur-3xl animate-float anim-delay-600"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center">
          <div className="min-h-screen flex flex-col justify-center w-full max-w-2xl mx-auto space-y-8 py-20">
            <div className="inline-block mx-auto">
              <span className="bg-stashify-50 text-stashify-700 py-1 px-3 rounded-full text-sm text-center font-medium opacity-0 animate-fade-in">
                Inventory Management for Exporters
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center opacity-0 animate-fade-in anim-delay-100">
              Simplify Your Inventory. <br />
              <span className="text-stashify-600">Grow Your Business.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 opacity-0 animate-fade-in anim-delay-200">
              Take control of your inventory with Stashify - a smart, affordable
              tool designed for export businesses like yours. Track batches,
              manage workers, and handle billing - all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in anim-delay-300">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stashify-500 focus:border-transparent transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className="stashify-button flex items-center justify-center gap-2"
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
                </form>
              ) : (
                <div className="bg-white rounded-xl p-6 shadow-sm text-center flex flex-col items-center w-full">
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
                    Join with another email
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-8 mb-20 opacity-0 animate-fade-in anim-delay-500">
            <div className="glass-card p-6 md:p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-stashify-100 flex items-center justify-center">
                    <Image
                      src="/man0.jpg"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                      height={10}
                      width={10}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Dashboard Overview</h4>
                    <p className="text-sm text-gray-500">
                      Last updated just now
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Active Batches
                    </span>
                    <span className="text-sm font-medium">5 batches</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-stashify-500 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-stashify-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium">Batch #506</h5>
                      <p className="text-sm text-gray-500 mt-1">
                        500 pieces in production
                      </p>
                    </div>
                    <span className="text-sm text-stashify-600 font-medium px-2 py-1 bg-stashify-100 rounded-full">
                      In Progress
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Workers Active</p>
                    <p className="font-medium">8 workers</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">
                      Completed Today
                    </p>
                    <p className="font-medium">3 batches</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium">Recent Updates</h5>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-green-500 mt-1" />
                      <div>
                        <p className="text-gray-600">Batch #505 completed</p>
                        <p className="text-xs text-gray-500">10 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-green-500 mt-1" />
                      <div>
                        <p className="text-gray-600">
                          New order received: #507
                        </p>
                        <p className="text-xs text-gray-500">35 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
