import Image from "../../assets/heroImage.jpeg";
import Underline from "../../assets/underline.svg";
import { p1, p2 } from "./data";

const WeAre = () => {
  return (
    <section className="weAre">
      <div className="weAre__text">
        <h2>
          We are{" "}
          <span>
            United Dental <img src={Underline} />
          </span>
          Group
        </h2>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
      <div className="weAre__img_wrapper">
        <img src={Image} alt="Image" />
        <div />
      </div>
    </section>
  );
};

export default WeAre;
