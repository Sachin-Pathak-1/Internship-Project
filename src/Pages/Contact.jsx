export default function Contact() {
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you! Reach out via the form below.</p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>

        </section>
    );
}