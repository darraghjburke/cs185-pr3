import "./Text.css";

export default function Text() {
    return (
        <div id="content">
            <form id="form">
                <label for="first">First Name:</label>
                <input name="first" id="first" type="text"/>
                <label for="last">Last Name:</label>
                <input name="last" id="last" type="text"/>
                <div>Favorite Movie:</div>
                <div class="movie">
                    <input type="radio" name="movie" id="avengers" value="avengers"/>
                    <label for="avengers">Avengers</label>
                </div>
                <div class="movie">
                    <input type="radio" name="movie" id="darkknight" value="darkknight"/>
                    <label for="darkknight">Dark Knight</label>
                </div>
                <div class="movie">
                    <input type="radio" name="movie" id="tenet" value="tenet"/>
                    <label for="tenet">Tenet</label>
                </div>
                <input type="submit" value="Done"/>
            </form>
        </div>
    )
}