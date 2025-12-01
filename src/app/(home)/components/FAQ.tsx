export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>

      <div className="max-w-4xl mx-auto space-y-6">
        
        <details className="p-4 border rounded-lg bg-white cursor-pointer">
          <summary className="font-bold">How do I apply for funding?</summary>
          <p className="mt-2 text-gray-600">Fill the eligibility form and our team will help you.</p>
        </details>

        <details className="p-4 border rounded-lg bg-white cursor-pointer">
          <summary className="font-bold">How much time does approval take?</summary>
          <p className="mt-2 text-gray-600">Usually 7–21 working days depending on the scheme.</p>
        </details>

      </div>
    </section>
  );
}
