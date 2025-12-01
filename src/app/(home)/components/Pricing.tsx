export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12">Pricing</h3>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="p-8 border rounded-lg shadow-sm bg-white">
          <h4 className="text-xl font-bold">Basic Plan</h4>
          <p className="text-4xl font-bold mt-2">₹999</p>
          <p className="mt-3 text-gray-600">Starter package for small founders.</p>
        </div>

        <div className="p-8 border rounded-lg shadow-lg bg-blue-600 text-white">
          <h4 className="text-xl font-bold">Premium Plan</h4>
          <p className="text-4xl font-bold mt-2">₹4999</p>
          <p className="mt-3 text-blue-100">Priority funding support and guidance.</p>
        </div>

      </div>
    </section>
  );
}
