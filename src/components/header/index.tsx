import * as Dialog from "@radix-ui/react-dialog";
import logo from "./../../assets/logo.png";
import "./header.css";
import { X } from "lucide-react";

export function Header() {
  return (
    <header>
      <div className="container header-content">
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="header-content-button">Nova transação</button>
          </Dialog.Trigger>
          <Dialog.Overlay className="dialog-overlay " />
          <Dialog.Content className="dialog-content">
            <Dialog.Close asChild>
              <button className="button-close-dialog">
                <X />
              </button>
            </Dialog.Close>
            <Dialog.Title>Cadastrar transação</Dialog.Title>
            <div className="formulario">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Preço" />
              <input type="text" placeholder="Categoria" />
              <button>Cadastrar</button>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </header>
  );
}
