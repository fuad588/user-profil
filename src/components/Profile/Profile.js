import React from "react";
import Email from "../Email/Email.js";
import Name from "../Name/Name.js";
import Address from "../Address/Address.js";
import PersonalInfo from "../PersonalInfo/PersonalInfo.js";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile">
      <Name title = "Name" name = "Fuad Aliyev"/>
      <Email title = "Email" email = "ffuadaliyev@gmail.com" />
      <Address title = "Address" address = "Baku Binagadi" />
      <PersonalInfo title = "Personal Info" info = "I learn web programing."/>
    </div>
  );
}

