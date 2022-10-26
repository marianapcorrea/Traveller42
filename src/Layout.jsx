import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { withRouter } from "react-router";

function Body(props) {
    return (
        <>
            <Header />
            <main className="App">
                <section className="App_content">{props.children} </section>
            </main>
            <Footer />
        </>
    );
}

export default withRouter(Body);
