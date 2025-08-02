import Link from "next/link";
export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "13rem",
        // marginLeft: "7rem",
        lineHeight: "2",
      }}
    >
      <h1 style={{ color: "red", fontWeight: "bold", fontSize: "2rem" }}>
        404-Page Not Found
      </h1>
      <p style={{ fontSize: "1.4rem", color: "hsl(14, 65%, 9%)" }}>
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go Back To Home!
      </Link>
    </div>
  );
}
