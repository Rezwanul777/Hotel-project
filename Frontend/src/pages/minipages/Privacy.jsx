import React from 'react'


 import privacyBg from '../../assets/privacy.jpg'; 

const Privacy = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Banner Section */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${privacyBg})` }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg">Privacy Policy</h1>
      </div>

      {/* Privacy Policy Content */}
      <div className="container mx-auto my-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Commitment to Your Privacy</h2>
        <p className="text-gray-600 mb-4">
          Welcome to our privacy policy page for "Hotels with Rooftop Pools." We are committed to protecting your privacy and ensuring your experience is safe and secure. This policy explains how we collect, use, and protect your information.
        </p>

        <div className="mt-8 space-y-8">
          {/* Section 1: Information Collection */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">1. Information Collection</h3>
            <p className="text-gray-600">
              We collect information about you when you visit our site, make a booking, or communicate with us. This includes personal details like your name, email, and phone number, as well as your preferences for amenities such as rooftop pools, rooms, and other services.
            </p>
          </div>

          {/* Section 2: Use of Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">2. Use of Information</h3>
            <p className="text-gray-600">
              The information we collect is used to provide a better experience for you, such as ensuring your requests for rooms with rooftop pools are met and notifying you of special offers. We may also use the data to enhance our services and improve your stay.
            </p>
          </div>

          {/* Section 3: Sharing and Disclosure */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">3. Sharing and Disclosure</h3>
            <p className="text-gray-600">
              We do not share your personal information with third parties without your consent, except when required by law. Your privacy is our priority, and we work hard to keep your data secure.
            </p>
          </div>

          {/* Section 4: Security Measures */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">4. Security Measures</h3>
            <p className="text-gray-600">
              We implement robust security measures to safeguard your personal data. Access to your information is restricted to authorized personnel only, and we regularly update our practices to meet security standards.
            </p>
          </div>

          {/* Section 5: Your Rights */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">5. Your Rights</h3>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal information. If you wish to exercise these rights or have questions about our privacy practices, please contact us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;