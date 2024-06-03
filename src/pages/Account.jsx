import React, { useState } from "react";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoKeyOutline,
  IoPersonCircleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { machine_filling } from "../assets/images";
import { BsPersonSquare } from "react-icons/bs";
import { TbMailForward } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLockOpen } from "react-icons/md";

export default function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confPassword: "",
  });
 const handleChange = e => {
   setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
 }
  return (
    <main className="flex flex-col relative py-20">
      <img
        src={machine_filling}
        alt="machine washingclosed"
        className="absolute top-0 left-0 h-full md:w-1/2 w-full object-cover object-center"
      />
      <div className="container px-4 flex relative justify-center md:justify-end">
        {showLogin ? (
          <form
            data-aos="fade-down"
            data-aos-delay="100"
            action=""
            className="bg-white p-4 shadow md:shadow-none flex flex-col rounded-md gap-4 w-full max-w-md"
          >
            <h3
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-primary text-xl md:text-3xl text-center font-bold"
            >
              Get Exclusive Access
            </h3>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2"
            >
              <IoPersonOutline />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email@email.com"
                className="flex-1 p-1 outline-none"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2"
            >
              <IoKeyOutline />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                required
                outline-none
                placeholder="********"
                minLength={6}
                className="flex-1 p-1 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="relative cursor-pointer p-1"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              type="submit"
              className="py-1 md:py-1.5 px-6 md:px-8 bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max"
            >
              {" "}
              Login{" "}
            </button>
            <p onClick={() => (!showLogin)} className="cursor-pointer p-1 text-centet text-dark/60 underline">Don't have an account yet Signup? Sign up </p>
          </form>
        ) : (
          <form
            data-aos="fade-down"
            data-aos-delay="100"
            action=""
            className="bg-white p-4 shadow md:shadow-none flex flex-col rounded-md gap-4 w-full max-w-md"
          >
            <h3
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-primary text-xl md:text-3xl text-center font-bold"
            >
              Enjoy <span className="text-secondary">Incredible Offers</span> when you Sign up
            </h3>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2"
            >
              <IoPersonCircleOutline />
              <input
                type="text"
                value={inputs.firstname}
                onChange={handleChange}
                required
                placeholder="First Name e.g Devaycon"
                className="flex-1 p-1 outline-none"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2"
            >
              <BsPersonSquare />
              <input
                type="text"
                value={inputs.lastname}
                onChange={handleChange}
                required
                placeholder="Last Name e.g tech"
                className="flex-1 p-1 outline-none"
                name="lastname"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2"
            >
              <TbMailForward/>
              <input
                type="email"
                value={inputs.email}
                name="email"
                onChange={handleChange}
                required
                placeholder="Devaycontech@email.com"
                className="flex-1 p-1 outline-none"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2"
            >
              <RiLockPasswordLine />
              <input
                onChange={handleChange}
                value={inputs.password}
                type={showPassword ? "text" : "password"}
                name="password"
                required
                outline-none
                placeholder="********"
                minLength={6}
                className="flex-1 p-1 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="relative cursor-pointer p-1"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2"
            >
              <MdLockOpen/>
              <input
                onChange={handleChange}
                value={inputs.confPassword}
                type={showPassword ? "text" : "password"}
                name="confPassword"
                required
                outline-none
                placeholder="********"
                minLength={6}
                className="flex-1 p-1 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="relative cursor-pointer p-1"
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              type="submit"
              className="py-1 md:py-1.5 px-6 md:px-8 bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max"
            >
              {" "}
              Create Account
            </button>
            <p onClick={() => (!showLogin)} className="cursor-pointer p-1 text-centet text-dark/60 underline">Already a Member? Login </p>
          </form>
        )}
      </div>
    </main>
  );
}
