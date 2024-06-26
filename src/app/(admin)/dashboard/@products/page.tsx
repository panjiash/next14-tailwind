"use client";
import { useState } from "react";

export default function Products() {
  const [revalidate, setRevalidate] = useState(false);
  const save = async (e: any) => {
    e.preventDefault;
    await fetch("/api/revalidate", {
      method: "POST",
    });
    setRevalidate(true);
  };

  return (
    <div className="mr-5 w-3/6 h-96 bg-gray-300 rounded-[12px] justify-center flex items-center">
      <button className="bg-black text-white p-3 m-5 rounded-md" onClick={save}>
        Revalidate {revalidate ? "✅" : "❌"}
      </button>
    </div>
  );
}
