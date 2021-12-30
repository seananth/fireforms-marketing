import Image from "next/image";
import screenshot from "../../public/assets/branding/builder-screenshot.png";

export default function ImageTextSection() {
  return (
    <section className="flex flex-col xl:flex-row xl:space-x-16 mt-24 items-center">
      <div className="text-center max-w-lg xl:text-left">
        <p className="text-3xl font-bold">
          Everything you need to build high converting multi-step forms.
        </p>
        <p className="text-2xl my-4 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in autem
          repellendus nesciunt quas quibusdam delectus qua
        </p>
      </div>
      
      <div className="max-w-2xl">
        <Image src={screenshot} />
      </div>
    </section>
  );
}