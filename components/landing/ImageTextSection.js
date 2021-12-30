import Image from "next/image";
import screenshot from "../../public/assets/branding/builder-screenshot.png";

export default function ImageTextSection({ orderLast }) {
  if (orderLast) {
    return (
      <section className="flex flex-col xl:flex-row xl:space-x-16 mt-32 justify-start items-center">
        <div className="text-center max-w-lg xl:text-right order-last">
          <p className="text-3xl font-bold">
            Everything you need to build high converting multi-step forms.
          </p>
          <p className="text-2xl my-4 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in
            autem repellendus nesciunt quas quibusdam delectus qua
          </p>
        </div>

        <div className="max-w-2xl">
          <Image src={screenshot} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col xl:flex-row xl:space-x-16 mt-32 justify-center items-center">
        <div className="text-center max-w-lg xl:text-left order-last xl:order-first">
          <p className="text-3xl font-bold">
            Everything you need to build high converting multi-step forms.
          </p>
          <p className="text-2xl my-4 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in
            autem repellendus nesciunt quas quibusdam delectus qua
          </p>
        </div>

        <div className="max-w-2xl">
          <Image src={screenshot} />
        </div>
      </section>
    );
  }
}
