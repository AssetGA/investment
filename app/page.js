import CountdownTimer from "./components/CountdownTimer";

export const metadata = {
  title: "Игра GO движение",
  description: "Командно стратегическая игра для любителей активного отдыха",
  keywords: "Игра, стратегическая, коммандная, движение, go, кси",
  robots: "index, follow",
  "google-site-verification": "llKqjOUP6U9uLUC3o_Xyp9jHfTS53I0gRJ4UrxWiGoU",
};
export default function Home() {
  return (
    <>
      <h1 className="text-2xl uppercase font-serif font-bold">
        {"презентация игры 'GO'"}
      </h1>
      <CountdownTimer />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-300 after:via-blue-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-56">
        GAME GO
      </div>

      <div className="my-24 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <p className="py-5 lg:py-0  px-2">
          Игра GO - создана для семьи, друзей, близких.
        </p>
        <p className="py-5 lg:py-0 px-2">
          Это командная стратегическая игра развивающая навыки, которые
          пригодятся в жизни каждого человека.
        </p>
        <p className="py-5 lg:py-0 px-2">
          Игра постоянно модернезируется исходя из потребностей.
        </p>
        <p className="py-5 lg:py-0 px-2">
          Открыта для сотрудничества в любой сфере бизнеса и развития человека.
        </p>
      </div>
    </>
  );
}
