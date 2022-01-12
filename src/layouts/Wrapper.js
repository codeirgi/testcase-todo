import { Fragment } from "react";
import Footer from "./Footer";

const Wrapper = ({ children }) => {
    return(
        <Fragment>
            <main>
                { children }
            </main>
            <Footer />
        </Fragment>
    )
}

export default Wrapper;