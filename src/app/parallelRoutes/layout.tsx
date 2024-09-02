
export default function Layout({
    children,
    noticias,
    publications
}: {
    children: React.ReactNode
    noticias: React.ReactNode
    publications: React.ReactNode
}) {
    return (
        <div>
            {children}
            <div className="grid grid-cols-2 gap-4 px-10">
                {noticias}
                {publications}
            </div>
        </div>
    );
}