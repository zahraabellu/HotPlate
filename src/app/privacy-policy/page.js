import classess from "./page.module.css";
export default function privacypolicy() {
  return (
    <>
      <h1 className={classess.pp__header}>Privacy Policy</h1>
      <p className={classess.pp__description}>
        This website is a practice project created for learning and development
        purposes. We do not collect, store, or share any personal information
        from users. All content, including images and products, is used only as
        part of frontend development training. We respect your privacy and are
        committed to keeping this site safe and simple. If you have any
        questions, feel free to reach out via the contact page.
      </p>
    </>
  );
}
