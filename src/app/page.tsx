import RandomUserContent from "./components/randomUserContent";

export default function Home() {


  return (
    <div className="h-screen relative">
      <div className="h-1/2 -translate-y-24 w-full bg-gradient-to-r from-rose-500 to-orange-300 absolute"></div>
      <div className="absolute w-full">
        <RandomUserContent />
      </div>
    </div>
  );
}
