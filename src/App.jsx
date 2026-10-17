
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h2 className="text-2xl font-bold text-orange-400 mt-6">Welcome to E-commerce Website</h2>;
}

function Orders() {
  return (
    <div className="mt-8 bg-gray-800 border-2 border-orange-500 rounded-2xl p-6 shadow-xl">
      <h2 className="text-3xl font-extrabold text-orange-400 mb-6">
        Order Management
      </h2>

      <nav className="flex flex-wrap gap-3">
        <Link to="current" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded-lg transition">
          Current Orders
        </Link>{" "}
        <Link to="history" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 rounded-lg transition">
          Order History
        </Link>{" "}
        <Link to="cancelled" className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-lg transition">
          Cancelled Orders
        </Link>
      </nav>

      <hr className="my-6 border-gray-600" />

      <div className="bg-gray-900 border border-gray-600 rounded-xl p-5 text-white">
        <Outlet />
      </div>
    </div>
  );
}

function CurrentOrders() {
  return <h3 className="text-xl font-bold text-blue-400">Current Orders: Laptop, Mobile</h3>;
}

function OrderHistory() {
  return <h3 className="text-xl font-bold text-green-400">Order History: Shoes, Headphones</h3>;
}

function CancelledOrders() {
  return <h3 className="text-xl font-bold text-red-400">Cancelled Orders: Smart Watch</h3>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 border-b-4 border-orange-500 pb-4">
            E-commerce Order Management
          </h1>

          <nav className="flex gap-4 mt-6">
            <Link to="/" className="text-white bg-purple-600 hover:bg-purple-700 font-bold px-5 py-3 rounded-lg transition">
              Home
            </Link>{" "}
            <Link to="/orders" className="text-white bg-orange-600 hover:bg-orange-700 font-bold px-5 py-3 rounded-lg transition">
              Orders
            </Link>
          </nav>

          <hr className="my-6 border-gray-700" />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/orders" element={<Orders />}>
              <Route path="current" element={<CurrentOrders />} />
              <Route path="history" element={<OrderHistory />} />
              <Route path="cancelled" element={<CancelledOrders />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
