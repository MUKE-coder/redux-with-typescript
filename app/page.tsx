import CounterValue from "@/components/CounterValue";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance ">
        Complete Guide on how to Use Redux Toolkit in Next Js with Typescript
      </h1>
      <ul className="text-xl my-6 ml-6 list-decimal [&>li]:mt-2">
        <li>Installation and Setup </li>
        <li>
          <Link href="/counter">Implement Counter with Redux</Link>
        </li>
        <li>
          <Link href="/shop">Implement Cart Functionality with Redux</Link>
        </li>
        <li>
          <Link href="/form">Implement Multi step form with Redux</Link>
        </li>
      </ul>
    </div>
  );
}
