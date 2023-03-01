import { Link } from "react-router-dom";
import { VerticalLayOutContainer } from "./styled";

export default function VerticalLayout({ data }) {
  console.log(data);
  return (
    <VerticalLayOutContainer>
      <img src={require(`${data.main_img}`)} alt={data.article_title} />
      <article>
        <h3>{data.article_title}</h3>
        <h4>{data.article_subheader}</h4>
        <p>{data.article}</p>
      </article>
    </VerticalLayOutContainer>
  );
}
