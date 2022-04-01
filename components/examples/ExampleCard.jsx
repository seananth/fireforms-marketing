import Image from "next/image";

export const ExampleCard = (props) => {
  return (
    <div>
      <div className="flex justify-center items-center h-64 shadow rounded hover:shadow-md hover:cursor-pointer">
        <div className="w-9/12">
          <Image src={props.preview} />
        </div>
      </div>
      <div className="pt-2">
        <p className="text-3xl">{props.title}</p>
        <p className="text-lg">{props.body}</p>
      </div>
    </div>
  );
};
