import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create a Batch",
      description:
        "Add your items and define your process (e.g., polishing, packing).",
      delay: "0",
    },
    {
      number: "02",
      title: "Assign Workers",
      description: "Put your team to work and track their progress.",
      delay: "100",
    },
    {
      number: "03",
      title: "Manage Costs",
      description: "Set prices per piece and mark payments as they come in.",
      delay: "200",
    },
    {
      number: "04",
      title: "Review & Grow",
      description: "Check simple reports to see what's working.",
      delay: "300",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-stashify-50 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-stashify-100 rounded-full opacity-60 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="space-y-6 max-w-lg">
              <span className="bg-stashify-50 text-stashify-700 py-1 px-3 rounded-full text-sm font-medium inline-block opacity-0 animate-fade-in">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold opacity-0 animate-fade-in anim-delay-100">
                How Stashify Works
              </h2>
              <p className="text-lg text-gray-600 opacity-0 animate-fade-in anim-delay-200">
                No complicated setup, no steep learning curve—just results. Get
                up and running in minutes with our intuitive workflow.
              </p>

              <div className="space-y-8 mt-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 opacity-0 animate-fade-in anim-delay-${step.delay}`}
                  >
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-stashify-600 text-white flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 opacity-0 animate-fade-in anim-delay-400">
                <a
                  href="#waitlist"
                  className="stashify-button inline-flex items-center gap-2"
                >
                  Join Waitlist
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 opacity-0 animate-fade-in anim-delay-300">
            <div className="glass-card p-6 md:p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-stashify-100 flex items-center justify-center">
                    <Image
                      src="/10.jpg"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                      height={10}
                      width={10}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Batch #303-A</h4>
                    <p className="text-sm text-gray-500">Created 2 days ago</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-stashify-500 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-medium">Current Stage: Polishing</h5>
                  <div className="bg-stashify-50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <svg
                            className="w-6 h-6 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2a5 5 0 100 10 5 5 0 000-10zM4 20a8 8 0 1116 0H4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">Amit K.</span>
                      </div>
                      <span className="text-sm text-stashify-600 font-medium">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Items</p>
                    <p className="font-medium">500 pieces</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Next Stage</p>
                    <p className="font-medium">Quality Check</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-medium">Completed Stages</h5>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-gray-600">Material Selection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-gray-600">Cutting</span>
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

export default HowItWorks;
