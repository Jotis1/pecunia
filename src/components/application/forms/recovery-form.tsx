"use client";

import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";

export function RecoveryForm() {
	return (
		<form className="max-w-sm w-full flex flex-col gap-6">
			<Input
				type="email"
				label="Correo"
				placeholder="tu@correo.com"
				isRequired
			/>
			<Button type="submit">Restablecer contraseña</Button>
		</form>
	);
}
