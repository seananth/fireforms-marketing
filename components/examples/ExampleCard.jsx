import Image from "next/image";

export const ExampleCard = (props) => {
  return (
    <div>
      <div className="text-center py-10 h-64 shadow rounded">
        <Image src={props.preview} />
      </div>
      <div className="pt-2">
        <p className="text-2xl">{props.title}</p>
        <p className="text-lg">{props.body}</p>
      </div>
    </div>
  );
};
