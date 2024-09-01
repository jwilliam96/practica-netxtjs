
export default function Layout({
    children,
    noticias,
    publict
}: {
    children: React.ReactNode
    noticias: React.ReactNode
    publict: React.ReactNode
}) {
    return (
        <div>
            {children}
            <div className="grid grid-cols-2 gap-4 px-10">
                {noticias}
                {publict}
            </div>
        </div>
    );
}