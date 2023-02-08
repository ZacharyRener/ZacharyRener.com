import styles from "../styles/Subpage.module.css";
import Head from "../components/header.js";
import HeaderImage from "../components/header-image.js";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import globals from "../styles/Global.module.css";

export default function Contact() {
  const handleSubmission = (e) => {
    e.preventDefault();
    const firstName = e.target.first_name.value;
    const lastName = e.target.last_name.value;
    const email = e.target.email.value;
    const comments = e.target.comments.value;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(comments);
  };

  const form = () => {
    return (
        <form onSubmit={handleSubmission} className={globals.childHasShadow}>
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            required
          />
          <input id="last_name" type="text" placeholder="Last Name" required />
          <input id="email" type="email" placeholder="Email" required />
          <textarea rows="10" id="comments" placeholder="Comments"></textarea>
          <button
            className={globals.button + " " + styles.button}
            type="submit"
          >
            Contact
          </button>
        </form>
    );
  }

  return (
    <div className={globals.noOverflow}>
      <Head />
      <Navbar />
      <HeaderImage title="Contact" />
      <section className={styles.bodyCopy + " container"}>
        <h1>Want to start a project?</h1>
        <p>
          You can contact me at <a href='mailto:zacharyrener@gmail.com'>zacharyrener@gmail.com</a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
