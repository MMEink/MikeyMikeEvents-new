import { Link } from "react-router-dom";
import { HorizontalLayOutContainer, GreyEffectButton } from "./styled";

export default function HorizontalLayout({ data }) {
  return (
    <HorizontalLayOutContainer>
      <article>
        <h3>{data.article_title}</h3>
        <h4>{data.article_subheader}</h4>
        <p>{data.article}</p>
        <Link to={"/contact"}>
          <GreyEffectButton>Get Started</GreyEffectButton>
        </Link>
      </article>
      <img src={require(`${data.main_img}`)} alt={data.article_title} />
    </HorizontalLayOutContainer>
  );
}
