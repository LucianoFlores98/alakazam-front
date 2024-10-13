import { useState } from "react";
import FormsStepper from "../components/FormsStepper";
import {
  Input,
  Checkbox,
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Button,
  Select,
  Option,
  Chip
} from "@material-tailwind/react";

function RealEstateCard() {
  const [selectedOption, setSelectedOption] = useState('');
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.id);
  };

  return (
    <Card className="w-[100%] max-w-[30rem] m-auto flex flex-col gap-4 shadow-none">
      <Typography className="text-center font-bold text-2xl mt-10 text-akzm_red select-none">
        ¿Qué querés hacer con tu inmueble?
      </Typography>
      <List className="flex flex-row">
        <ListItem ripple={false} className="p-0 select-none">
          <label
            htmlFor="vender"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                color="deep-orange"
                name="vender-alquilar"
                id="vender"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                onChange={handleRadioChange}
              />
            </ListItemPrefix>
            <Typography
              color="blue-gray"
              className="font-medium text-blue-gray-400"
            >
              Vender
            </Typography>
          </label>
        </ListItem>
        <ListItem ripple={false} className="p-0 select-none">
          <label
            htmlFor="alquilar"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                color="deep-orange"
                name="vender-alquilar"
                id="alquilar"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
                onChange={handleRadioChange}
              />
            </ListItemPrefix>
            <Typography
              color="blue-gray"
              className="font-medium text-blue-gray-400"
            >
              Alquilar
            </Typography>
          </label>
        </ListItem>
      </List>

      {selectedOption === 'alquilar' && (
        <>
          <Typography className="text-xl font-bold text-dark text-center  select-none">
          ¿Cómo querés alquilar tu inmueble?
        </Typography>
          <List className="flex flex-row">
          <ListItem ripple={false} className="p-0 select-none">
            <label
              htmlFor="mes"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  color="deep-orange"
                  name="opciones-alquilar"
                  id="mes"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium text-blue-gray-400">
                Por mes
              </Typography>
            </label>
          </ListItem>
          <ListItem ripple={false} className="p-0 select-none">
            <label
              htmlFor="dia"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  color="deep-orange"
                  name="opciones-alquilar"
                  id="dia"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium text-blue-gray-400">
                Por día
              </Typography>
            </label>
          </ListItem>
        </List>
        </>

      )}
    </Card>
  );
}

function NewPublication() {
  
  const stepperElements = [
    <>
      <RealEstateCard/>
    </>,
    <>
      <div className="mb-1 flex flex-col gap-6 max-w-screen-lg m-auto">
        <div>
          <Typography color="blue-gray" className="text-xl font-bold text-darker pb-3 border-2 border-transparent  border-b-darker">
            ¡Empecemos! Agregá fotos lindas de tu inmueble.
          </Typography>
          <Button className="my-6 bg-akzm_orange">
            Agregar fotos
          </Button>
        </div>
        <div>
          <Typography color="blue-gray" className="text-xl font-bold text-darker mb-10 pb-3 border-2 border-transparent  border-b-darker">
            Completá los siguientes datos
          </Typography>
          <div className="flex gap-4 flex-wrap max-w-screen-lg justify-between">
            <div className="flex flex-wrap flex-col gap-2 min-w-[25%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                ¿Qué es tu inmueble?
              </Typography>
              <Select className="shadow-lg shadow-gray-900/5">
                <Option>Departamento</Option>
                <Option>Casa</Option>
                <Option>Casa quinta</Option>
                <Option>Otro</Option>
              </Select>
            </div>
            <div className="flex flex-wrap flex-col gap-2 min-w-[35%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                Provincia/Estado
              </Typography>
              <Select className="shadow-lg shadow-gray-900/5">
                <Option>Buenos Aires</Option>
                <Option>Córdoba</Option>
                <Option>Misiones</Option>
                <Option>Santa fé</Option>
              </Select>
            </div>
            <div className="flex flex-wrap flex-col gap-2 min-w-[35%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                Ciudad
              </Typography>
              <Input
                type="text"
                placeholder="Posadas"
                className="!border !border-gray-300 shadow-lg shadow-gray-900/5"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <div className="flex flex-wrap flex-col gap-2 min-w-[48%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                ¿En qué barrio se encuentra?
              </Typography>
              <Input
                type="text"
                placeholder="El carpincho feliz"
                className="!border !border-gray-300 shadow-lg shadow-gray-900/5"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <div className="flex flex-wrap flex-col gap-2 min-w-[48%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                Calle del inmueble
              </Typography>
              <Input
                type="text"
                placeholder="Av. Siempreviva"
                className="!border !border-gray-300 shadow-lg shadow-gray-900/5"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <div className="flex flex-wrap flex-col gap-2 min-w-[30%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                Número
              </Typography>
              <Input
                type="tel"
                className="!border !border-gray-300 shadow-lg shadow-gray-900/5"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <div className="flex flex-wrap flex-col gap-2 min-w-[30%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                Piso/Departamento (opcional)
              </Typography>
              <Input
                type="text"
                className="!border !border-gray-300 shadow-lg shadow-gray-900/5"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
              />
            </div>
            <div className="flex flex-wrap flex-col gap-2 min-w-[30%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                Código Postal
              </Typography>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-[100%] font-mono tracking-[0.5em] text-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm !border !border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-900 shadow-sm focus:shadow"
                maxLength={8}
                placeholder="________"
              />
            </div>
            <div className="flex flex-wrap flex-col gap-2 min-w-[40%]">
              <Typography className="text-md text-nowrap font-bold text-dark">
                Teléfono de contacto
              </Typography>
              <div className="flex mb-5">
                <select 
                  className="block w-3/12 h-10 px-4 py-2 mr-3 text-sm text-gray-700 bg-white !border !border-gray-300 shadow-lg shadow-gray-900/5 rounded-md appearance-none">
                  <option value="" disabled selected hidden>Cod.</option>
                  <option>+54</option>
                  <option>+55</option>
                  <option>+56</option>
                </select>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="font-mono tracking-[0.5em] text-center bg-transparent placeholder:text-slate-400 text-slate-700 text-sm rounded-md !border !border-gray-300 shadow-lg shadow-gray-900/5"
                  maxLength={13}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>,
    <>
      <div className="mb-1 flex flex-col gap-6 max-w-screen-lg m-auto">
        <Typography className="text-xl font-bold text-darker mb-10 pb-3 border-2 border-transparent  border-b-darker">
          Ahora algo <span className="text-akzm_red">muy importante</span>: las <span className="text-akzm_orange">características</span>.
        </Typography>
        <div className="flex gap-4 flex-wrap max-w-screen-lg justify-between">
          <div className="flex flex-wrap flex-col gap-2 min-w-[25%]">
            <Typography className="text-md text-nowrap font-bold text-dark">
              ¿Cuántos ambientes?
            </Typography>
            <Input
              type="number"
              placeholder="1"
              className="!border !border-gray-300 shadow-lg shadow-gray-900/5"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <div className="flex flex-wrap flex-col gap-2 min-w-[35%]">
            <Typography className="text-md text-nowrap font-bold text-dark">
              ¿Permite mascotas?
            </Typography>
            <Select defaultValue={"Sí"} className="shadow-lg shadow-gray-900/5">
              <Option>Sí</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="flex flex-wrap flex-col gap-2 min-w-[35%]">
            <Typography className="text-md text-nowrap font-bold text-dark">
              ¿Cuántos baños?
            </Typography>
            <Input
              type="number"
              placeholder="1"
              className="!border !border-gray-300 shadow-lg shadow-gray-900/5"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <div className="flex flex-wrap flex-col gap-2 min-w-[32%]">
            <Typography className="text-md text-nowrap font-bold text-dark">
              ¿Cuántos dormitorios?
            </Typography>
            <Input
              type="number"
              placeholder="1"
              className="!border !border-gray-300 shadow-lg shadow-gray-900/5"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <div className="flex flex-wrap flex-col gap-2 min-w-[32%]">
            <Typography className="text-md text-nowrap font-bold text-dark">
              ¿Dueño directo o inmobiliaria?
            </Typography>
            <Select defaultValue={"Dueño directo"} className="shadow-lg shadow-gray-900/5">
              <Option>Dueño directo</Option>
              <Option>Inmobiliaria</Option>
            </Select>
          </div>
          <div className="flex flex-wrap flex-col gap-2 min-w-[32%]">
            <Typography className="text-md text-nowrap font-bold text-dark">
              ¿Está amoblado?
            </Typography>
            <Select defaultValue={"Sí"} className="shadow-lg shadow-gray-900/5">
              <Option>Sí</Option>
              <Option>No</Option>
            </Select>
          </div>
          <div className="flex flex-wrap flex-col gap-2 min-w-[35%] my-3">
            <Typography className="text-md text-nowrap font-bold text-dark">
              Seleccioná las características que incluye
            </Typography>
            <div className="flex flex-wrap gap-3 border-2 border-primary rounded-md p-5">
              <Chip
                value="Garage"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="Aire acondicionado"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="WiFi"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="Parrilla"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="Sereno"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="Cámaras de seguridad"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="Patio"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="Pileta"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="Dueño directo"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
              <Chip
                value="Vista costera"
                variant="ghost"
                color="teal"
                icon={
                  <Checkbox
                    ripple={false}
                    containerProps={{ className: "p-0" }}
                    className="-ml-px border-2 border-akzm_orange before:hidden checked:border-akzm_orange checked:bg-akzm_orange"
                  />
                }
              />
            </div>
          </div>
        </div>
        
      </div>
    </>
  ]

  return (
    <div className="bg-gradient-to-tr from-primary to-primary_2 h-auto py-4">
      <FormsStepper steps={3} childrenArray={stepperElements}/>
    </div>
  );
}

export default NewPublication
