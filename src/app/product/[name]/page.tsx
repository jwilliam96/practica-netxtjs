import { notFound, redirect } from "next/navigation";

export default function ProductPage({ params }: { params: { name: string } }) {

    const products = ["carne", "huevo", "cereales"]

    if (!products.includes(params.name)) {

        redirect(notFound())

    }

    return (
        <div>
            <h1>Producto #{params.name}</h1>
        </div>
    );
}