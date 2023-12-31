import Image from "next/image";
import emailImg from "/public/contactImg.svg";
import { ClickButtonStyle } from "./ProjectCard";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Title from "./Title";

const errMsg = [
  "이름을 입력해주세요.",
  "이메일을 입력해주세요.",
  "이메일 주소가 올바르지 않습니다",
  "메세지를 입력해주세요.",
];

const EmailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const inputStyle =
  "py-1 px-2 focus:outline-none text-white rounded-md bg-[#121212] border-2 border-slate-600 focus:border-slate-400 focus:outline-2 focus:outline-white/20";

const showError = (error: boolean, errMessage: string) => {
  return (
    <p className={`text-sm text-red-300 pt-1 ${error ? "block" : "hidden"}`}>
      {errMessage}
    </p>
  );
};

const ContactSection = () => {
  const form = useRef(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameErr, setNameErr] = useState<boolean>(false);
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [messageErr, setMessageErr] = useState<boolean>(false);

  const [nameErrMsg, setNameErrMsg] = useState<string>("");
  const [emailErrMsg, setEmailErrMsg] = useState<string>("");
  const [messageErrMsg, setMessageErrMsg] = useState<string>("");

  const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      name.length &&
      email.length &&
      message.length &&
      EmailRegex.test(email)
    ) {
      setNameErr(false);
      setEmailErr(false);
      setMessageErr(false);

      if (
        process.env.NEXT_PUBLIC_SERVICE_KEY !== undefined &&
        process.env.NEXT_PUBLIC_TEMPLATE_ID !== undefined &&
        form.current !== null
      ) {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_KEY,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            (result) => {
              setName("");
              setEmail("");
              setMessage("");
              alert("성공적으로 이메일이 전송되었습니다.");
            },
            (error) => {
              alert("이메일 전송이 실패되었습니다.");
            }
          );
      }
    } else {
      if (!name.length) {
        setNameErr(true);
        setNameErrMsg(errMsg[0]);
      } else {
        setNameErr(false);
      }

      if (!email.length) {
        setEmailErr(true);
        setEmailErrMsg(errMsg[1]);
      } else {
        if (!EmailRegex.test(email)) {
          setEmailErr(true);
          setEmailErrMsg(errMsg[2]);
        } else {
          setEmailErr(false);
        }
      }

      if (!message.length) {
        setMessageErr(true);
        setMessageErrMsg(errMsg[3]);
      } else {
        setMessageErr(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-white relative bg-[#121212] py-20 px-4"
    >
      <Title title={"Contact"} />
      <section className="py-10 lg:py-20 flex flex-col lg:flex-row items-center lg:items-end gap-3 sm:gap-10 md:gap-16 w-full">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 max-w-[540px]"
        >
          <Image src={emailImg} alt="contactLeftImage" />
        </motion.div>
        <form
          className="emailsend flex flex-col items-center lg:items-end flex-1 gap-3 w-full sm:max-w-[80%]"
          ref={form}
          onSubmit={submitHandler}
        >
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                className={`${inputStyle}`}
                type="name"
                id="name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              {showError(nameErr, nameErrMsg)}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className={`${inputStyle}`}
                type="email"
                id="email"
                name="email"
                placeholder="Your Email address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {showError(emailErr, emailErrMsg)}
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                className={`${inputStyle}`}
                rows={3}
                id="message"
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {showError(messageErr, messageErrMsg)}
            </div>
          </div>
          <button className={`${ClickButtonStyle} w-24`}>Submit</button>
        </form>
      </section>
    </section>
  );
};

export default ContactSection;
