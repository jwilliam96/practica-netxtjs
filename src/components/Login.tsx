
export default function Login() {
    return (
        <form action="" className="bg-white max-w-[400px] w-full ml-20 mt-20 border p-4 border-black grid gap-4">

            <h2>FORMULARIO LOGIN</h2>

            <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="py-2" />
            </div>

            <div className="grid gap-2">
                <label htmlFor="password">password</label>
                <input id="password" type="password" className="py-2" />
            </div>

            <button className="mt-4 border border-black px-4 py-2">Enviar</button>

        </form>
    )
}
