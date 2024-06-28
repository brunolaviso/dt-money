import * as Dialog from "@radix-ui/react-dialog";
import logo from "./../../assets/logo.png";
import "./header.css";
import { X, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createTransaction } from "../../api/transaction";

interface Inputs {
  name: string;
  price: string;
  category: string;
}

export function Header() {
  const [selectedType, setSelectedType] = useState("");
  const { register, handleSubmit } = useForm<Inputs>();

  function submitCreateTransaction(data: Inputs) {
    createTransaction({
      name: data.name,
      price: data.price,
      category: data.category,
      type: selectedType,
      date: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9),
    });
  }

  return (
    <header>
      <div className="container header-content">
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="header-content-button">Nova transação</button>
          </Dialog.Trigger>
          <Dialog.Portal>
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
              <form onSubmit={handleSubmit(submitCreateTransaction)}>
                <input type="text" placeholder="Nome" {...register("name")} />
                <input type="text" placeholder="Preço" {...register("price")} />
                <div className="form-type">
                  <button
                    className={selectedType === "income" ? "income" : ""}
                    onClick={() => setSelectedType("income")}
                    type="button"
                  >
                    <ArrowUpCircle color="#12A454" />
                    Entrada
                  </button>
                  <button
                    className={selectedType === "withdraw" ? "withdraw" : ""}
                    onClick={() => setSelectedType("withdraw")}
                    type="button"
                  >
                    <ArrowDownCircle color="#E52E4D" />
                    Saída
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Categoria"
                  {...register("category")}
                />
                <button type="submit">Cadastrar</button>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
