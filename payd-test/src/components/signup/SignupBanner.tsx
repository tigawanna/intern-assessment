export default function SignupBanner() {
  return (
    <div className="basis-full">
      <div className="flex flex-col align-center justify-center  md:px-5 text-center h-full">
        <img src="src\assets\image (1).png" alt="banner" />
        <div>
          <h1 className="text-3xl py-5 text-green">
            <b>Money & Vibes</b>
          </h1>
          <p className="text-white md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            eligendi quaerat. Nemo sapiente ducimus voluptates earum obcaecati
            molestias fuga eaque eum perferendis enim quod exercitationem amet,
            officia possimus debitis{" "}
            <span className="text-red-400 underline">
              <a href="/posts">See what is new</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
