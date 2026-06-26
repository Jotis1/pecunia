"use client";

import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Input } from "@/components/base/input/input";

export function LoginForm() {
	return (
		<form className="max-w-sm w-full flex flex-col gap-6">
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
				isRequired
			/>
			<div className="flex items-center justify-between">
				<Checkbox label="Recuérdame por 30 días" />
				<Button href="/auth/recovery" color="link-color">
					Olvidé mi contraseña
				</Button>
			</div>
			<Button type="submit">Entrar</Button>
		</form>
	);
}
