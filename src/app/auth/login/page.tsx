import { LoginForm } from "@/components/application/forms/login-form";
import { Alert } from "@/components/base/alerts/alert";
import { Button } from "@/components/base/buttons/button";
import { Container } from "@/components/shared/containers/container";
import { Logo } from "@/components/shared/icons/logo";

export default function Login() {
	return (
		<Container>
			{/* Header */}
			<div className="max-w-sm w-full flex flex-col gap-6">
				<header className="flex flex-col items-center gap-6">
					<Logo />
					<div className="flex flex-col gap-3 text-center">
						<h1 className="text-display-xs font-semibold font-display text-primary">
							Entra en Pecunia
						</h1>
						<p>
							Lleva las cuentas de casa sin pelearte con un Excel.
						</p>
					</div>
				</header>
			</div>

			{/* Form */}
			<LoginForm />

			{/* Footer */}
			<div className="inline-flex gap-1">
				<p className="text-sm">¿Aún no tienes cuenta?</p>
				<Button href="/auth/welcome" color="link-color">
					Crear una
				</Button>
			</div>

			{/* Alert */}
			<Alert />
		</Container>
	);
}
