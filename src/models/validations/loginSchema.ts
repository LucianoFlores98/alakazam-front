import {z} from 'zod'

export const loginSchema = z.object({
/*   username: z
    .string()
    .min(4, {message: "El nombre de usuario debe ser mínimo de 4 caracteres"})
    .max(150, {message: "El nombre de usuario es demasiado largo"}), */
  email: z
    .string()
    .email({
      message: "Por favor ingrese un correo válido."
    }),
  password : z
    .string()
    .min(8,{
      message: "La contraseña debe contener al menos 8 caracteres."
    })
})