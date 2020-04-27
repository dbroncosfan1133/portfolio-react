import React from "react";
import HeroNav from "../components/HeroNav/hero";

class MainPage extends React.Component {


    render() {
        return (
            <div>
                <HeroNav />
                <div className="container">
                    <h1>About Me</h1>
                </div>
            </div>
        )
    }
}

export default MainPage;