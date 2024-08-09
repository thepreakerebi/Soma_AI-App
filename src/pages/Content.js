import {Onboarding1} from '../components/Onboarding/Onboarding1'
import "./Content.css";


export const Content = () => {
  return (
    <div className="content">
      <div className="vuesaxboldpause-wrapper">
        <img
          className="vuesaxboldpause-icon"
          loading="lazy"
          alt=""
          src="/vuesaxboldpause.svg"
        />
      </div>
      <section className="welcome-to-soma">
        Welcome to Soma. Your AI scholarship application assistant where you can
        find personalized scholarship matches, AI-powered essay and document
        help, and stay organized with deadline reminders.
      </section>
      <Onboarding1 />
    </div>
  );
};
