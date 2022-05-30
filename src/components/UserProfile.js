import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const [user, userDetail] = useState({});
    const host = "http://localhost:5000";
    const navigate = useNavigate();
    useLayoutEffect(() => {
        getUserDetail();
    }, []);

    // handlelogout
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    // get use details
    const getUserDetail = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        userDetail(json);
    };

    return (
        <div className="container w-50 my-4">
            <div className=" d-flex justify-content-center align-items-center border border-success rounded-3 px-3 py-3">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
                    className="mx-2 px-3 "
                    style={style}
                />
                <div className="card-body">
                    <h3 className="card-title">{user.name}</h3>
                    <h5>{user.email}</h5>
                    <button className="btn btn-primary" onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};
const style = {
    height: "100",
    width: "100",
    cursor: "pointer",
};
export default UserProfile;
