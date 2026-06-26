import { ArrowLeft, Key01 } from "@untitledui/icons";
import { RecoveryForm } from "@/components/application/forms/recovery-form";
import { Alert } from "@/components/base/alerts/alert";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Container } from "@/components/shared/containers/container";

export default function Recovery() {
	return (
		<Container>
			{/* Header */}
			<div className="max-w-sm w-full flex flex-col gap-6">
				<header className="flex flex-col items-center gap-6">
					<FeaturedIcon
						color="brand"
						theme="light"
						icon={Key01}
						size="md"
					/>
					<div className="flex flex-col gap-3 text-center">
						<h1 className="text-display-xs font-semibold font-display text-primary">
							¿Olvidaste la contraseña?
						</h1>
						<p>
							No te preocupes, te enviaremos las instrucciones
							para cambiarla
						</p>
					</div>
				</header>
			</div>

			{/* Form */}
			<RecoveryForm />

			{/* Footer */}
			<Button
				href="/auth/login"
				color="link-gray"
				iconLeading={<ArrowLeft data-icon />}
			>
				Volver a inicio de sesión
			</Button>

			{/* Alert */}
			<Alert />
		</Container>
	);
}
