import "./Footer.css";
import Socials from "../../components/Socials";
import { contactInfo, footer } from "../../data";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
import NeunorthLogo from "../../components/NeunorthLogo";

const Footer = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          [
            "footer .newsletter h2",
            "footer .newsletter p",
            "footer .newsletter .subscribe",
            "footer .box-wrapper .box",
          ],
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
        
    },
    { scope: container }
  );
  return (
    <footer ref={container}>
      <div className="container">
        <section className="newsletter">
          <h2>Newsletter</h2>
          <p>
            Keep up with our latest news and events. Subscribe to our newsletter
          </p>
          <div className="subscribe">
            <input
              type="email"
              name="email"
              placeholder="Enter your email adress"
            />
            <button type="button">Join</button>
          </div>
        </section>
        <section className="box-wrapper">
          <div className="box">
            <NeunorthLogo />
            <p>Innovating IT solutions for business transformation</p>
            <Socials />
          </div>
          {footer.map((list, index) => (
            <div className="box" key={index}>
              <h3 className="title">{list.title}</h3>
              <div className="routes">
                {list.subRoutes.map((route, index) => (
                  <Link to={route.id} className="route" key={index}>
                    {route.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        <div className="box">
            <h3 className="title">Contact Details</h3>
            {contactInfo.map((info,index)=>(
                <div className="route" key={index}>
                 <div className="icon">
                    <info.icon />
                 </div>
                 <p>{info.value}</p>
                </div>
            ))}
        </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
