import { ArrowLeft, Key01 } from "@untitledui/icons";
import { ResetForm } from "@/components/application/forms/reset-form";
import { Alert } from "@/components/base/alerts/alert";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Container } from "@/components/shared/containers/container";

export default function Reset() {
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
							Establece una nueva contraseña
						</h1>
						<p>Debe ser diferente de tu contraseña anterior</p>
					</div>
				</header>
			</div>

			{/* Form */}
			<ResetForm />

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
