import CopyButton from "../components/CopyButton";

export const metadata = {
  title: "Контакты игра GO",
  description: "Контактные данные для связи с владельцами",
  keywords: "Контакты, почта, телефон, емейл, интаграм, тик-ток",
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl uppercase font-serif font-bold">Contacts</h1>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1 after:bg-gradient-conic after:from-sky-300 after:via-blue-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-56">
        GAME GO
      </div>

      <div className="my-32 grid text-center lg:max-w-5xl lg:text-left">
        <CopyButton text="417051@mail.ru" />
      </div>
    </>
  );
}
