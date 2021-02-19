import "./Video.css";
import sample from "./sample-mp4-file.mp4"
export default function Video() {
    return (
        <div id ="videos">
            <video width="320" height="240" controls>
                <source src={sample} type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
            <video width="320" height="240" controls>
                <source src={sample} type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
            <video width="320" height="240" controls>
                <source src={sample} type="video/mp4"/>
                    Your browser does not support the video tag.
            </video>
        </div>
    );
}