export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center mb-12">What Clients Say</h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="p-6 border rounded-lg shadow-sm">
          <p className="text-gray-600">
            “Amazing service! Got approval in just 14 days!”
          </p>
          <h4 className="font-bold mt-4">— Rahul Singh</h4>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <p className="text-gray-600">
            “Their guidance helped me secure ₹50 Lakhs funding.”
          </p>
          <h4 className="font-bold mt-4">— Priya Verma</h4>
        </div>

      </div>
    </section>
  );
}
