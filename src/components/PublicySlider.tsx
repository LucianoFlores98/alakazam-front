import { IconButton } from '@material-tailwind/react'
import Carousel from '@material-tailwind/react/components/Carousel'

export const PublicySlider = () => {
  return (
    <Carousel
        className="rounded-xl h-16 w-full mt-4"
        loop
        navigation={() => (
            <div>
                {/*se deja vacio porque sino tiene estilo predeterminado y no coincide con el modelo*/}
            </div>
        )}
        prevArrow={({ handlePrev }) => (
            
                <IconButton
                    variant="filled"
                    color="red"
                    size="sm"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-0 -translate-y-2/4 w-5 h-5 justify-center rounded-full"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-6 w-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                    </svg>
                </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="filled"
                        color="red"
                        size="sm"
                        onClick={handleNext}
                        className="!absolute top-2/4 -translate-y-2/4 w-5 h-5 right-0 rounded-full"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="h-6 w-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </IconButton>
            )}
    >
        <div className='flex gap-2 mr-1 ml-1'>  {/* al hacer click en el boton de next o prev, el margen se pierde momentaneamente */}   
            <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-16 w-1/3 object-cover rounded-xl"
            />
            <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-16 w-1/3 object-cover rounded-xl"
            />
            <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-16 w-1/3 object-cover rounded-xl"
            />  
        </div>
        <div className='flex gap-2 mr-1 ml-1'>    
            <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-16 w-1/3 object-cover rounded-xl"
            />
            <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-16 w-1/3 object-cover rounded-xl"
            />
            <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-16 w-1/3 object-cover rounded-xl"
            />
        </div>
        <div className='flex gap-2 mr-1 ml-1'>     
            <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-16 w-1/3 object-cover rounded-xl"
            />
            <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-16 w-1/3 object-cover rounded-xl"
            />
            <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-16 w-1/3 object-cover rounded-xl"
            />
        </div>

    </Carousel>
  )
}
