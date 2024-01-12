import { NavLink, Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";

export const DashboardLayout = () => {
  return (
    <main className="flex flex-row mt-7">
      <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
        <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text text-transparent">
          ReactGPT<span className="text-indigo-500">.</span>
        </h1>
        <span className="text-xl">Bienvenido</span>

        <div className="border-gray-700 border my-3" />

        {/* Opciones del menú */}
        {menuRoutes.map((option) => (
          <NavLink
            to={option.to}
            key={option.to}
            className={({ isActive }) =>
              isActive
                ? "flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
                : "flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors"
            }
          >
            <i className={`${option.icon} text-2xl mr-4 text-indigo-400`} />
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </main>
  );
};
