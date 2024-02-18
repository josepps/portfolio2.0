import styled from 'styled-components'

export const darkTheme = {
    colorPrimary: '#94D1D5',
    colorSecond: '#00435E',
    colorThird: "#fff",
    linearGradient: "linear-gradient(90deg, #94D1D5 , #007399)"
  };
  
  export const lightTheme = {
    colorPrimary: '#032738',
    colorSecond: '#fff',
    colorThird: "#94D1D5",
    linearGradient: "linear-gradient(90deg, #032738, #94D1D5)"
  };

export const Header = styled.header`
    height: 13vh;
    width: 100vw;
    background: ${(props) => props.theme.colorPrimary};
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: .4s;

    .soon {
        color: ${(props) => props.theme.colorSecond};
        font-size: 1.3rem;
        position: relative;
        transition: all .5s;
        margin-bottom: 30px;

        span {
            position: absolute;
            top: 19px;
            left: 34px;
        }

        b {
            color: ${(props) => props.theme.colorThird};
        }

        &:hover {
            color: ${(props) => props.theme.colorThird};

            b {
                color: ${(props) => props.theme.colorSecond};
            }
        }
    }

    .containerNav {
        input {
            display: none;
        }
    }

    nav ul {
        display: flex;
        gap: 20px;
        list-style-type: none;

        li a {
            color: ${(props) => props.theme.colorSecond};
            font-size: 1.2rem;
            padding-bottom: 2px;
            font-weight: 600;
            background-image: ${(props) => props.theme.linearGradient};
            background-repeat: no-repeat;
            background-size: 0% 2px;
            background-position: left bottom;
            transition: all 0.5s ease;

            &:hover {
                background-size: 100% 3px;
                color: ${(props) => props.theme.colorThird};
                margin-bottom: 10px;
            }
        }
    }

    .container {
        position: relative;
        display: inline-block;
        width: 80px;
        height: 34px;

        input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            inset: 0;
            background: linear-gradient( skyblue, cadetblue);
            box-shadow: inset 0 0 3px;
            transition: .4s;
            border-radius: 34px;
            overflow: hidden;
            z-index: 1;

            &::before {
                position: absolute;
                content: "";
                width: 26px;
                height: 26px;
                background: gold;
                left: 4px;
                bottom: 4px;
                border-radius: 50%;
                box-shadow: 
                    inset 0 -1px 2px #987416,
                    0 1px 2px #80808077,
                    0 0 0 10px #ffffff22,
                    0 0 0 20px #ffffff22,
                    10px 0 0 20px #ffffff22
                ;
                transition: .4s;
            }

            &::after {
                content: "";
                position: absolute;
                background: #535370;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                bottom: 65%;
                right: 16%;
                box-shadow: 
                    -8px 7px 0 3px #535370,
                    2px 20px 0 #535370;
                transition: .4s;
                transform: scale(0) rotate(360deg);
                filter: saturate(.75);
            }            
        }

        input:checked + .slider {
            background: linear-gradient(-45deg, #222, #000030);
            filter: drop-shadow(0 0 2px #fff);
        }

        input:checked + .slider::before {
            background: #ddd;
            transform: translateX(180%);
            box-shadow: 
                inset 0 -1px 2px gray,
                0 1px 2px #555,
                0 0 0 10px #ffffff22,
                0 0 0 20px #ffffff22,
                -10px 0 0 20px #ffffff22
            ;
        }

        input:checked + .slider::after {
            transform: scale(1) rotate(-24deg);
        }

        input:checked + .slider .background {
            transform: translate(260%);
            opacity: 0;
        }

        .star {
            transform: scale(0);
            transition: .4s;
        }
        
        input:checked + .slider .star {
            position: absolute;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-bottom: 7px solid #fff;
            border-top: none;
            transform: rotate(35deg);
            margin: 5px 0;
            transform: scale(.3) translate(50%);
        }

        input:checked + .slider .star:last-child {
            transform: scale(.4) translate(225%, 300%);
        }

        input:checked + .slider .star::before, .star::after {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-top: none;
        }

        input:checked + .slider .star::before {
            border: 3px solid transparent;
            border-bottom: 8px solid #fff;
            transform: rotate(35deg);
            top: -7px;
            left: 2px;
        }

        input:checked + .slider .star::after {
            border: 10px solid transparent;
            border-bottom: 7px solid #fff;
            transform: rotate(70deg);
            top: -7px;
            left: -4px;
        }

        .background {
            position: absolute;
            width: 10px;
            height: 10px;
            bottom: 0;
            right: 0;
            background: #fff;
            border-radius: 50%;
            box-shadow: 
                0 -10px 0 8px #fff,
                -10px 0 0 8px #fff,
                -45px 0 0 5px #fff,
                -60px 0 0 3px #fff,
                -29px 2px 0 8px #fff
            ;
            transition: .4s;
        }
    }

    @media screen and (max-width: 1000px) {
        justify-content: space-between;
        padding: 0 50px;

        .containerNav {
            width: 100vw;
            height: 13vh; 
            position: absolute;
            top: 0;
            left: 0;

            nav {
                display: none;
            }

            .menuHamburguer {
                width: 40px;
                height: 32px; 
                position: relative;
                top: 5vh;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                span {
                    width: 40px;
                    height: 6px;
                    background: #fff;
                    position: absolute;
                    border-radius: 8px;

                    &::before, &::after {
                        content: "";
                        width: 40px;
                        height: 6px;
                        background: #fff;
                        position: absolute;
                        border-radius: 8px;
                        transition: all 0.5s;
                    }

                    &::before {
                        top: 12px;
                    }

                    &::after {
                        bottom: 12px;
                    }
                }
            }

            &.ativado {
                height: 100vh;
                background: ${(props) => props.theme.colorPrimary};

                nav {
                    display: flex;
                    justify-content: center;
                    height: 90%;
                    align-items: center;

                    ul {
                        flex-direction: column;
                        align-items: center;
                        gap: 30px;

                        li a {
                            font-size: 2rem;
                        }
                    }
                }

                .menuHamburguer span {
                    background: transparent;

                    &::before {
                        transform: rotate(220deg);
                        top: 0;
                    }

                    &::after {
                        transform: rotate(-220deg);
                        bottom: 0;
                    }
                }
            }
        }
    }
`