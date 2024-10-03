import { Typography } from "@material-tailwind/react"

interface Props {
  title: string;
  className?:string;
}

const SectionHeader: React.FC<Props> = ({ title, className }) =>{
  return (
    <div className={className}>
      <Typography className="  text-darker mx-auto mt-6 w-full text-lg lg:max-w-3xl lg:text-xl">{title}</Typography>
      <hr className="border-t-2 border-gray-300/80 mb-4 " />
      </div>
  )
}

export default SectionHeader