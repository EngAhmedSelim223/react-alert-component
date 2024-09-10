import { ReactNode } from "react";
import "./alert.scss";
import { X } from "lucide-react";
interface IProps {
    type: string;
    icon: ReactNode;
    title: string;
}

const Alert = ({ type, icon, title }: IProps) => {
    return (
        <>
            <div className={type}>
                <div className="alert-header">
                    <div className="title">
                        <span>{icon}</span>
                        <h4>{title}</h4>
                    </div>

                    <X className="close" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet enim illo incidunt error
                    maxime quas, doloribus iste eaque eius.
                </p>
            </div>
        </>
    );
};

export default Alert;
