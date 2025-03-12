import styled from 'styled-components';

const Card = ({ weatherData }:any) => {
  const iconCode = weatherData.weather[0].icon; // مقدار پیش‌فرض برای جلوگیری از خطا
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // @2x برای کیفیت بالاتر
  console.log(iconCode)
  console.log(iconUrl)
  return (
    <StyledWrapper>
      <div className="card">
        <div className="container">
          <img className='w-40' src={iconUrl} alt="icon" />
        </div>
        <div className="card-header">
          <span>{weatherData.name}</span>
          <span>{weatherData.weather[0].main}</span>
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          <span className="temp">{weatherData.main.temp}</span>
          <span className='maxTemp'>Max Temp:{weatherData.main.temp_max}</span>
          <span className='minTemp'>Min Temp:{weatherData.main.temp_min}</span>
        </div>


        <div className="temp-scale">
          <span>Celcius</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 350px;
    height: 235px;
    position: relative;
    padding: 25px;
    background: radial-gradient(178.94% 106.41% at 26.42% 106.41%,rgb(98,101,99) 0%, rgba(255, 255, 255, 0) 71.88%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,rgb(138, 156, 144);
    box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 23px;
    transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .container {
    width: 250px;
    height: 250px;
    position: absolute;
    right: -55px;
    top: -70px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.7);
  }

  .cloud {
    width: 250px;
  }

  .front {
    padding-top: 45px;
    margin-left: 25px;
    display: inline;
    position: absolute;
    z-index: 11;
    animation: clouds 8s infinite;
    animation-timing-function: ease-in-out;
  }

  .back {
    margin-top: -30px;
    margin-left: 150px;
    z-index: 12;
    animation: clouds 12s infinite;
    animation-timing-function: ease-in-out;
  }

  .right-front {
    width: 45px;
    height: 45px;
    border-radius: 50% 50% 50% 0%;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: -25px;
    z-index: 5;
  }

  .left-front {
    width: 65px;
    height: 65px;
    border-radius: 50% 50% 0% 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
  }

  .right-back {
    width: 50px;
    height: 50px;
    border-radius: 50% 50% 50% 0%;
    background-color: #4c9beb;
    display: inline-block;
    margin-left: -20px;
    z-index: 5;
  }

  .left-back {
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 0% 50%;
    background-color: #4c9beb;
    display: inline-block;
    z-index: 5;
  }

  .sun {
    width: 120px;
    height: 120px;
    background: -webkit-linear-gradient(to right, #fcbb04, #fffc00);
    background: linear-gradient(to right, #fcbb04, #fffc00);
    border-radius: 60px;
    display: inline;
    position: absolute;
  }

  .sunshine {
    animation: sunshines 2s infinite;
  }

  @keyframes sunshines {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }

    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }

  @keyframes clouds {
    0% {
      transform: translateX(15px);
    }

    50% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(15px);
    }
  }

  .card-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .card-header span:first-child {
    word-break: break-all;
    font-weight: 800;
    font-size: 24px;
    line-height: 135%;
    color: rgba(248, 247, 246, 0.66);
  }

  .card-header span:last-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 135%;
    color: rgba(221, 219, 219, 0.62);
  }
.maxTemp{
    word-break: break-all;
    font-weight: 800;
    font-size: 15px;
    line-height: 135%;
    color: rgba(235, 223, 194, 0.66);
}
    .minTemp{
        font-weight: 700;
    font-size: 15px;
    line-height: 135%;
    color: rgba(235, 223, 194, 0.66);
    }
  .temp {
    position: absolute;
    left: 25px;
    bottom: 12px;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    color: rgb(248, 219, 147);
  }

  .temp-scale {
    width: 80px;
    height: 36px;
    position: absolute;
    right: 25px;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(248, 219, 147);
    border-radius: 9px;
  }

  .temp-scale span {
    font-weight: 700;
    font-size: 13px;
    line-height: 134.49%;
    color: rgba(87, 77, 51, 0.66);
  }`;

export default Card;
