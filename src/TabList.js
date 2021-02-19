import './TabList.css';


export default function TabList(props) {
    return (
        <div id="navbar">
            {props.pages.map(
                page =>
                <a
                    onClick={() => props.setPage(page)}
                    className={props.selected === page ? "selected" : ""}
                >
                    {page}
                </a>
            )}
        </div>
    );
}