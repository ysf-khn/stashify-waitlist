import React from "react";
import { CreditCard } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 md:py-20 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-stashify-600 to-stashify-800 bg-clip-text text-transparent">
                Stashify
              </span>
            </Link>
            <p className="text-gray-500 max-w-sm">
              Simplify your inventory management and grow your business with
              Stashify.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-stashify-600">
                Privacy Policy
              </Link>
              <span className="hidden md:inline">•</span>
              <Link
                href="/terms-of-service"
                className="hover:text-stashify-600"
              >
                Terms of Service
              </Link>
              <span className="hidden md:inline">•</span>
              <Link href="/refund-policy" className="hover:text-stashify-600">
                Refund Policy
              </Link>
              <span className="hidden md:inline">•</span>
              <a
                href="mailto:hello@weekendlabs.in"
                className="hover:text-stashify-600"
              >
                Contact
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              © {new Date().getFullYear()} Stashify. All rights reserved.
            </p>

            <a
              href="#early-access"
              className="mt-4 inline-flex items-center px-6 py-2 rounded-full bg-stashify-50 text-stashify-600 hover:bg-stashify-100 transition-colors font-medium gap-2 border border-stashify-100"
            >
              <CreditCard size={16} />
              Get lifetime access for $199
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
