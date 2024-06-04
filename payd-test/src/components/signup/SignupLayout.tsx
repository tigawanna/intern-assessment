import SignupBanner from "./SignupBanner";
import SignupForm from "./SignupForm";

export default function SignupLayout() {
  return (
    <>
      <div className="maincon py-10">
        <div className="lg:flex flex-row container mx-auto p-4">
          <SignupBanner />
          <SignupForm />
        </div>
      </div>
    </>
  );
}
