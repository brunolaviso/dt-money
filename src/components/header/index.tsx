import * as Dialog from "@radix-ui/react-dialog";
import logo from "./../../assets/logo.png";
import "./header.css";
import { X, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [selectedType, setSelectedType] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

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
            <Dialog.Title className="dialog-title">
              Cadastrar transação
            </Dialog.Title>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Preço" />
              <div className="form-type">
                <button
                  className={selectedType === 'income' ? 'income' : ''}
                  onClick={() => setSelectedType("income")}
                  type="button"
                >
                  <ArrowUpCircle color="#12A454" />
                  Entrada
                </button>
                <button
                  className={selectedType === 'withdraw' ? 'withdraw' : ''}
                  onClick={() => setSelectedType("withdraw")}
                  type="button"
                >
                  <ArrowDownCircle color="#E52E4D" />
                  Saída
                </button>
              </div>
              <input type="text" placeholder="Categoria" />
              <button type="submit">Cadastrar</button>
            </form>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </header>
  );
}
