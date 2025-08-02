import classess from "./page.module.css";

export default function AboutUs() {
  return (
    <>
      <h1 className={classess.aboutus__header}>About Us</h1>
      <p className={classess.aboutus}>
        Welcome to HotPlate — a small practice project built to explore the
        world of web development and design! This site is created by a
        passionate frontend developer who loves building beautiful and
        responsive user interfaces. The goal of this project is to improve
        skills in HTML, CSS, JavaScript, and modern frameworks like React and
        Next.js. All the content here, including food images and product
        descriptions, is for learning purposes only. Thanks for visiting!
      </p>
    </>
  );
}
