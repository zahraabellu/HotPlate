"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>Something went wrong 😞</h1>
      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        style={{
          padding: "0.5rem 1rem",
          marginTop: "1rem",
          background: "#333",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
