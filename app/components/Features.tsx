import React from "react";
import {
  Truck,
  BarChart,
  CreditCard,
  ScanLine,
  Clock,
  Activity,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-stashify-600" />,
      title: "Track Every Step",
      description:
        "Follow your items from raw material to packed product, with customizable stages.",
      delay: "0",
    },
    {
      icon: <Activity className="h-8 w-8 text-stashify-600" />,
      title: "Stay in the Know",
      description:
        "See where your batches are, who's working on them, and what's next—in real time.",
      delay: "100",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-stashify-600" />,
      title: "Bill with Ease",
      description:
        "Set per-piece prices, track payments, and keep finances clear.",
      delay: "200",
    },
    {
      icon: <ScanLine className="h-8 w-8 text-stashify-600" />,
      title: "Scan & Save Time",
      description:
        "Upload bills and let OCR pull out the details—no more manual entry.",
      delay: "300",
    },
    {
      icon: <BarChart className="h-8 w-8 text-stashify-600" />,
      title: "Know Your Numbers",
      description: "Get monthly summaries of work done and cash flow.",
      delay: "400",
    },
    {
      icon: <Clock className="h-8 w-8 text-stashify-600" />,
      title: "Save Precious Time",
      description:
        "Automate repetitive tasks and focus on growing your business.",
      delay: "500",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-stashify-50 text-stashify-700 py-1 px-3 rounded-full text-sm font-medium inline-block mb-4 opacity-0 animate-fade-in">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in anim-delay-100">
            Why Choose Stashify?
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in anim-delay-200">
            Designed with businesses in mind, Stashify simplifies complex
            inventory tasks with powerful features that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card opacity-0 animate-fade-in anim-delay-${feature.delay}`}
            >
              <div className="mb-4 p-3 rounded-full bg-stashify-50 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
