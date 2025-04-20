import { BackButton } from "@/components/shared/BackButton";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = "Something went wrong",
}) => {
  return (
    <div className="bg-white rounded-t-3xl mt-2 gap-4 flex items-center justify-center h-full p-4">
      <div className="rounded-full flex items-center justify-center p-2 bg-purple-500">
        <BackButton />
      </div>
      <div>{message}</div>
    </div>
  );
};

export default ErrorMessage;
