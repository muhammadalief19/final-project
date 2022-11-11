import React from "react";
import asset1 from "../assets/asset-2.png";
function About() {
  return (
    <>
      <div className="w-full relative px-7 py-10">
        <p className="text-4xl font-bold text-center mb-5">About</p>
        <p className="w-3/4 text-justify mx-auto text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          similique, cupiditate laudantium sapiente quas, omnis voluptatem autem
          at rem nobis modi tenetur ipsam accusantium. Laboriosam omnis
          reiciendis excepturi, maiores tenetur quae beatae ipsam laudantium
          pariatur illum! Error quod ex quidem quia dolorum quo nostrum
          similique magnam, pariatur veniam aliquid, totam consectetur suscipit
          corrupti. Inventore dicta reprehenderit ullam ipsum, unde, aliquam
          dolore vel repudiandae dolores corporis, quas earum. Quae architecto,
          cupiditate recusandae placeat quibusdam enim rerum voluptates
          voluptatum, ab ea tenetur dicta minus dolore possimus? Error placeat,
          cupiditate a voluptas recusandae, aliquam nesciunt distinctio est,
          deleniti doloribus similique impedit ab praesentium. Excepturi beatae
          et iusto dicta neque unde! Repellendus dolores veniam voluptatibus
          ullam eaque aspernatur numquam eius repellat atque ipsam? Nobis
          repudiandae odio fuga atque quasi explicabo optio enim earum possimus.
          In adipisci tempore, dolore iure quaerat fugit minus sed aut maxime
          voluptatum optio, velit rerum mollitia voluptas quam odio, temporibus
          aliquam ab a. Maxime beatae neque quo dolor nobis! Ipsum eum iure
          quod, vitae molestiae quam recusandae accusamus omnis vero. Possimus
          voluptates expedita voluptas. Repellendus totam vel excepturi sequi
          commodi consequatur nobis nihil architecto facilis voluptates natus
          quasi, qui culpa similique molestiae corrupti voluptas beatae eos
          officia, perspiciatis itaque accusamus ratione! Delectus ratione
          dolorum totam ipsam voluptates magnam. Architecto rem voluptate odit
          natus possimus non unde earum obcaecati et necessitatibus iste quam
          quisquam aut laudantium commodi ea quia ullam impedit similique,
          dolorum, hic perspiciatis sit maiores eligendi. Suscipit laborum
          labore natus, odio laboriosam dolorum repellendus animi mollitia
          perferendis, dolorem tenetur?
        </p>
        <img
          src={asset1}
          alt=""
          className="absolute right-12 top-28 w-[350px] hover:translate-x-16 hover:-rotate-12 translate-y-14 transition-all duration-500  ease-in-out"
        />
      </div>
    </>
  );
}

export default About;
