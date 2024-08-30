


export async function generateStaticParams() {
    const products = ["carne", "huevo", "cereales"]

    return products.map((product) => ({
        name: product
    }))
}

export default function ProductPage({ params }: { params: { name: string } }) {

    return (
        <div>
            <h1>Producto #{params.name}</h1>
        </div>
    );
}