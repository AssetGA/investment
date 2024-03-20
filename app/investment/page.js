import Form from "../components/Form";

export const metadata = {
  title: "Инвестиции в игровой проект",
  description: "Инвестиции в проект стратегического значения",
  keywords:
    "Инвестиции, криптовалюты, проекты, вложения, приумножить, заработать ",
  robots: "index, follow",
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl uppercase font-serif font-bold">Investment</h1>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-300 after:via-red-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-56">
        GAME GO
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
        Проект стартует - г. Астана, Казахстан. Все права по проекту принадлежат
        местной Компании. Цель проекта - ... . Цель вы можете вписать
        самостоятельно. Что мы сделали - связали энергию и безопасность.
        <div className="py-10">
          Для получения полной информации по плановому инвестиционному доходу
          Компания еженедельно проводит встречи с инвесторами. Вам достаточно
          подать заявку на участие.
        </div>
        <div className="py-10">
          Требуемые инвестиции 100 000 000 тенге - продаваемая доля 5% от
          Уставного капитала Компании. Данная доля делимая вы можете преобрести
          меньшую долю, но не менее 1%.
        </div>
      </div>

      <Form type="invest" buttonName="инвестировать" />
    </>
  );
}
