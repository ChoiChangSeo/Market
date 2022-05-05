import styled from "@emotion/styled";
import Slider from "react-slick";

export default function BannerLayout() {
  const Wrapper = styled.div`
    padding: 3% 0% 3% 0%;
    background-color: #F2F0EB;
    border-bottom: 2px solid #590242;
  `;

  const settings = {
    infinite: true,
    autoplay : true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Number1 = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 100px;
    color: #F2522E;
  `;

  const Number2 = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 100px;
    color: #F2522E;
  `;

  return (
    <Wrapper>
      <Slider {...settings}>
          <Number1>
            안녕하세요
          </Number1>
          <Number2>
            WithMarket
          </Number2>
      </Slider>
    </Wrapper>
  );
}
