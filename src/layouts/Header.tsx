const Header = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<header className="fixed inset-x-0 top-0 z-[999] flex h-16 items-center justify-center bg-white">
			<div className="w-full">{children}</div>
		</header>
	);
};

export default Header;
