"use client";

import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Input } from "@/components/base/input/input";

export function WelcomeForm() {
	return (
		<form className="max-w-sm w-full flex flex-col gap-6">
			<Input
				type="text"
				label="Nombre"
				placeholder="¿Cómo te llamas?"
				isRequired
			/>
			<Input
				type="email"
				label="Correo"
				placeholder="tu@correo.com"
				isRequired
			/>
			<Input
				type="password"
				label="Contraseña"
				placeholder="••••••••••••"
				hint="Mínimo 8 caracteres"
				isRequired
			/>
			<Checkbox label="Recuérdame por 30 días" />
			<Button type="submit">Entrar</Button>
		</form>
	);
}
