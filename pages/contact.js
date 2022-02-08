import styles from "../styles/Subpage.module.css";
import Head from "../components/header.js";
import HeaderImage from "../components/header-image.js";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import globals from "../styles/Global.module.css";

export default function Contact() {
    const handleSubmission = (e) => {
        e.preventDefault();
        console.log(e.target.first_name.value);
    };

    return (
        <div>
            <Head />
            <Navbar />
            <HeaderImage title="Contact" />
            <section className={styles.bodyCopy + " container"}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Magna fringilla urna porttitor rhoncus dolor purus
                    non enim. Et pharetra pharetra massa massa ultricies mi quis
                    hendrerit. Id nibh tortor id aliquet lectus proin.
                    Suspendisse ultrices gravida dictum fusce.
                    <form onSubmit={handleSubmission}>
                        <input
                            id="first_name"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                        <input
                            id="last_name"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <textarea
                            rows="10"
                            id="comments"
                            placeholder="Comments"
                        ></textarea>
                        <button
                            className={globals.button + " " + styles.button}
                            type="submit"
                        >
                            Contact
                        </button>
                    </form>
                </p>
            </section>

            <Footer />
        </div>
    );
}
