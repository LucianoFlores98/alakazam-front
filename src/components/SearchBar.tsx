import { useState, memo } from "react";
import { Input, Button, Card } from "@material-tailwind/react";

// Se utiliza React.memo para evitar renders innecesarios si las props no cambian.
const SearchBar = memo(({ label }: { label: string }) => {
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
    <Card className="w-full md:max-w-sm lg:max-w-lg hover:shadow-md transition bg-white rounded-full">
      <div className="flex flex-row pr-0 pl-2 items-center">
        <Input
          label={label}
          value={search}
          onChange={handleSearchChange}
          color="gray"
          className="w-72 border-none"
          labelProps={{className: "before:border-none after:border-none"}}
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
      </div>
    </Card>
  );
});

export default SearchBar;
