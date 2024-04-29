import Image from "next/image";
export default function Card({
  expanded,
  expand,
  id,
}: {
  expanded: boolean;
  expand: Function;
  id: number;
}) {
  return (
    <div
      className={`border relative [--sc:1] hover:[--sc:1.2] overflow-hidden basis-0 h-96 ${
        expanded ? "flex-[4]" : "flex-[1] "
      } transition-all`}
      onClick={() => expand(id)}
    >
      <Image
        src="https://source.unsplash.com/random/?Naturea&1"
        width={300}
        height={600}
        alt=""
        className="w-full scale-[var(--sc)] transition-transform h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-5 bg-slate-400 opacity-50">
        <h1>Karim Tawfik</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ipsam.
        </p>
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-[var(--sc)] transition-transform"
        >
          <path
            d="M13 3H12C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H13M17 8L21 12M21 12L17 16M21 12H9"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
