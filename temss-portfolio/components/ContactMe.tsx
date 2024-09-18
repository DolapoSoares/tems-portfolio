import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 min-h-screen justify-evenly  mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text2xl mt-0">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
         I am open to connecting,
          <span> Contact Me</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#f7ab0a] animate-pulse w-8 h-8" />
            <p className="text-2xl">joycetemilolu1@gmail.com </p>
          </div>
          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#f7ab0a] animate-pulse w-8 h-8" />
            <p className="text-2xl">
              Nigeria.
            </p>
          </div>
          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#f7ab0a] animate-pulse w-8 h-8" />
            <p className="text-2xl">
            Please subscribe and like my video - <a>www.youtube.com/@joycetemilolu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
