import styled from 'styled-components'

export const Header = styled.header`
    height: 13vh;
    width: 100vw;
    background: #032738;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: .4s;

    .soon {
        color: #fff;
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
            color: #94D1D5;
        }

        &:hover {
            color: #94D1D5;

            b {
                color: #fff;
            }
        }
    }

    nav ul {
        display: flex;
        gap: 20px;
        list-style-type: none;

        li a {
            color: #fff;
            font-size: 1.2rem;
            padding-bottom: 2px;
            font-weight: 600;
            background-image: linear-gradient(90deg, #032738, #94D1D5);
            background-repeat: no-repeat;
            background-size: 0% 2px;
            background-position: left bottom;
            transition: all 0.5s ease;

            &:hover {
                background-size: 100% 3px;
                color: #94D1D5;
                margin-bottom: 10px;
            }
        }
    }

    &.light {
        background: #94D1D5;

        .soon {
            color: #00435E;
            transition: all .6s linear;

            b {
                color: #fff;
            }

            &:hover {
                color: #fff;

            b {
                color: #00435E;
            }
        }
        }

        nav ul li a {
            color: #00435E;
            background-image: linear-gradient(90deg, #94D1D5 , #007399);

            &:hover {
                color: #fff;
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
`