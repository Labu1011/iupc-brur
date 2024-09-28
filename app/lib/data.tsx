export type ServiceCardProps = {
  title: string;
  desc: string;
  url: string;
};
import Design from "../../public/test.svg";
import Dev from "../../public/test2.svg";
import App from "../../public/test3.svg";
import Img from "../../public/img1.png";
import Img2 from "../../public/img1.png";
import gcbuying from "../../public/projects/gcbuying.png";
import gcbuyingapp from "../../public/projects/gcbuyingapp.png";
import mild from "../../public/projects/mild.png";
import mili from "../../public/projects/mili.png";
import ghacoin from "../../public/projects/ghacoin.png";
import djaycoin from "../../public/projects/djaycoin.png";
import Microscope from "../../public/aboutus/ms.png";
import Clock from "../../public/aboutus/timer.png";
import Team from "../../public/aboutus/team.png";
import Review from "../../public/aboutus/review.png";

export const service_cards: ServiceCardProps[] = [
  {
    title: "Website's UI/UX design",
    desc: `We're driven by user‑centered design that drives productivity and increases revenue. `,
    url: Design,
  },
  {
    title: "Mobile app development",
    desc: `We're driven by user‑centered design that drives productivity and increases revenue. `,
    url: App,
  },
  {
    title: "Website development",
    desc: `We're driven by user‑centered design that drives productivity and increases revenue. `,
    url: Dev,
  },
  {
    title: "Saas development",
    desc: `We're driven by user‑centered design that drives productivity and increases revenue. `,
    url: Dev,
  },
];

export const showcase_items = [
  {
    image: mili,
    link: "",
  },
  {
    image: mild,
    link: "",
  },
  {
    image: gcbuying,
    link: "",
  },
  {
    image: gcbuyingapp,
    link: "",
  },
  {
    image: Img,
    link: "",
  },
];
export const showcase_items_row2 = [
  {
    image: gcbuying,
    link: "",
  },
  {
    image: djaycoin,
    link: "",
  },
  {
    image: mild,
    link: "",
  },
  {
    image: gcbuyingapp,
    link: "",
  },
  {
    image: Img,
    link: "",
  },
];

export const aboutus = [
  {
    num: 245,
    des: `We're driven by user‑centered design that drives productivity and increases revenue.`,
    img: Microscope,
  },
  {
    num: 245,
    des: `We're driven by user‑centered design that drives productivity and increases revenue.`,
    img: Clock,
  },
  {
    num: 245,
    des: `We're driven by user‑centered design that drives productivity and increases revenue.`,
    img: Review,
  },
  {
    num: 245,
    des: `We're driven by user‑centered design that drives productivity and increases revenue.`,
    img: Team,
  },
];
