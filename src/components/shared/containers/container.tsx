interface ContainerProps {
	children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
	return (
		<div className="relative mx-auto max-w-7xl w-full lg:pt-24 pt-12 pb-12 lg:px-8 px-4 flex flex-col gap-8 items-center">
			{children}
		</div>
	);
}
