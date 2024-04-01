import Link from "next/link";
import Form from "../components/Form";

export const metadata = {
  title: "Франшиза на город",
  description: "Франшиза на проведение игр на территории города",
  keywords: "Франшиза, сотрудничество, точка, участие",
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl uppercase font-serif font-bold">
        Сотрудничество
      </h1>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-300 after:via-green-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-56">
        GAME GO
      </div>
      <p className="flex justify-center my-10 text-red-600 font-bold">
        данная опция будет доступна позже заявки принимаются в порядке очереди
      </p>
      <div className="flex justify-center mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <ul className="list-disc list-outside leading-10">
          <Link href="#">
            <li
              className="w-[250px] md:w-[400px] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 font-bold focus:outline-none focus:shadow-outline "
              target="_blank"
              rel="noopener noreferrer"
            >
              на Город
            </li>
          </Link>
          <Link href="#">
            <li
              className="w-[250px] md:w-[400px] rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 font-bold focus:outline-none focus:shadow-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              на Страну
            </li>
          </Link>
        </ul>
      </div>
      <Form type="franchize" buttonName="заявка" />
    </>
  );
}
