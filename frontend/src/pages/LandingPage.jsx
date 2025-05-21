import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Modern <span className="text-indigo-300">Poll & Voting</span>{" "}
            Platform
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-3xl mx-auto">
            Create, manage, and analyze polls with our secure and intuitive
            voting system. Perfect for organizations, educators, and event
            planners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg"
            >
              Get Started
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to conduct secure and efficient voting
              processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="👥"
              title="User Management"
              description="Granular control over user roles and permissions for administrators, panelists, and voters."
            />
            <FeatureCard
              icon="📊"
              title="Custom Polls"
              description="Multiple question types including MCQs, ranking systems, and open-ended responses."
            />
            <FeatureCard
              icon="🔄"
              title="Lifecycle Coverage"
              description="End-to-end solution from poll creation to result analysis and reporting."
            />
            <FeatureCard
              icon="🔒"
              title="Secure Voting"
              description="Encrypted voting with audit trails to ensure integrity of your elections."
            />
            <FeatureCard
              icon="📱"
              title="Mobile Friendly"
              description="Fully responsive design works perfectly on any device."
            />
            <FeatureCard
              icon="📈"
              title="Real-time Analytics"
              description="Live results and comprehensive analytics dashboard."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-black ">
            Trusted by Organizations Worldwide
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="This platform revolutionized our student council elections. Setup was effortless and results were delivered instantly."
              author="Sarah Johnson"
              role="University Administrator"
            />
            <Testimonial
              quote="As a non-profit, we needed secure voting for our board elections. This system provided exactly what we needed at an affordable price."
              author="Michael Chen"
              role="Non-profit Director"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Voting Process?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of organizations using our platform for secure,
            efficient voting.
          </p>
          <Link
            to="/login"
            className="inline-block px-10 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition shadow-xl"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Voting System
            </h3>
            <p className="text-sm">
              The most secure and flexible platform for all your polling and
              voting needs.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Poll & Voting System. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Testimonial = ({ quote, author, role }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-700 italic mb-4">"{quote}"</p>
    <div className="font-semibold">{author}</div>
    <div className="text-sm text-gray-500">{role}</div>
  </div>
);

export default LandingPage;
