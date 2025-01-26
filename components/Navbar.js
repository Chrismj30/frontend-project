export default function Navbar() {
    return (
      <nav className="flex items-center justify-between px-10 py-5 bg-white shadow">
        <div className="text-2xl font-bold">BOTOL</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Shop</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact us</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Journal</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Custom</a></li>
        </ul>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Inquiry Now
        </button>
      </nav>
    );
  }
  