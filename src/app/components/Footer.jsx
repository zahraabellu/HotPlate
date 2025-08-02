import Link from "next/link";
import classess from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classess.footer}>
      <Link href={`/about-us`}>About Us</Link>
      <Link href={`/privacy-policy`}>Privacy-Policy</Link>
      <Link href={`/contact`}>Contact</Link>
      <Link href={`terms-of-service`}>Terms of Service</Link>
    </footer>
  );
}
