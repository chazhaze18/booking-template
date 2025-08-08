import React from "react";
/* test */
export default function BookingSite() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-rose-100 to-pink-200 flex items-center justify-center text-center p-8">
        <div>
          <h1 className="text-5xl font-bold mb-4">Lush Locks & Nails</h1>
          <p className="text-xl mb-6">Your digital salon – book, browse, trust</p>
          <a
            href="#booking"
            className="bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Why This Site Matters</h2>
        <p className="max-w-2xl mx-auto text-lg">
          This isn't just a booking link. It's your digital front door. Clients visit to view your services, pricing, real work, and testimonials — all in one trusted place. A link in your bio can’t do that.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-rose-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow bg-white">
            <h3 className="text-xl font-semibold mb-2">Cut & Blow Dry</h3>
            <p>Signature styling that turns heads</p>
            <span className="block mt-2 font-bold">£35</span>
          </div>
          <div className="p-6 border rounded-lg shadow bg-white">
            <h3 className="text-xl font-semibold mb-2">Gel Manicure</h3>
            <p>Beautiful gel polish with long-lasting shine</p>
            <span className="block mt-2 font-bold">£28</span>
          </div>
        </div>
        <p className="text-center mt-6 text-sm text-gray-600">Prices may vary. Updates are free with your monthly plan.</p>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Book an Appointment</h2>
        <p className="mb-6">Bookings are managed professionally through our calendar system. No DMs. No delays.</p>
        <a
          href="https://calendly.com/lushlocks" // Replace with real booking link
          target="_blank"
          className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700"
        >
          Reserve Your Spot
        </a>
        <p className="mt-4 text-sm text-gray-500">Want help managing your calendar? That’s included in your plan.</p>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-rose-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <img src="/hair1.jpg" alt="Styled Hair" className="rounded shadow" />
          <img src="/nails1.jpg" alt="Nail Art" className="rounded shadow" />
          <img src="/hair2.jpg" alt="Blow Dry" className="rounded shadow" />
          <img src="/nails2.jpg" alt="French Tips" className="rounded shadow" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Client Reviews</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="italic mb-4">“The site made it so easy to book – I even checked prices and picked my style before messaging!”</blockquote>
          <p className="font-semibold">– Emma J.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-rose-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Need Help?</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Name" className="border p-3 rounded" />
          <input type="email" placeholder="Email" className="border p-3 rounded" />
          <textarea placeholder="Message" className="border p-3 rounded h-32" />
          <button type="submit" className="bg-pink-600 text-white py-3 rounded hover:bg-pink-700">
            Send Message
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">All contact forms and messages are included in your monthly support.</p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-pink-600 text-white text-center">
        <p>&copy; 2025 Lush Locks & Nails. Website service provided by [YourNameFreelance.com]</p>
      </footer>
    </div>
  );
}
