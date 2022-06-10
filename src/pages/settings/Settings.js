import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            {/* <img
              src="https://images.unsplash.com/photo-1654541697103-41cc9a4ba5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            /> */}
            <img
              src="https://i.pinimg.com/736x/21/2d/12/212d12e421963f8a66f95aece1182069.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Safak" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="safak@gmail.com" />
          <label htmlFor="" id="password">
            Password
          </label>
          <input type="password" id="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
