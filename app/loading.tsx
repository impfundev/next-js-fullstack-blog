import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
