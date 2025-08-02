import classess from "./page.module.css";

export default function termsOfService() {
  return (
    <>
      <h1 className={classess.pp__header}>Terms of Service</h1>
      <p className={classess.pp__description}>
        Welcome to HotPlate! This website is a personal project built for
        educational purposes only. By using this site, you agree to the
        following terms: You may not use this website for any illegal or harmful
        activity. All content is for demonstration only and not for commercial
        use. We are not responsible for any issues that arise from using this
        site. These terms may be updated anytime as the project grows. Thank you
        for understanding!
      </p>
    </>
  );
}
