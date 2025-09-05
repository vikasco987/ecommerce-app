// src/app/contact/page.tsx
"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-center text-gray-700 max-w-3xl mb-12">
        We are here to help! Reach out to Do Health Gyan Head Office for any queries related to our products and services.
      </p>

      {/* Contact Details Card */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-12 grid gap-8 md:grid-cols-2">
        {/* Head Office Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Head Office</h2>
          <div className="flex items-start gap-2 mb-2">
            <MapPin size={20} className="text-green-600" />
            <p>
              Near Lic Office Pilibhit<br />
              Pin 262001
            </p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Phone size={20} className="text-green-600" />
            <p>9557340899</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={20} className="text-green-600" />
            <p>aushdhiviraat77@gmail.com</p>
          </div>
        </div>

        {/* Product Range */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Range</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>AYURVED</li>
            <li>Agricultural products</li>
            <li>Cattle feed</li>
            <li>SMART AYURVEDA</li>
            <li>STATIONARY</li>
          </ul>
        </div>
      </div>

      {/* Discover Section */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Discover</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
          <div>About us</div>
          <div>Director Message</div>
          <div>Our Vision</div>
          <div>Our Mission</div>
          <div>Banker</div>
          <div>Legals</div>
          <div>Downloads</div>
          <div>Registration</div>
        </div>
      </div>

      {/* Policies Section */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
          <div>Disclaimer</div>
          <div>Shipping Policy</div>
          <div>Terms and conditions</div>
          <div>Buyback Policy</div>
          <div>Privacy Policy</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm mb-8">
        Copyright © 2025 Aushdhi Viraat | All Rights Reserved.
      </footer>
    </main>
  );
}
