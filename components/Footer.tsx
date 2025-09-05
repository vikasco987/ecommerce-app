"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-50 via-sky-100 to-cyan-50 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Do Health Gyan</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-sky-600 mt-1 shrink-0" />
              <span>
                <strong>Head Office :</strong>
                <br />
                Near Lic Office
                <br />
                Pilibhit Pin 262001
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-sky-600 shrink-0" />
              <span>9557340899</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-sky-600 shrink-0" />
              <span>aushdhiviraat77@gmail.com</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-3 mt-4 flex-wrap">
            <a
              href="#"
              className="p-2 rounded-full bg-white shadow hover:text-sky-600 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white shadow hover:text-sky-600 transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white shadow hover:text-sky-600 transition"
            >
              <Youtube size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white shadow hover:text-sky-600 transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Product Range */}
        <div>
          <h2 className="text-lg font-bold mb-4">Product Range</h2>
          <ul className="space-y-2 text-sm">
            <li>AYURVED</li>
            <li>Agricultural products</li>
            <li>Cattle feed</li>
            <li>SMART AYURVEDA</li>
            <li>STATIONARY</li>
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h2 className="text-lg font-bold mb-4">Discover</h2>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Director Message</li>
            <li>Our Vision</li>
            <li>Our Mission</li>
            <li>Banker</li>
            <li>Legals</li>
            <li>Downloads</li>
            <li>Registration</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-lg font-bold mb-4">Policies</h2>
          <ul className="space-y-2 text-sm">
            <li>Disclaimer</li>
            <li>Shipping Policy</li>
            <li>Terms and conditions</li>
            <li>Buyback Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-200 mt-10 pt-4 text-center text-sm text-gray-600">
        Copyright © {new Date().getFullYear()} Aushdhi Viraat | All Rights Reserved.
      </div>
    </footer>
  );
}



//ghjikojnkhggfhjjk