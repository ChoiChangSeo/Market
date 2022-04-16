import styled from "@emotion/styled";
import Slider from "react-slick";

export default function BannerLayout() {
  const Wrapper = styled.div`
  height: 300px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 3%;
    background-size: cover;
    background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url("/LoginBackground.jpg");
  `;

  const settings = {
    infinite: true,
    autoplay : true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Number1 = styled.div`
    margin: 4% 0px 0px 37%;
    font-weight: bold;
    font-size: 100px;
    color: yellowgreen;
  `;

  const Number2 = styled.div`
    margin: 4% 0px 10% 38%;
    font-weight: bold;
    font-size: 100px;
    color: yellowgreen
  `;

  return (
    <Wrapper>
      <Slider {...settings}>
          <Number1>
            With.Market
          </Number1>
          <Number2> 
            여기 다있소
          </Number2>
      </Slider>
    </Wrapper>
  );
}
