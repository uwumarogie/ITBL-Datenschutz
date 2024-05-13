import { InlineNavigation } from "@/components/inline-navigation";
import { SecurePasswordInput } from "@/components/secure-password-input";

export default function Builder() {
  return (
    <div className="flex flex-col max-w-[1100px] px-6 justify-start">
      <div className="hidden lg:block">
        <InlineNavigation />
      </div>

      <div className=" ">
        <SecurePasswordInput />
      </div>
    </div>
  );
}
