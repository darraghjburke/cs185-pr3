import "./Table.css";

export default function Table() {
    return (
        <>
            <h1>Projects</h1>
            <table>
                <thead>
                    <th>
                        Name
                    </th>
                    <th>
                        Details
                    </th>
                    <th>
                        Year
                    </th>
                </thead>
                <tr>
                    <td>MapReduce Engine</td>
                    <td>Implemented a Hadoop-like MapReduce...</td>
                    <td>2018</td>
                </tr>
                <tr>
                    <td>Intelligent Indoor Emergency System</td>
                    <td>Developed a priority-based...</td>
                    <td>2019</td>
                </tr>
            </table>
        </>
    );
}