"use client";
import Background from "../components/Background";
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div>
      <aside className="aside-1">
        <div className="currency-div">
          <Image src="/drawables/coin_void.png" alt="VOD"/>
          <h1 className="text-3xl font-bold currency">200M</h1>
        </div>
      </aside>
      <Background />
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 btn-updated"
      >
        Claim Grant
      </button>
    </div>
  );
}
