import Page from "../page-container";

const cards = [
  {
    title: "Corporate cards",
    description:
      "Spend smart globally with powerful cards and built-in controls.",
  },
  {
    title: "Expense management",
    description:
      "Use AI to automate approvals and expense reports. Track in real time.",
  },
  {
    title: "Travel",
    description: "Simplify global travel with in-app booking and management.",
  },
  {
    title: "Bill pay",
    description:
      "Save time with AI-powered invoice entry and payment automation.",
  },
  {
    title: "Banking and treasury",
    description:
      "Save, spend, and grow your cash with 3.94% yield — from day one.",
  },
];

const CardSection = () => {
  return (
    <Page className="flex flex-col justify-center items-center py-30">
      <h1 className="bg-white text-5xl font-semibold">
        The card is just the start.
      </h1>
      <h2>
        Everything you need to boost spending power and control — and eliminate
        manual work.
      </h2>
      <div className="flex gap-5 mt-10">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </Page>
  );
};

export default CardSection;

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col bg-gray-200/40 p-4 w-1/2 aspect-square rounded-xl">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-gray-400">{description}</p>
      <div className="bg-blue-800/10 h-40 w-full rounded-2xl"></div>
    </div>
  );
}
