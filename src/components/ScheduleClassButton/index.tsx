import Link from "next/link";
import { Button } from "../_Primitives/Button";

export function ScheduleClassButton() {
  return (
    <div className="sticky bottom-0 left-0 flex h-[84px] items-center justify-center bg-brand-primary-blue sm:hidden">
      <Link
        rel="noopener noreferrer"
        href={"https://deepdiveschool.rds.land/diagnostico"}
        target="_blank"
      >
        <Button className="max-w-[227px]">Agendar aula experimental</Button>
      </Link>
    </div>
  );
}
