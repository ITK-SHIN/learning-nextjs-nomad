"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navigation = () => {
  const path = usePathname();
  const [count, setCount] = useState(0);
  console.log(path);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link> {path == "/" ? "🔥" : null}
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
            {path == "/about-us" ? "🔥" : null}
          </li>
          <li>
            <button onClick={() => setCount((c) => c + 1)}>{count}</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
