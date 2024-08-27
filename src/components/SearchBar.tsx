import { useState, memo } from "react";
import { Input, Button } from "@material-tailwind/react";

// Se utiliza React.memo para evitar renders innecesarios si las props no cambian.
const SearchBar = memo(() => {
  const [search, setSearch] = useState("");

  // Actualiza el estado con el valor del input.
  const handleSearchChange = (event) => {
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
    <div className="relative flex w-full max-w-[24rem] bg-white rounded-full pl-4 shadow-lg">
      <Input
        label="Buscá el alquiler de tus sueños"
        placeholder="Buscar..."
        variant="standard"
        value={search}
        onChange={handleSearchChange}
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        disabled={!search}
        onClick={handleSearchSubmit}
        className="rounded-full bg-gradient-to-tr from-primary to-primary_2 px-5 py-2 hover:from-primary_2 hover:to-primary transition-all transform hover:scale-105"
      >
        <span className="material-symbols-rounded">search</span>
      </Button>
    </div>
  );
});

export default SearchBar;
