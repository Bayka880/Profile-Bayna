import { infoService } from "./infoService/GetInfo";
import { useEffect, useState } from "react";
import Header from "./components/Header";
function App() {
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
    <div className="age">
      <Header />
      <h1>{name && name.name}</h1>
      <div>{age && age.age}</div>
      <div>{major && major.major}</div>
      <div>{desc && desc.description}</div>
    </div>
  );
}

export default App;
