import { Product } from "../../utils/types";

export default function ResultCard({ result }: { result: Product }) {
  return (
    <div
      key={result.id}
      className="flex   w-full rounded-3xl gap-40 bg-gray-100 p-10 dark:bg-white/10"
    >
      <div className="flex flex-col gap-5 w-1/2">
        <p className="text-3xl pb-2">American</p>
        <div className="flex flex-col  border-2 p-3 rounded-3xl hover:bg-gray-200 dark:hover:bg-white/15">
          <p key={result.product} className="text-xl font-bold">
            {result.product}
          </p>
          <p key={result.company} className="text-sm">
            {result.company}
          </p>
          <p key={result.country} className="text-3xl">
            {result.country}
          </p>
        </div>
      </div>
      <div key={result.id} className="flex flex-col gap-5 w-1/2">
        <p className="text-3xl pb-2">European</p>
        {result.alternatives.map((result) => {
          return (
            <div className="flex flex-col border-2 p-3 rounded-3xl hover:bg-gray-200 dark:hover:bg-white/15">
              <p key={result.product} className="text-xl font-bold">
                {result.product}
              </p>
              <p key={result.company} className="text-sm">
                {result.company}
              </p>
              <p key={result.country} className="text-3xl">
                {result.country}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
