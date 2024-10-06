import { useState, memo } from "react";
import { Input, Button, Card } from "@material-tailwind/react";

// Se utiliza React.memo para evitar renders innecesarios si las props no cambian.
const SearchBar = memo(() => {
  const [search, setSearch] = useState("");

  // Actualiza el estado con el valor del input.
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    const regex = /^[a-zA-Z\s]*$/; // Solo letras y espacios

    if (regex.test(valor)) {
      setSearch(valor);
    }
  };

  const handleSearchSubmit = () => {
    // Implementar funcionalidad de busqueda

    setSearch("");
  };

  return (
    <Card className=" flex flex-row w-full max-w-[24rem] bg-white rounded-full pr-0 pl-5 items-center">
      <Input
        label="Buscá el alquiler de tus sueños"
        variant="standard"
        value={search}
        onChange={handleSearchChange}
        color="gray"
      />

      <span className="h-7 border-l border-dark/10 ml-1"></span>

      <Button
        size="sm"
        // disabled={!search}
        onClick={handleSearchSubmit}
        color="white"
        variant="text"
        className=" hover:from-primary_2 hover:to-primary transition-all transform hover:scale-105 rounded-r-full"
      >
        <span className="material-symbols-rounded text-darker">search</span>
      </Button>
    </Card>
  );
});

export default SearchBar;
