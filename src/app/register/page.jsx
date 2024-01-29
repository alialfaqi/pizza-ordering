"use client";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPAge() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
        <form className="max-w-xs mx-auto" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="passsword"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Regsiter</button>
          <div className="my-4 text-center text-gray-500">
            or login with provider
          </div>
          <button className="flex justify-center items-center gap-4">
            <Image src="/google.png" alt="" width={32} height={32} />
            Login with google
          </button>
        </form>
      </section>
    </>
  );
}
