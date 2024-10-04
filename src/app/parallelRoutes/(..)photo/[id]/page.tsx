import { Modal } from "@/components/Modal";
import foto from "/public/img1.avif"
import Image from "next/image";

export default function Photo() {
    return (
        <Modal>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <Image src={foto} className="w-[48rem] max-w-none rounded-xl cursor-pointer bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" alt="" />
            </div>
        </Modal>
    )
}