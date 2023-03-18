import { useContext } from "react";
import ScreenContext from "../../contexts/ScreenSize/ScreenContext";

const Home = () => {
    const screenSize = useContext(ScreenContext);

    return <div style={{height: screenSize.height - 60, display: 'flex', flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center'}}>
        <h1>Home</h1>
    </div>
}

export default Home;