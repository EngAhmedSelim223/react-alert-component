import Alert from "./components/ui/Alert/Alert";
import { Ban, BookCheck, CircleAlert, MailCheck } from "lucide-react";
function App() {
    return (
        <>
            <h1>YOU DON'T KNOW REACT.JS.</h1>
            <Alert type="danger" icon={<Ban />} title="Error" />
            <Alert type="info" icon={<BookCheck />} title="Info" />
            <Alert type="success" icon={<MailCheck />} title="Success" />
            <Alert type="warning" icon={<CircleAlert />} title="Warning" />
        </>
    );
}

export default App;
