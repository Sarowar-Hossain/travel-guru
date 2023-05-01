import { Link } from "react-router-dom";
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-4xl font-bold text-center text-orange-500">
          Login
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
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
          <a href="#" className="text-xs text-orange-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 font-semibold tracking-wide text-white transition-colors 
            duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 
            focus:outline-none focus:bg-orange-700">
              Login
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t">
          <div className="absolute px-5 bg-white">Or</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600"
          >
            <FaGoogle></FaGoogle>
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600">
          <FaGithub></FaGithub>
          </button>
          <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-orange-600">
            <FaTwitter></FaTwitter>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?
          <Link to='/user/register' className="font-medium text-orange-600 hover:underline">
          Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
