export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b">
      <h1 className="text-2xl font-bold">Starfinity</h1>

      <nav className="space-x-6 text-gray-700">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
      </nav>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Get Started
      </button>
    </header>
  );
}
