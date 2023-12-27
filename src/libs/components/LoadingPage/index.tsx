// ** assets
import { LogoIcon } from "@assets/icons";

// ** components
import { LoadingSpinner } from "@components";

export const LoadingPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center flex-col gap-3">
      <LogoIcon className="h-32 w-32" />
      <LoadingSpinner className="!w-12 !h-12" />
    </div>
  );
};
