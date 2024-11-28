"use client";

import Form  from "@/components/Form";
import { useSearchParams } from "next/navigation";

export default function Registeration () {

    const searchParams = useSearchParams();
    const role = searchParams.get('role') || "member";


    return (
        <div>
            <Form roleType={role} action={"register"}/>
        </div>
    );
}