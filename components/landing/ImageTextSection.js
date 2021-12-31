import Image from "next/image";
import settingsMock from "../../public/assets/branding/settings-mock-v1.png";
import embedMock from "../../public/assets/branding/embed-mock-v1.png";

export default function ImageTextSection({ orderLast }) {
  if (orderLast) {
    return (
      <section className="flex flex-col xl:mt-8 xl:flex-row xl:space-x-16 pb-4 pt-12 xl:py-36 justify-start items-center">
        <div className="text-center max-w-lg xl:text-right xl:ml-8 order-last">
          <p className="text-4xl font-bold">
            Embedding on-brand forms has never been this simple
          </p>
          <p className="text-2xl my-4 font-normal">
            There is no need to get technical, with fireforms embedding is a
            breeze and your forms will look like they where made for your
            website.
          </p>
        </div>

        <div className="max-w-2xl">
          <Image src={embedMock} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col xl:flex-row xl:space-x-16 mt-12 xl:mt-32 justify-center items-center">
        <div className="text-center max-w-lg xl:text-left order-last xl:order-first mt-4 lg:mt-0">
          <p className="text-4xl font-bold">
            Forms your visitors will actually answer
          </p>
          <p className="text-2xl my-4 font-normal">
            We believe that everyone should have access to clean and effective
            forms. You shouldn't have to hire a developer to enjoy the benefits
            of a professional multi-step form.
          </p>
        </div>

        <div className="max-w-2xl pl-0 shadow-sm rounded-lg">
          <Image src={settingsMock} />
        </div>
      </section>
    );
  }
}
