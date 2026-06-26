import { WelcomeForm } from "@/components/application/forms/welcome-form";
import { Alert } from "@/components/base/alerts/alert";
import { Button } from "@/components/base/buttons/button";
import { Container } from "@/components/shared/containers/container";
import { Logo } from "@/components/shared/icons/logo";

export default function Welcome() {
	return (
		<Container>
			{/* Header */}
			<div className="max-w-sm w-full flex flex-col gap-6">
				<header className="flex flex-col items-center gap-6">
					<Logo />
					<div className="flex flex-col gap-3 text-center">
						<h1 className="text-display-xs font-semibold font-display text-primary">
							Crea tu cuenta
						</h1>
						<p>
							Necesitas que el administrador haya dado de alta tu
							correo.
						</p>
					</div>
				</header>
			</div>

			{/* Form */}
			<WelcomeForm />

			{/* Footer */}
			<div className="inline-flex gap-1">
				<p className="text-sm">¿Ya tienes cuenta?</p>
				<Button href="/auth/login" color="link-color">
					Entrar
				</Button>
			</div>

			{/* Alert */}
			<Alert />
		</Container>
	);
}
