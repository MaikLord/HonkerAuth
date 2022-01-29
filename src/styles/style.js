import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    ul {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        padding: 20px 0;
        
        img {
        margin: 10px 100px;
        width: 150px;
    }
    }

    li {
        color: white;
        margin: 10px 20px;
    }
    li:hover {
        color: #E84443;
        cursor: pointer;
    }
`;

export const MainDiv = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700&display=swap");

    display: flex;
    width: 100%;
    justify-content: center;

    form {
        display: block;
        min-width: 500px;
        margin: 50px;
        text-align: center;
        padding: 15px;

        h3 {
            color: white;
            margin: 5px 0 10px 0;
            font-family: "Roboto", sans-serif;
            font-weight: 300;
        }

        input {
            background-color: transparent;
            border-radius: 3px;
            color: white;
            border: 1px solid #303030;
            outline: none;
            padding: 15px;
            margin: 10px 0;
        }
        input:focus {
            background-color: transparent;
            border-radius: 3px;
            border: 1px solid white;
            padding: 15px;
            margin: 10px 0;
        }

        input[type=text] {
            width: 100%;
        }
    }
        input[type=password] {
            width: 100%;
        }
        button {
            width: 100%;
            justify-content: center;
            font-size: 12pt;
            font-weight: 400;
            margin: 10px 0;
            color: white;
            background-color: #ef2727;
            border-radius: 3px;
            padding: 15px;
            border: none;
            cursor: pointer;
            font-family: "Roboto", sans-serif;
        }
        button:hover {
            background-color: #ef3535;
        }
        .register {
            background-color: #101010;
        }
        .register:hover {
            background-color: #151515;
        }
    }
`;