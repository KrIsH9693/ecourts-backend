import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const links = [
    { to: "/", label: "Scraper" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <div className="p-4 text-xl font-bold border-b">eCourts Scraper</div>
      <ul className="p-4 space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`block px-3 py-2 rounded-lg font-medium ${
                location.pathname === l.to ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
