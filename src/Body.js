import Text from "./pages/Text";
import Image from "./pages/Image";
import Table from "./pages/Table";
import Email from "./pages/Email";
import Video from "./pages/Video";
import { useState } from "react";

const pages = {
    "Text": <Text/>,
    "Image": <Image/>,
    "Video": <Video/>,
    "Table": <Table/>,
    "Email": <Email/>
}

export default function Body(props) {
    const [scrollButtonVisibility, setScrollButtonVisibility] = useState(false);
    return <div id="content" onScroll={() => setScrollButtonVisibility(document.body.scrollTop < document.body.clientHeight / 4)}>
        {pages[props.selected]}
        {scrollButtonVisibility ? <button id="scroll-button" onCLick={() => {
            window.scrollTo(0,0);
        }}>Scroll To Top</button> : <></>}
    </div>;
}