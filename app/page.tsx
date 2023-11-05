import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

export default function page() {
  return (
    <div className="flex flex-col">
      <nav className="h-16 bg-white flex justify-between items-center px-6">
        <div className="w-16">
          <div className="bg-black h-10 w-10 rounded-full"></div>
        </div>
        <div className="text-black flex justify-between w-[70%]">
          <Link href={"#"}>Home</Link>
          <Link href={"#about"}>about</Link>
          <Link href={"#"}>services</Link>
          <Link href={"#"}>contact</Link>
        </div>
      </nav>

     <section className="relative h-screen">
        <Image
          width="1000"
          height={80}
          src={"/banner.avif"}
          className="absolute w-full h-[500px] lg:h-[700px] z-0"
          alt="resort"
        />
        <h1
          className="relative flex justify-center top-[250px] bg-opacity-10 lg:[top-350px] text-5xl md:text-8xl z-10"
          style={{ textShadow: "2px 2px 1px black" }}
        >
          WELCOME
        </h1>
      </section>


      <section className="container flex justify-between">
        <div className="slider-wrapper">
          <div className="slider">
            <img
              id="slide-1"
              src="https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary orange planet in space"
            />
            <img
              id="slide-2"
              src="https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary green planet in space"
            />
            <img
              id="slide-3"
              src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary blue planet in space"
            />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider">
            <img
              id="slide-1"
              src="https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary orange planet in space"
            />
            <img
              id="slide-2"
              src="https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary green planet in space"
            />
            <img
              id="slide-3"
              src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary blue planet in space"
            />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider">
            <img
              id="slide-1"
              src="https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary orange planet in space"
            />
            <img
              id="slide-2"
              src="https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary green planet in space"
            />
            <img
              id="slide-3"
              src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary blue planet in space"
            />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>

     
      <section
        className="h-screen p-8 flex flex-col justify-center items-center"
        id="about"
      >
        <h2 className="text-3xl">Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi
          ratione, aliquam natus dicta modi itaque, necessitatibus iste ipsa
          harum magnam reprehenderit quod exercitationem nobis. Aliquam suscipit
          nemo ab! Quasi vel, voluptate distinctio reprehenderit illo quam quod
          voluptatibus odio ipsum aliquid, praesentium quaerat voluptas
          cupiditate autem error, ducimus corporis? Ipsam aut esse ipsa, at ab
          nesciunt? Magni asperiores hic dicta provident quisquam maiores
          perferendis autem incidunt obcaecati voluptatem. Nam cum perferendis
          dignissimos incidunt maxime, totam illum voluptatum, dolorem quisquam
          iure aspernatur nisi, debitis architecto numquam recusandae ex
          ducimus. Maiores vitae sint enim accusamus praesentium? Quos nesciunt
          asperiores voluptas eligendi similique?
        </p>
      </section>
      <section></section>
      <div className="lg:h-screen sm:h-[1600px] bg-blue-400 flex flex-wrap justify-evenly items-center gap-3">
        <div className="h-[400px] m-6 bg-green-400 w-[300px] sm:w-[calc(50% - 1rem)] lg:w-[calc(33.333% - 1rem)]"></div>
        <div className="h-[400px] m-6 bg-green-400 w-[300px] sm:w-[calc(50% - 1rem)] lg:w-[calc(33.333% - 1rem)]"></div>
        <div className="h-[400px] m-6 bg-green-400 w-[300px] sm:w-[calc(50% - 1rem)] lg:w-[calc(33.333% - 1rem)]"></div>
      </div>
      <footer className="h-24 bg-white"></footer>
    </div>
  );
}
