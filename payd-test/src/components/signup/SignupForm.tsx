export default function SignupForm() {
  return (
    <div className="basis-full">
      <div className="py-16 px-12 rounded-xl  shadow-2xl my-2">
        <div className="mb-4 text-center" style={{ color: "#18d26e" }}>
          <h1 className="text-3xl mb-4">Register</h1>
          <h1 className="text-xl">Join a community of online workers</h1>
        </div>
        <form action="">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="confirmpass">Confirm Password</label>
            <input
              type="confirmpass"
              id="confirmpass"
              className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
            />
          </div>
          <div className="flex gap-x-6 items-center justify-start">
            <div>
              <input
                type="checkbox"
                className="border border-gray-200 px-2 py-1 w-full"
              />
            </div>
            <span>
              I accept{" "}
              <a href="#" className="font-semibold">
                Terms and conditions
              </a>
            </span>
          </div>
          <div className="mt-6">
            <button className="w-full bg-green-500 text-center text-white py-3 rounded-lg">
              Register
            </button>
          </div>
        </form>
        <div className="mt-2">
          <h6 className="text-center">
            Already have an account?{" "}
            <span>
              <a href="#">
                <b>Login</b>
              </a>
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}
