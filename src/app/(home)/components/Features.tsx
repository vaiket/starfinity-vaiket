export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <h3 className="text-3xl font-bold text-center mb-12">Features</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="p-6 border rounded-lg shadow-sm">
          <h4 className="font-bold text-xl">Fast Approval</h4>
          <p className="text-gray-600 mt-2">Quick processing with expert support.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h4 className="font-bold text-xl">Verified Schemes</h4>
          <p className="text-gray-600 mt-2">Access 100+ govt-approved schemes.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h4 className="font-bold text-xl">One-on-One Guidance</h4>
          <p className="text-gray-600 mt-2">Dedicated support for your business.</p>
        </div>
      </div>
    </section>
  );
}
