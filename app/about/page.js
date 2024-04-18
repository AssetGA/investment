import Link from "next/link";

export const metadata = {
  title: "Игра GO - о нас",
  description: "Игра GO - общая информация",
  keywords: "Игра, маркетинг, реклама, движение, стратегическая, командная",
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl uppercase font-serif font-bold">
        вас приветствует игра GO
      </h1>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/2 after:bg-gradient-conic after:from-sky-300 after:via-blue-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-56">
        GAME GO
      </div>

      <div className="lg:max-w-5xl lg:w-full pb-20">
        Это будет скучно и нудно, если мы начнем расказывать тебе про игру,
        нажми GO и начни игру будет весело. Эти две недели пролетят моментально
        но спользой для тебя, возьми в команду своего ребенка или жену, друга
        или подругу. Возраст есть ограничения по возрасным группам скажем так
        всем кто становится дееспасобным согласно закону страны, в которой
        проводится игра. Играйте, будьте счастливы в жизни, в игре, в любом
        деле.
      </div>

      <div className="mb-32 grid lg:flex-none text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 basis-1/3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Документация{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Документы игры 'GO'
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30 basis-1/3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Обучение{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Правила работы с платформой
          </p>
        </a>
        <Link
          href="/about/point"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 basis-1/3"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Точка
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Для тех кто интересуется рекламой
          </p>
        </Link>
      </div>
    </>
  );
}
