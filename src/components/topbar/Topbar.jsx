import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
    return (
        <div>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">chrisadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img 
                        src="" 
                        alt="ABC" 
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
