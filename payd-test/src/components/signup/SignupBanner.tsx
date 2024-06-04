export default function SignupBanner() {
  return (
    <div className="basis-full">
      <div
        className="flex flex-col align-center justify-center px-5  text-center"
        style={{
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img src="src\assets\image (1).png" alt="banner" />
        <div>
          <h1 className="text-3xl py-5" style={{ color: "#18d26e" }}>
            <b>Money & Vibes</b>
          </h1>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
            eligendi quaerat. Nemo sapiente ducimus voluptates earum obcaecati
            molestias fuga eaque eum perferendis enim quod exercitationem amet,
            officia possimus debitis explicabo?
          </p>
        </div>
      </div>
    </div>
  );
}
