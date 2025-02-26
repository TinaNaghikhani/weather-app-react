import React from "react";
import styled from "styled-components";

const Raining: React.FC = () => {
    return (
        <StyledWrapper>
            <div className="loader">
                <div className="snow">
                    {[...Array(22)].map((_, index) => (
                        <span key={index} style={{ animationDuration: `${15 / (index + 10)}s` }} />
                    ))}
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    width: 110px;
    height: 30px;
    background: #fff;
    border-radius: 100px;
  }

  .loader::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 10px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 40px 0 0 20px #fff;
  }

  .snow {
    position: relative;
    display: flex;
    z-index: 1;
  }

  .snow span {
    position: relative;
    width: 3px;
    height: 3px;
    background: #4c9beb;
    margin: 0px;
    border-radius: 50%;
    animation: snowing 5s linear infinite;
    transform-origin: bottom;
  }

  @keyframes snowing {
    0% {
      transform: translateY(0px);
    }
    70% {
      transform: translateY(100px) scale(1);
    }
    100% {
      transform: translateY(100px) scale(0);
    }
  }
`;

export default Raining;
