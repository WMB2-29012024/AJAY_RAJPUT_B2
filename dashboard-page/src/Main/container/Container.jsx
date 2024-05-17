import React from "react";
import CustomerName from "./customer-name";
import "../components/style/Container.css";
import Heading from "../components/Heading";
import Projectlist from "../container/project/Projectlist";
import ProjectProgress from "./project/ProjectProgress";
import AvatarGroup from "./project/AvatarGroup";
const Container = () => {
  const projectsvg1 = <img src="./Images/Vector.svg" alt="svg" />;
  const projectsvg2 = <img src="./Images/FBsvg.svg" alt="svg"  />;
  const projectPeople = <img src="./Images/Avatars-group.png" alt="images" />;
  return (
    <div className="container">
      <CustomerName CustomerName={"Ajay Rajput"} />
      <Heading size={"sm"} text={"Projects"} />
      <div className="Projects">
        <Projectlist
                Class={"KlaraClass"}

          Svg={projectsvg1}
          ProjectName={"Klarna"}
          Campaign={"Email Campaign"}
        />
        <ProjectProgress Progress={60} />
        <AvatarGroup projectPeople={projectPeople} />
      </div>
      <div className="Projects">
        <Projectlist
                Class={"fbClass"}
          Svg={projectsvg2}
          ProjectName={"Facebook"}
          Campaign={"TV Campaign"}
        />
        <ProjectProgress Progress={60} />
        <AvatarGroup projectPeople={projectPeople} />
      </div>
    </div>
  );
};

export default Container;
