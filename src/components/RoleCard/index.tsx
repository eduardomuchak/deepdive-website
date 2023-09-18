import CintiaImage from "@/assets/images/specialists/CintiaNogueira.png";
import Image from "next/image";

export function RoleCard() {
  return (
    <div className="flex h-fit w-full max-w-[180px] flex-col items-center justify-start space-y-4 rounded-xl bg-[#ffa365] p-5">
      <Image
        src={CintiaImage}
        alt="Person image"
        className="aspect-square w-[100px]"
      />
      <div className="flex flex-col space-y-2">
        <span className="text-center font-sans text-sm font-semibold">
          RECRUTAMENTO
        </span>
        <span className="text-center font-sans text-sm font-medium leading-relaxed tracking-tight">
          Use nossa IA para entrevistas interativas e escolha candidatos com
          mais confiança
        </span>
      </div>
    </div>
  );
}
