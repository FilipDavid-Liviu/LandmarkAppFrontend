import "./ButtonBar.css";
import userIcon from "/user.svg";
import listIcon from "/list2.svg";
import plusIcon from "/plus.svg";
import minusIcon from "/minus.svg";
import mapIcon from "/map.svg";
import connection from "/connection.svg";
import { Link } from "react-router-dom";
import { useLandmarks } from "../contexts/LandmarkContext.tsx";
import { useAuth } from "../contexts/AuthContext.tsx";

const ButtonBar = () => {
    const { isServerUp } = useLandmarks();
    const { isAdmin } = useAuth();
    return (
        <div className="button-bar">
            <div className="top-buttons">
                <Link to="/">
                    <img src={mapIcon} className="icon" alt="Free Roam" />
                </Link>
                {isAdmin && (
                    <Link to="/add">
                        <img
                            src={plusIcon}
                            className="icon"
                            alt="Add Landmark"
                        />
                    </Link>
                )}

                {isAdmin && (
                    <Link to="/update">
                        <img
                            src={minusIcon}
                            className="icon"
                            alt="Update/Delete Landmark"
                        />
                    </Link>
                )}
                <Link to="/list">
                    <img src={listIcon} className="icon" alt="Landmark List" />
                </Link>
                <Link to="/profile">
                    <img src={userIcon} className="icon" alt="User Profile" />
                </Link>
            </div>
            <Link className="con" to="/connection">
                {isServerUp ? (
                    <div></div>
                ) : (
                    <img src={connection} className="icon" alt="Connection" />
                )}
            </Link>
        </div>
    );
};

export default ButtonBar;
