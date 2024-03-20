import Form from "@/app/components/Form";

export const metadata = {
  title: "Игра GO - точка",
  description: "Задать точку в коммандно стратегической игре GO",
  keywords: "Точка, реклама, движение, участие в игре, продвижение",
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl uppercase font-serif font-bold">точка</h1>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/2 after:bg-gradient-conic after:from-sky-300 after:via-blue-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-56">
        GAME GO
      </div>

      <div className="mb-32 flex flex-col text-center lg:max-w-5xl lg:text-left">
        <h2 className="px-20 py-10">
          Если вы являетесь владельцем торговой точки, теплицы, игровой зоны,
          кафе, бильярдного клуба, ресторана, бара или другого вида заведения,
          которому требуется реклама - Добро пожаловать.
        </h2>
        <p>
          Станьте одной из точек нашего движения GO. Творите СВОЮ рекламу с
          нами. Вам достаточно повесить QR код у себя на точке и вы с нами.
        </p>
        <Form type="open point" buttonName="подключить" />
      </div>
    </>
  );
}
