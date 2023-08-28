import Link from "next/link";

interface Props {
  title: string;
  pageRef: string;
}

export default function MenuBarItem(props: Props) {
  return (
    <Link
      href={props.pageRef}
      className="w-[140px] text-center my-auto text-2xl text-gray-600"
    >
      {props.title}
    </Link>
  );
}
