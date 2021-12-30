import Image from "next/image";
import screenshot from "../../public/assets/branding/builder-screenshot.png";

export default function ImageTextSection({ orderLast }) {
  if (orderLast) {
    return (
      <section className="flex flex-col xl:flex-row xl:space-x-16 mt-32 justify-start items-center">
        <div className="text-center max-w-lg xl:text-right xl:ml-8 order-last">
          <p className="text-4xl font-bold">
            Embeding on-brand forms has never been this simple
          </p>
          <p className="text-2xl my-4 font-normal">
            There is no need to get technical, with fireforms embeding is a
            breeze and your forms will look like they where made for your
            website.
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
          <p className="text-4xl font-bold">
            Forms your visitors will actually answer
          </p>
          <p className="text-2xl my-4 font-normal">
            We believe that everyone should have access to clean and effective
            forms. You shouldn't have to hire a developer to enjoy the benefits
            of a professional multistep form.
          </p>
        </div>

        <div className="max-w-2xl pl-0">
          <Image src={screenshot} />
        </div>
      </section>
    );
  }
}
