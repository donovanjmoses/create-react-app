import React from "react"
import "./styles.css";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className = "home">
            <div className = "title">
                <h1>
                    <p>My name is</p>
                    <p>Donovan</p>
                    <p>I build software that makes a difference</p>
                    <div className = "person">
                        <img src = {`${process.env.PUBLIC_URL}/logo192.png`} alt = "person"/>

                    </div>
                </h1>
            </div>
        </div>
    );
};

export default Home;