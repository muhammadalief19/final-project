import React from "react";
import asset1 from "../assets/asset-2.png";
function About() {
  return (
    <>
      <div className="w-full relative px-7 py-10">
        <p className="text-4xl font-bold text-center mb-5">About</p>
        <p className="w-3/4 text-justify mx-auto text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatibus facilis reprehenderit, dolorum architecto voluptates
          aspernatur mollitia quos id magni delectus ea necessitatibus dolores
          iure neque officia sed aperiam vel soluta! Sit eligendi minima
          voluptatibus, animi magnam numquam blanditiis nostrum, eius, est vitae
          ex molestias voluptatum. Tenetur suscipit quidem esse itaque
          consectetur quas pariatur animi, sit deserunt! Perspiciatis at
          temporibus nesciunt accusantium eum est ullam, saepe quis neque modi
          distinctio cupiditate hic! Placeat dolore quos assumenda minima
          quaerat, veniam aspernatur facilis praesentium dolorem ea voluptatum
          maiores accusantium, excepturi inventore ullam, a saepe iusto
          voluptatem asperiores dignissimos nam velit consectetur ipsam fuga!
          Quasi, quaerat dolorum debitis animi qui earum. Cupiditate
          reprehenderit repellendus aperiam quos sed, ex temporibus tempore
          perferendis rem, alias tenetur praesentium ut odit corporis, maxime
          architecto magni? Fuga suscipit a, repudiandae veritatis illo nostrum
          eligendi alias id dolorum quae earum autem laboriosam ipsa repellat
          tempora saepe optio, tenetur explicabo aliquam dicta. Tempora, et.
          Delectus consectetur libero tenetur? Earum eos deserunt reprehenderit
          ad voluptatum omnis minus nemo ullam cum numquam, exercitationem esse
          sint aperiam suscipit adipisci voluptate! Earum sit voluptatum dolorem
          dolor provident vel libero a rerum eaque, voluptas quidem nobis ad
          voluptate, nam similique, ipsa ipsum voluptates quasi. Ipsum facilis
          perferendis temporibus necessitatibus, nisi doloribus? Dolores nihil
          quasi, omnis nam tenetur sint doloribus error eos! Dolorem repellendus
          saepe suscipit vero sequi earum voluptates, autem adipisci, non
          accusamus perferendis excepturi fugit doloribus nisi, maiores corrupti
          dicta corporis magnam ipsum quidem! Harum officiis sunt modi nihil
          facilis excepturi, in ut ad?
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
