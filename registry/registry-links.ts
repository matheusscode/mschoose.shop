import { ElementType } from "react";
import { HomeIcon, ListIcon, Building2Icon, BoxIcon } from "lucide-react";

type RegistryLink = {
  id: string;
  icon?: ElementType;
  label: string;
  pathname: string;
  sub_links?: RegistryLink[];
};

export const registry_links: RegistryLink[] = [
  {
    id: "1",
    icon: HomeIcon,
    label: "Início",
    pathname: "/",
  },
  {
    id: "2",
    label: "Categorias",
    icon: ListIcon,
    pathname: "/categories",
    sub_links: [
      {
        id: "2-1",
        label: "Blusas",
        pathname: "",
      },
      {
        id: "2-2",
        label: "Camisetas",
        pathname: "",
      },
      {
        id: "2-3",
        label: "Regatas",
        pathname: "",
      },
      {
        id: "2-4",
        label: "Moletons",
        pathname: "",
      },
      {
        id: "2-5",
        label: "Vestidos",
        pathname: "",
      },
      {
        id: "2-6",
        label: "Saias",
        pathname: "",
      },
      {
        id: "2-7",
        label: "Calças",
        pathname: "",
      },
      {
        id: "2-8",
        label: "Shorts",
        pathname: "",
      },
      {
        id: "2-9",
        label: "Roupas íntimas",
        pathname: "",
      },
      {
        id: "2-10",
        label: "Roupa de banho",
        pathname: "",
      },
      {
        id: "2-11",
        label: "Pijamas",
        pathname: "",
      },
    ],
  },
  {
    id: "3",
    icon: Building2Icon,
    label: "Sobre nós",
    pathname: "/about-us",
  },
  {
    id: "4",
    icon: BoxIcon,
    label: "Contato",
    pathname: "/contact",
  },
];
