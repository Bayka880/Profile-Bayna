import React from "react";
import { useEffect, useState } from "react";
import { infoService } from "../infoService/GetInfo";
// import "../style/main.css";
import Type from "./Type";
export default function Main() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [major, setMajor] = useState();
  const [profile, setProfile] = useState();
  const [desc, setDesc] = useState();
  useEffect(() => {
    infoService
      .getName()
      .then((res) => res.json())
      .then((data) => setName(data));
    infoService
      .getAge()
      .then((res) => res.json())
      .then((age) => setAge(age));
    infoService
      .getMajor()
      .then((res) => res.json())
      .then((major) => setMajor(major));
    infoService
      .getProfile()
      .then((res) => res.json())
      .then((data) => setProfile(data));
    infoService
      .getDiscreption()
      .then((res) => res.json())
      .then((data) => setDesc(data));
    infoService.getImage((res) => res.json()).then((im) => console.log(im));
  }, []);
  return (
    <div className="main-back">
      <div className="main-section container ">
        <div>
          <h1>
            Hey There, <span> I'm {name && name.name}</span>
          </h1>
          <Type />
        </div>
        <div className="profile-section">
          <img
            src="http://localhost:3000/Images/profile.png"
            className="profile-pic"
            alt=""
          />
        </div>
        <div>{desc && desc.description}</div>
      </div>
      <div>
        МУИС-ийг {major && major.major}-ээр {major && major.degree}-ийн зэрэгтэй
        төгссөн.Одоо {age && age.age} настай.
      </div>
    </div>
  );
}
