import icon from "./assets/frederox_1024.jpeg";

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-10 bg-blue-50/80
        bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      {/* Foreground Content */}
      <div className="text-center font-mono h-full flex flex-col justify-center items-center ">
        <img
          src={icon}
          alt="Logo"
          className="mx-auto mb-5 w-[150px] rounded-full border-4 border-white"
        />
        <p className="text-3xl text-gray-700">[FrederoxDev]</p>
        <p className="text-xl text-gray-600">Minecraft Marketplace Freelancer!</p>

        <div className="h-8" />
        <p className="text-2xl text-gray-700">[Contact Me]</p>

        <p className="text-xl text-gray-600">
          Github:{" "}
          <a
            href="https://github.com/FrederoxDev"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            @FrederoxDev
          </a>
        </p>
        <p className="text-xl text-gray-600">Email: FrederoxDev@gmail.com</p>

        {/* Sticky Bottom Right Text */}
        <p className="fixed bottom-4 right-4 text-xl text-gray-500">
          [Temporary Website]
        </p>
      </div>
    </div>
  );
}

export default App;
