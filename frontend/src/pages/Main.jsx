import FetchDataExample from "../components/example/FetchDataExample";
import Loading from "../components/loading/Loading";

import "../features/main/main.css";


const Main = () => {
    return (
        <div className="main">
            <Loading />
            <FetchDataExample />
        </div>
    );
};


export default Main;