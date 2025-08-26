import { Button } from "antd";

interface Props {
  text: string;
  onClick?: () => void;
}

export default function CustomButton({ text, onClick }: Props) {
  return <Button onClick={onClick}>{text}</Button>;
}
