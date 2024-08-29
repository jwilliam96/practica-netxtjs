import Card from "@/components/Card";
import SkeletonCard from "@/ui/SkeletonCard";
import { Suspense } from "react";

export default async function DashboardPage() {

    return (
        <article>
            <h1>Hello dashboard</h1>

            <Suspense fallback={<SkeletonCard />}>
                <Card />
            </Suspense>

        </article>
    );
}