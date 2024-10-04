"use server"

export const createUser = (formData: FormData) => {

    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
    }
    const { email, password } = rawFormData

    const reset = { email: "", password: "" }

    return reset

}