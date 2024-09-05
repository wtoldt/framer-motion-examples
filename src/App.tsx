import { Example1 } from '@/examples/example1/Example1';

export default function App() {
  return (
    <div
      className="flex h-screen w-full flex-col items-start justify-center gap-5 divide-y-4
        divide-slate-400/25"
    >
      <Example1 />
      <div className="flex w-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="text-center text-5xl underline">
          Shake a tile on click
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="text-center text-5xl underline">
          Flip a row of tiles on click
        </h2>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="text-center text-5xl underline">
          Stagger flipping the tiles on click
        </h2>
      </div>
    </div>
  );
}
