"use client";
import { CheckCircle2, CreditCard } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const EarlyAccess = () => {
  const [currency, setCurrency] = useState("usd");

  const handleBuyNow = () => {
    toast.success("Taking you to checkout!", {
      description: "You're about to secure lifetime access to Stashify.",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* Constrain the width and center the section */}
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="opacity-0 animate-fade-in anim-delay-400">
          <div className="glass-card p-6 border-2 border-stashify-100 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <span className="inline-block bg-stashify-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                EARLY ACCESS OFFER
              </span>
              <h3 className="text-xl md:text-2xl font-bold">
                Get Lifetime Access
              </h3>
              <p className="text-gray-600">
                Limited time offer for early adopters
              </p>
            </div>

            {/* Currency Toggle with Fixed Sliding Effect */}
            <div className="flex justify-center mb-6">
              <div className="relative bg-gray-100 rounded-full p-1 inline-flex">
                {/* Sliding Background */}
                <div
                  className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
                    currency === "usd"
                      ? "translate-x-0"
                      : "translate-x-[calc(100%+4px)]"
                  }`}
                ></div>
                {/* USD Button */}
                <button
                  className={`relative z-10 px-4 py-1 rounded-full transition-colors duration-300 ${
                    currency === "usd"
                      ? "text-stashify-700 font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setCurrency("usd")}
                >
                  USD
                </button>
                {/* INR Button */}
                <button
                  className={`relative z-10 px-4 py-1 rounded-full transition-colors duration-300 ${
                    currency === "inr"
                      ? "text-stashify-700 font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setCurrency("inr")}
                >
                  INR
                </button>
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center">
                <span className="text-4xl font-bold text-stashify-700">
                  {currency === "usd" ? "$199" : "₹14,999"}
                </span>
                <span className="ml-2 text-gray-500 line-through">
                  {currency === "usd" ? "$499" : "₹39,999"}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                One-time payment, lifetime access
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                <span>All premium features included</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                <span>Free updates for life</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                <span>Priority support</span>
              </div>
            </div>

            {/* Improved Buy Button */}
            <button
              onClick={handleBuyNow}
              className="w-full py-3 bg-stashify-600 text-white rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-500 ease-in-out transform translate-x-0 hover:translate-x-2 hover:shadow-lg hover:bg-stashify-700 animate-slide-in anim-delay-600"
            >
              <CreditCard size={18} />
              Buy Now
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              30-day money-back guarantee. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
