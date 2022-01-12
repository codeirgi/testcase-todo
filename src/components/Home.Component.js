import { Fragment } from "react";
import HomeBottom from "../contents/Home.Bottom";
import HomeMiddle from "../contents/Home.Middle";
import HomeTop from "../contents/Home.Top";

const HomeComponent = () => {
    return(
        <Fragment>
            <HomeTop />
            <HomeMiddle />
            <HomeBottom />
        </Fragment>
    )
}

export default HomeComponent;