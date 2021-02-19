import { useState } from "react";
import "./Image.css";

const images = [
    "https://images.unsplash.com/photo-1611015543185-5dc216c4578a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80",
    "https://images.unsplash.com/photo-1610995981572-d735c2b3fec1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1610894377328-d7df3b9de50d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1611017148028-c0b65960d40d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80",
    "https://images.unsplash.com/photo-1610971441253-ab06498a0749?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1611006521557-5b6107f5ea74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
]

export default function Image() {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalContent, setModalContent] = useState("");
    return (
        <div id="pics">
            {images.map(img => 
                <img src={img} onClick={() => {setModalVisibility(true); setModalContent(img);}}/>
            )}
            {
                modalVisibility ?
                <div className="modal" onClick={() => setModalVisibility(false)}>
                    <img className="modal-content" src={modalContent}/>
                </div>
                : <></>
            }
        </div>
    );
}