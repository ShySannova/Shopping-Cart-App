import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 123-456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <p>About Us</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 QuickBill Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
