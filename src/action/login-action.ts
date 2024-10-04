"use server"

export const loginUser = async (prevState: any, formData: FormData) => {

    console.log({ prevState: prevState }, { formData })

    return { message: 'Please enter a valid email' }
}