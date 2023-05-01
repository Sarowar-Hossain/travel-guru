import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-4xl font-bold text-center text-orange-500">
          Register
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              name="name"
              required
              type="text"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border 
              rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none 
              focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border 
              rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none 
              focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              required
              type="password"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md
               focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring 
               focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              required
              type="password"
              className="block w-full px-4 py-2 mt-2 text-orange-700 bg-white border rounded-md
               focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring 
               focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 font-semibold tracking-wide text-white transition-colors 
            duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 
            focus:outline-none focus:bg-orange-700"
            >
              Register
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            to="/user/login"
            className="font-medium text-orange-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
