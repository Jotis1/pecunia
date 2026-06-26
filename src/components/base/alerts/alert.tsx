import { AlertCircle, X } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export function Alert() {
	return (
		<aside className="absolute lg:top-8 top-4 lg:right-8 right-4 max-w-xs w-full p-4 flex gap-4 bg-primary_alt rounded-xl border border-primary drop-shadow-xs  ">
			{/* Icon */}
			<FeaturedIcon
				className="mt-1.5"
				color="error"
				icon={AlertCircle}
				theme="outline"
				size="md"
			/>

			{/* Content */}
			<div className="w-full flex flex-col">
				<div className="w-full flex justify-between items-center">
					<p className="text-sm font-semibold truncate text-secondary">
						Ha ocurrido un error
					</p>
					<Button
						size="xs"
						color="tertiary"
						iconLeading={<X data-icon />}
					/>
				</div>
				<p className="text-sm">
					No hemos podido entrar. Revisa el correo y la contraseña.
				</p>
			</div>
		</aside>
	);
}
