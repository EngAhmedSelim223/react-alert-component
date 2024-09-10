import Alert from "./components/ui/Alert/Alert";
import { Ban, BellRing } from "lucide-react";
function App() {
    return (
        <>
            <h1>YOU DON'T KNOW REACT.JS.</h1>
            <Alert type={"alert-danger"} icon={<Ban />} title={"Something went wrong"} />
        </>
    );
}

export default App;
