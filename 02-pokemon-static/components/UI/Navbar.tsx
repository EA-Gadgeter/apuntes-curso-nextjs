import Image from "next/image";

export const Navbar = () => {
  return (
    <nav
      className="
        w-full
        flex items-center justify-between
        pr-6
        bg-gray-900
      "
    >
      <div className="flex items-center">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto App Icon"
          width={70}
          height={70}
        />

        <h1 className="flex items-center text-white text-3xl">
          P<span className="text-lg">okemon</span>
        </h1>
      </div>

      <p>Favoritos</p>
    </nav>
  );
};