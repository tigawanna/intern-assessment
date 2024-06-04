import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "./signupSchema";

type FormData = z.infer<typeof signUpSchema>;

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <div className="basis-full">
      <div className="py-16 px-12 rounded-xl  shadow-2xl my-2">
        <div className="mb-4 text-center" style={{ color: "#18d26e" }}>
          <h1 className="text-3xl mb-4">Register</h1>
          <h1 className="text-xl">Join a community of online workers</h1>
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="text"
              id="email"
              className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
            />
          </div>
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input
              {...register("username")}
              type="text"
              id="username"
              className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
            />
          </div>
          {errors.username && (
            <p className="text-red-600">{errors.username.message}</p>
          )}
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
            />
          </div>
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
          <div className="mb-1">
            <label htmlFor="confirmpass">Confirm Password</label>
            <input
              {...register("confirmpass")}
              type="confirmpass"
              id="confirmpass"
              className="border border-gray-200 px-2 py-2 w-full shadow-lg mt-2 rounded-lg"
            />
          </div>
          {errors.confirmpass && (
            <p className="text-red-600">{errors.confirmpass.message}</p>
          )}
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
            <button
              type="submit"
              className="w-full bg-green-500 text-center text-white py-3 rounded-lg"
            >
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
