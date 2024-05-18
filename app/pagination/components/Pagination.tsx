import { useState } from "react";

export default function Pagination({}: {}) {
  const [selected, setSelected] = useState(1);
  const offset = (selected - 1) * 3.5 + "rem";
  return (
    <div>
      <ol
        style={{ "--offset": offset } as React.CSSProperties}
        className={`relative before:left-[var(--offset)] flex gap-2 before:transition-all before:duration-500 before:block before:bg-slate-300 before:w-12 before:h-12 before:rounded-lg before:absolute before:opacity-70 before:-z-10`}
      >
        <li
          onClick={() => setSelected(1)}
          className="border cursor-pointer hover:opacity-70 rounded-lg w-12 h-12 flex justify-center items-center"
        >
          1
        </li>
        <li
          onClick={() => setSelected(2)}
          className="border cursor-pointer hover:opacity-70 rounded-lg w-12 h-12 flex justify-center items-center"
        >
          2
        </li>
        <li
          onClick={() => setSelected(3)}
          className="border cursor-pointer hover:opacity-70 rounded-lg w-12 h-12 flex justify-center items-center"
        >
          3
        </li>
        <li
          onClick={() => setSelected(4)}
          className="border cursor-pointer hover:opacity-70 rounded-lg w-12 h-12 flex justify-center items-center"
        >
          4
        </li>
        <li
          onClick={() => setSelected(5)}
          className="border cursor-pointer hover:opacity-70 rounded-lg w-12 h-12 flex justify-center items-center"
        >
          5
        </li>
        <li
          onClick={() => setSelected(6)}
          className="border cursor-pointer hover:opacity-70 rounded-lg w-12 h-12 flex justify-center items-center"
        >
          6
        </li>
        <li
          onClick={() => setSelected(7)}
          className="border cursor-pointer hover:opacity-70 rounded-lg w-12 h-12 flex justify-center items-center"
        >
          7
        </li>
      </ol>
    </div>
  );
}
