
export default function Form() {

    return (
        <form action="" className="max-w-[400px] w-full ml-20 mt-20 border p-4 border-black grid gap-4">

            <h2>FORMULARIO</h2>

            <div className="grid gap-2">
                <label htmlFor="name">Nombre</label>
                <input id="name" type="text" className="py-2" />
            </div>


            <div className="grid gap-2">
                <label htmlFor="lastName">Apellido</label>
                <input id="lastName" type="text" className="py-2" />
            </div>

            <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="py-2" />
            </div>

            <button className="mt-4 border border-black px-4 py-2">Enviar</button>

        </form>
    )
}
