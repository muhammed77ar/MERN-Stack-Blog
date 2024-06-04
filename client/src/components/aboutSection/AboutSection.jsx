import { Link } from "react-router-dom";
import { AboutSectionStyle } from "./StyledAboutSection";

export default function AboutSection() {

    const token = localStorage.getItem("ACCESS_TOKEN")

    const handleClick = () => {
        const email = 'journeyjournals@gmail.com';
        const subject = 'Inquiry from a travel blog';

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

        window.location.href = mailtoLink;
    };
    return (
        <AboutSectionStyle>
            <div className="about">
                <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                    <span className="icon"></span>
                </a>
                <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                    <span className="icon"></span>
                </a>
                <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                    <span className="icon"></span>
                </a>
                <a className="bg_links logo"></a>
            </div>

            <div className="content">
                <Link to={token ? `/auth/profile` : `profile`}>
                <div className="card">
                    <div className="icon"><i className="material-icons md-36">face</i></div>
                    <p className="title">Profile</p>
                    <p className="text">Click to see or edit your profile page.</p>
                </div>
                </Link>
                <Link to={token ? `/auth/favourites` : `favourites`}>
                <div className="card">
                    <div className="icon"><i className="material-icons md-36">favorite_border</i></div>
                    <p className="title">Favourites</p>
                    <p className="text">Check all your favourites in one place.</p>
                </div>
                </Link>
                <div className="card" onClick={handleClick}>
                    <div className="icon"><i className="material-icons md-36">alternate_email</i></div>
                    <p className="title">Contact Us</p>
                    <p className="text">Please feel free to contact us if you have any questions or issues.</p>
                </div>
            </div>
        </AboutSectionStyle>
    )
}
