import classess from "./page.module.css";
import Link from "next/link";
export default function privacypolicy() {
  return (
    <div>
      <h1 className={classess.pp__header}>Contact Us</h1>
      <p className={classess.pp__description}>
        Have questions or feedback? We’d love to hear from you! Since this is a
        practice project, this page is for demonstration purposes only. Feel
        free to reach out via email:{" "}
        <span className={classess.email}> 📧 zahraabellu@example.com </span>Or
        connect with me on{" "}
        <Link
          href={`https://www.linkedin.com/in/zahra-abellu-171001230/`}
          className={classess.contact__link}
        >
          LinkedIn
        </Link>{" "}
        or{" "}
        <Link
          href={`https://github.com/zahraabellu`}
          className={classess.contact__link}
        >
          {" "}
          GitHub
        </Link>
        .
      </p>
    </div>
  );
}
