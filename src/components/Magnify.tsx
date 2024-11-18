"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Magnify = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild className="cursor-zoom-in">
				{children}
			</DialogTrigger>
			<DialogContent
				className="h-auto w-screen max-w-none cursor-zoom-out overflow-scroll border-none bg-transparent p-0 outline-none ring-0 lg:p-16 [&>button]:hidden"
				onClick={() => setOpen(!open)}
			>
				{children}
			</DialogContent>
		</Dialog>
	);
};

export default Magnify;
