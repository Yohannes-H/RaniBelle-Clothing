import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Drawer from "../../components/Navbar";
function About() {
  return (
    <div className="about">
      <Drawer />
      <Navbar />
      <div className="aboutContentHolder">
        <div className="aboutImageContainer">
          <Image
            src={"/album/img7.jpg"}
            width="500px"
            height="500px"
            className="aboutImage"
          />
        </div>
        <div className="textContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae
            illum, assumenda reiciendis unde quos dolores minima ea laborum
            nulla labore sit quis ipsum minus dignissimos tenetur, nihil dicta
            magni! Eius explicabo assumenda autem doloremque eveniet voluptates
            ducimus dolorem! Atque nihil facere eligendi quae minima culpa
            laborum, fugiat, reiciendis accusantium velit, vel natus aliquam.
            Sapiente dolores enim architecto optio mollitia? Nisi nihil voluptas
            quae earum vero adipisci possimus maxime ducimus praesentium! Nam
            eum dolor labore debitis expedita et ullam vel nostrum. Laboriosam
            quaerat consequuntur earum neque, necessitatibus cupiditate qui
            enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            recusandae. Quisquam natus odit doloribus tenetur corporis! Repellat
            culpa perspiciatis ad odit facere incidunt sunt maxime accusantium
            sit maiores, ipsum ratione. At aliquam velit atque corrupti nesciunt
            iste veniam consequatur quae ex, officia nobis pariatur optio minima
            et perferendis dolor. Odio facilis tempore doloremque obcaecati a
            voluptatibus tempora exercitationem est voluptate? Ab numquam
            quibusdam, quis itaque cupiditate cum cumque aliquam repellendus!
            Consequatur, repellendus expedita doloremque illum ab voluptas iste,
            inventore provident magni quo aperiam, ipsum quam. Quo porro impedit
            voluptatem et.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
