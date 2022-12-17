import React from "react";
import Email from "../Email/Email.js";
import Name from "../Name/Name.js";
import Address from "../Address/Address.js";
import PersonalInfo from "../PersonalInfo/PersonalInfo.js";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile">
      <Name />
      <Email />
      <Address />
      <PersonalInfo />
    </div>
  );
}
