import React from "react";
import { Users, Calculator, Briefcase } from "lucide-react";

const ForWhom = () => {
  const userTypes = [
    {
      icon: <Briefcase className="h-10 w-10 text-stashify-500" />,
      title: "Export Business Owners",
      description:
        "Run operations smoothly without the chaos. Get a bird's eye view of your inventory and streamline your processes.",
      features: [
        "Complete visibility of inventory",
        "Easier worker management",
        "Financial insights at a glance",
      ],
      delay: "0",
    },
    {
      icon: <Users className="h-10 w-10 text-stashify-500" />,
      title: "Workers",
      description:
        "Know your tasks and update progress with a tap. No more confusion about what needs to be done next.",
      features: [
        "Clear task assignments",
        "Simple progress updates",
        "Reduced miscommunication",
      ],
      delay: "100",
    },
    {
      icon: <Calculator className="h-10 w-10 text-stashify-500" />,
      title: "Bookkeepers",
      description:
        "Save hours with OCR and payment tracking. Simplify your billing and reconciliation processes.",
      features: [
        "Automated bill scanning",
        "Easy payment tracking",
        "Monthly financial reports",
      ],
      delay: "200",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-stashify-50 to-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-stashify-50 text-stashify-700 py-1 px-3 rounded-full text-sm font-medium inline-block mb-4 opacity-0 animate-fade-in">
            For Everyone
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in anim-delay-100">
            Built For You
          </h2>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in anim-delay-200">
            Stashify adapts to the needs of everyone involved in your inventory
            management process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <div
              key={index}
              className={`glass-card p-8 text-center opacity-0 animate-fade-in anim-delay-${user.delay}`}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-stashify-50">
                {user.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{user.title}</h3>
              <p className="text-gray-600 mb-6">{user.description}</p>

              <ul className="space-y-3 text-left">
                {user.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="h-5 w-5 text-stashify-500 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
