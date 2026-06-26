"use client";

import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";

export function ResetForm() {
	return (
		<form className="max-w-sm w-full flex flex-col gap-6">
			<Input
				type="password"
				label="Contraseña"
				placeholder="••••••••••••"
				isRequired
			/>
			<Input
				type="password"
				label="Confirmar contraseña"
				placeholder="••••••••••••"
				isRequired
			/>
			<Button type="submit">Restablecer contraseña</Button>
		</form>
	);
}
