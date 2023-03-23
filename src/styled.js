import styled from "styled-components";

export const DropdownContainer = styled.div`
  border-top: 3px solid #007ebd;
  background-color: white;
  text-transform:uppercase;
  font-size:0.8rem;
  padding: 2rem;
  z-index: 9999;
  position: relative;
  top: -2px;
  left: 2rem;
  height: 600px;
  width: 250px;
  white-space: break-spaces;
  ul {
    list-style: none;
    padding-left: 0;
  }
  ul li {
    margin-bottom: 1.5rem;
    font-weight: 500;
    color: #323232;
  }

  li:hover{
    color:#007ebd;
  }
  @media all and (max-width: 600px) {
    top: -0.5rem;
    left: 0rem;
    height:100%;
    ul li {
      text-align: center;
    }
  }
  }
`;

export const DropdownBtn = styled.div`
  width: 20%;
`;

export const NavBtnContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  height: 38px;
  color: #323232;
  @media all and (max-width: 1400px) {
    width: 100px;
  }
  @media all and (max-width: 1200px) {
    width: 80px;
  }
  @media all and (max-width: 600px) {
    height: 100%;
  }
`;

export const Arrow = styled.span`
display: inline-block;
width: 8px;
height: 8px;
border-bottom: 1.5px solid black;
border-right: 1.5px solid black;
margin-left: 3px;
padding-top: 4px;
margin-bottom: 2px;
transform: rotate(-135deg);
}
`;

export const ServiceContent = styled.div`
  margin: 10rem 3rem;
  justify-content: space-evenly;
  display: flex;

  @media all and (max-width: 1200px) and (min-width: 601px) {
    margin: 5rem 1rem;
  }

  @media all and (max-width: 600px) {
    margin: 2rem 0;
    flex-direction: column-reverse !important;
  }
`;

export const ServiceContentText = styled.div`
  width: 50%;
  padding: 2rem;

  @media all and (max-width: 1200px) and (min-width: 601px) {
    padding: 0 2rem;

    h4 {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media all and (max-width: 600px) {
    width: 100%;
    padding: 2rem 0;
    h4 {
      font-size: 1rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const ServiceImgFrame = styled.div`
  width: 560px;
  height: 420px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .figure {
    width: 100%;
    height: 100%;
  }
  .image-1 {
    width: 100%;
    height: 100%;
  }
  @media all and (max-width: 1200px) {
    width: 350px;
    height: 200px;
    align-self: center;
  }
`;

export const WorkCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  margin: auto;
  max-width: 1600px;
  grid-gap: 10px;
  .card {
    width: 100%;
  }
  .card:hover .card-img-top {
    filter: brightness(0.7);
  }
  @media all and (max-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media all and (max-width: 1200px) and (min-width: 601px) {
    grid-gap: 10px;
    width: 95%;
    margin: auto;
  }

  @media all and (max-width: 600px) {
    grid-template-columns: 100%;
    justify-items: center;
  }
`;

export const WorkCardsNav = styled.ul`
  li {
    border: 2px solid #9e9e9e5c;
    list-style: none;
    padding: 0.5rem 1rem;
    font-weight: 600;
    color: #6e6c6c;
    cursor: pointer;
    display: inline-block;
    border-right: 1px;

    &:hover {
      color: #007ebd;
    }

    &::after {
      content: "";
      background-color: #007ebd;
      border-color: #007ebd;
      color: white;
    }
  }
  justify-content: center;
  margin: 2rem auto;
  text-align: center;
  padding-left: 0;

  li:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  li:last-child {
    border-right: 2px solid #9e9e9e5c;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media all and (max-width: 1200px) {
    li {
      border: none;
      padding: 0.5rem;
    }

    li:last-child {
      border-right: none;
    }
  }
`;

export const WaveButton = styled.a`
  width: 300px;
  padding: 20px;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  text-align: center;
  border-radius: 10px;

  &:hover .wave {
    top: -200px;
  }

  &:hover {
    cursor: pointer;
  }

  span {
    position: relative;
    z-index: 1;
    color: white;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: capitalize;
    word-wrap: none;
  }
  .wave {
    width: 300px;
    height: 300px;
    background-color: #007ebd;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: -100px;
    transition: 0.4s;
  }
  .wave::before,
  .wave::after {
    width: 200%;
    height: 200%;
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  .wave::before {
    border-radius: 45%;
    background-color: #04b1e6;
    animation: wave 10s linear infinite;
  }

  .wave::after {
    border-radius: 40%;
    background-color: rgba(20, 20, 20, 0.5);
    animation: wave 15s linear infinite;
  }

  @keyframes wave {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }

  @media all and (max-width: 1200px) {
    width: 230px;

    span {
      font-size: 12px;
    }
  }
`;
export const SmallerEffectButton = styled.a`
  width: 15%;
  margin-top: 2rem;
  white-space: nowrap;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  text-align: center;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s;
  z-index: 1;
  padding: 10px 20px;
  color: #fff;
  letter-spacing: 1.5px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #007ebd;
    border-radius: 50px;
    z-index: -2;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #002d44;
    transition: all 0.3s;
    border-radius: 50px;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }

  @media all and (max-width: 1200px) {
    padding: 13px 30px;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  @media all and (max-width: 600px) {
    padding: 13px 25px;
  }
`;

export const EffectButton = styled.a`
  white-space: nowrap;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  text-align: center;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s;
  z-index: 1;
  padding: 13px 44px;
  color: #fff;
  letter-spacing: 1.5px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #007ebd;
    border-radius: 50px;
    z-index: -2;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #002d44;
    transition: all 0.3s;
    border-radius: 50px;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }

  @media all and (max-width: 1200px) {
    padding: 13px 30px;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  @media all and (max-width: 600px) {
    padding: 13px 25px;
  }
`;

export const GreyEffectButton = styled.a`
  white-space: nowrap;
  position: relative;
  display: block;
  text-decoration: none;
  top: 1rem;
  width: 40%;
  overflow: hidden;
  text-align: center;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.3s;
  z-index: 1;
  padding: 15px 30px;
  color: #007ebd;
  letter-spacing: 1.5px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e6e6e6;
    border-radius: 50px;
    z-index: -2;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #007ebd;
    transition: all 0.3s;
    border-radius: 50px;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }

  @media all and (max-width: 850px) {
    width: 50%;
  }
`;

export const ModalCloseBtn = styled.button`
  width: 10%;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  position: absolute;
  top: -80px;
  right: 0;
  font-weight: 500;
  text-decoration: underline;

  @media all and (max-width: 1200px) and (min-width: 601px) {
    top: -100px;
    right: 90px;
  }

  @media all and (max-width: 600px) {
    right: 50px;
  }
`;

export const ContentsSection = styled.div`
  display: flex;
  width: 80%;
  max-width: 1600px;
  margin: 3rem auto;
  color: #444;
  .images {
    align-items: self-end;
  }

  div {
    width: 50%;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
  }

  .paragraph {
    margin-bottom: 2rem;
    width: 90%;
    font-weight: 500;
  }

  button {
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    background-color: #32bac8;
    color: white;
    font-weight: 700;
  }

  .images {
    display: flex;
    justify-content: center;
  }

  .left_image {
    position: relative;
    left: 3rem;
    max-width: 800px;
    top: 21px;
  }

  .clearEdge {
    top: 3rem;
  }

  .right_image {
    position: absolute;
    max-width: 800px;
    margin-top: 3rem;
    z-index: -1;
  }

  @media all and (min-width: 1200px) {
    .left_image {
      max-height: 80%;
    }
  }

  @media all and (max-width: 1500px) {
    h2 {
      font-size: 3rem;
    }

    .left_image {
      left: 6rem;
      max-width: 750px;
    }

    .right_image {
      max-width: 700px;
    }

    .paragraph {
      font-size: 0.9rem;
    }
  }
  @media all and (max-width: 1200px) {
    margin-bottom: 0;
    flex-direction: column;

    div {
      width: 100%;
    }

    .paragraph {
      width: 100%;
    }

    .left_image {
      left: 0rem;
      top: 0rem;
      max-width: 900px;
    }

    .right_image {
      width: 100%;
    }
  }
  @media all and (max-width: 850px) {
    .left_image {
      left: -2rem;
      max-width: 650px;
    }
    .right_image {
      width: 90%;
      top: 67rem;
    }
  }

  @media all and (max-width: 600px) {
    width: 90%;
    .paragraph {
      width: 100%;
    }
    .left_image {
      max-width: 550px;
      left: 2rem;
    }
    .right_image {
      top: auto;
    }
  }

  @media all and (max-width: 450px) {
    .left_image {
      max-width: 370px;
      left: 0rem;
    }

    .right_image {
      margin-top: 0;
    }
  }

  @media all and (max-width: 390px) {
  }
`;

export const SwiperGalleryNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  position: relative;
  margin-bottom: 0px;
  border-bottom: 4px solid rgb(0, 126, 189);
  top: 1.5rem;
  font-size: 12px;
  z-index: 3;
  li {
    list-style: none;
    padding: 0.7rem;
    border: 1px solid #007ebd;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #f5f5f5;
    border-bottom: none;
    margin-right: 4px;
    text-transform: uppercase;
    color: #818181;
    letter-spacing: 0.5px;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
  }
  .selectedGalleryBtn {
    background-color: #007ebd;
    color: #fff;
  }
  @media all and (max-width: 1400px) {
    li {
      letter-spacing: 0;
      padding: 0.7rem 0.9rem;
      border: none;
    }
  }

  @media all and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media all and (max-width: 600px) {
    flex-direction: column;
    li {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      margin: 0;
    }
    .learnMore_mb {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border: none;
      letter-spacing: 0.5px;
      padding: 0.7rem 1rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #818181;
      i {
        margin-left: 1rem;
        font-size: 15px;
      }
    }
  }
`;

export const AlertPageSection = styled.div`
  width: 75%;
  margin: 5rem auto;
  text-align: center;
  padding: 5rem;
  h1 {
    font-weight: 600;
  }
  .material-symbols-outlined {
    font-size: 2rem;
  }
  a div {
    margin-top: 2rem;
    text-decoration: underline;
    text-decoration-color: #007ebd;
  }
`;

export const ServicePagesPortfolio = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  justify-content: center;
  grid-gap: 10px;

  .portfolioCard:hover .coverImg {
    filter: brightness(0.7);
  }

  div {
    position: relative;
    overflow: hidden;
    width: 290px;
    height: 200px;
    .coverImg {
      position: relative;
      top: 0;
      width: 100%;
    }
  }

  @media all and (max-width: 1500px) {
    div {
      width: 250px;
      height: 200px;
    }
  }
  @media all and (max-width: 1300px) {
    div {
      width: 230px;
      height: 200px;
    }
  }

  @media all and (max-width: 1100px) {
    div {
      width: 200px;
      height: 200px;
    }
  }
  @media all and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (max-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
    div {
      width: 140px;
      height: 140px;
    }
  }
  @media all and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HorizontalLayOutContainer = styled.section`
  display: flex;
  width: 80%;
  margin: 3rem auto;
  justify-content: space-between;
  max-width: 1200px;

  h3 {
    font-size: 2.2rem;
    font-weight: 400;
    width: 80%;
  }

  h4 {
    font-size: 1.1rem;
  }

  h4,
  p {
    color: #818181;
    margin-top: 1.5rem;
  }

  article,
  img {
    width: 50%;
    max-width: 500px;
  }

  button {
    background-color: #e6e6e6;
    border: none;
    padding: 1rem 3rem;
    border-radius: 30px;
    color: #007ebd;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
    margin-top: 1.5rem;
  }
  @media all and (max-width: 1200px) {
    width: 90%;
  }
  @media all and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    article,
    img {
      width: 90%;
      max-width:900px;
    h3 {
      width: 100%;
    }
  }
`;

export const VerticalLayOutContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 3rem auto 0rem;
  max-width: 1200px;

  h3 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-top: 2rem;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.1rem;
  }

  h4,
  p {
    color: #818181;
    margin-top: 1.5rem;
  }

  article,
  img {
    max-width: 1200px;
  }

  button {
    background-color: #e6e6e6;
    border: none;
    padding: 1rem 3rem;
    border-radius: 30px;
    color: #007ebd;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
    margin-top: 1.5rem;
  }

  @media all and (max-width: 600px) {
    img {
      max-height: 90px;
    }
  }
`;

export const VideoSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  width: 80%;
  margin: auto;
  max-width: 1200px;
  background-color: #f5f5f5;
  border-radius: 10px;
  .coverImg {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    ilter: brightness(0.8);
  }

  .textSection {
    text-align: center;
    padding: 3rem;

    a {
      color: #007ebd;
    }
  }
  @media all and (max-width: 1100px) {
    width: 90%;
  }
  @media all and (max-width: 450px) {
    .textSection {
      padding: 2rem;
    }
  }
`;

export const BrochureBtn = styled.div`
  border-top: 2px solid #007ebd;
  border-bottom: 2px solid #007ebd;
  letter-spacing: 1px;
  color: #007ebd;
  font-size: 1.5rem;
  padding: 1rem;
  text-transform: uppercase;
  display: inline;
  cursor: pointer;
  transition: all 0.25s;
  @media all and (min-width: 600px) {
    &:hover {
      letter-spacing: 4px;
    }
  }
  @media all and (max-width: 700px) {
    font-size: 1rem;
    letter-spacing: 0;
  }
`;
