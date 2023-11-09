import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GanttChart } from "lucide-react";

export default function Header() {
  return (
    <nav className="flex justify-between p-6 px-8">
      <h1 className="font-bold text-3xl">Fula</h1>
      <Sheet>
        <SheetTrigger>
          <GanttChart size={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="pt-10">
            <SheetDescription className="space-y-6">
              <div>
                <SheetTitle>
                  <a className="hover:text-zinc-400 transition-all cursor-pointer">
                    Home
                  </a>
                </SheetTitle>
              </div>
              <div>
                <SheetTitle>
                  <a className="hover:text-zinc-400 transition-all cursor-pointer">
                    Sobre
                  </a>
                </SheetTitle>
              </div>
              <div>
                <SheetTitle>
                  <a className="hover:text-zinc-400 transition-all cursor-pointer">
                    Projetos
                  </a>
                </SheetTitle>
              </div>
              <div>
                <SheetTitle>
                  <a className="hover:text-zinc-400 transition-all cursor-pointer">
                    Tecnologias
                  </a>
                </SheetTitle>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
