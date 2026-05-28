const categories = [
  {
    id: "a",
    label: "Categoria",
    letter: "A",
    title: "Moto",
    benefits: ["Mais liberdade", "Mais economia", "Mobilidade rapida"],
    image: "/assets/moto.png",
    alt: "Moto para categoria A",
    href: "https://wa.me/5511986081051?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Categoria%20A%20na%20Auto%20Escola%20Speed%20Race",
  },
  {
    id: "b",
    label: "Categoria",
    letter: "B",
    title: "Carro",
    benefits: ["Mais independencia", "Uso diario", "Facilidade no transito"],
    image: "/assets/carro.png",
    alt: "Carro para categoria B",
    badge: "Mais procurada",
    featured: true,
    href: "https://wa.me/5511986081051?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Categoria%20B%20na%20Auto%20Escola%20Speed%20Race",
  },
  {
    id: "ab",
    label: "Categoria",
    letter: "AB",
    title: "Carro + moto",
    benefits: ["CNH completa", "Mais possibilidades", "Mobilidade total"],
    image: "/assets/carro-moto.png",
    alt: "Carro e moto para categoria AB",
    href: "https://wa.me/5511986081051?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Categoria%20AB%20na%20Auto%20Escola%20Speed%20Race",
  },
  {
    id: "d",
    label: "Categoria",
    letter: "D",
    title: "Onibus e vans",
    benefits: ["Oportunidade profissional", "Transporte de passageiros", "Novas possibilidades"],
    image: "/assets/onibus.png",
    alt: "Onibus para categoria D",
    badge: "Profissional",
    dark: true,
    href: "https://wa.me/5511986081051?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Categoria%20D%20na%20Auto%20Escola%20Speed%20Race",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#F7F7F7] py-20 md:py-28" id="categorias">
      <div className="mx-auto w-[min(100%-32px,1440px)]">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.04em] text-[#E30613]">
            Categorias
          </p>
          <h2 className="text-4xl font-black leading-tight text-[#111111] md:text-6xl">
            Escolha a <span className="text-[#E30613]">categoria ideal</span> para voce
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }) {
  const dark = category.dark;

  return (
    <article
      className={[
        "group relative flex min-h-[560px] flex-col justify-between overflow-hidden rounded-[28px] p-8 shadow-[0_24px_70px_rgba(17,17,17,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_34px_90px_rgba(17,17,17,0.14)]",
        dark
          ? "border border-white/10 bg-[radial-gradient(circle_at_88%_36%,rgba(227,6,19,0.32),transparent_31%),linear-gradient(135deg,#111111,#1B1B1B)] text-white"
          : "border border-black/[0.07] bg-white text-[#111111]",
        category.featured ? "border-[#FFC400] shadow-[0_28px_80px_rgba(255,196,0,0.20)]" : "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-7 top-7 h-20 w-20 bg-[radial-gradient(circle,#E30613_1.35px,transparent_1.65px)] bg-[length:12px_12px] opacity-25" />
      <div className="pointer-events-none absolute -right-10 bottom-20 h-52 w-52 rounded-full border border-[#E30613]/15 bg-[#E30613]/5" />

      {category.badge ? (
        <span className="absolute right-5 top-5 z-20 rounded-full bg-[#FFC400] px-5 py-3 text-xs font-black uppercase text-[#111111] shadow-[0_14px_28px_rgba(17,17,17,0.16)]">
          {category.badge}
        </span>
      ) : null}

      <div className="relative z-10">
        <p className={dark ? "mb-2 text-xs font-black uppercase tracking-wide text-[#FFC400]" : "mb-2 text-xs font-black uppercase tracking-wide text-[#E30613]"}>
          {category.label}
        </p>
        <h3 className={dark ? "text-[112px] font-black leading-[0.78] tracking-[-0.04em] text-[#FFC400]" : "text-[112px] font-black leading-[0.78] tracking-[-0.04em] text-[#E30613]"}>
          {category.letter}
        </h3>
        <strong className="mt-4 block text-3xl font-black leading-none">{category.title}</strong>
        <ul className="mt-7 grid gap-3.5 text-sm font-extrabold">
          {category.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-2.5">
              <span className={dark ? "text-[#FFC400]" : "text-[#E30613]"}>{"\u2713"}</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <img
        className="pointer-events-none absolute bottom-24 right-3 z-10 max-h-[46%] w-[82%] object-contain drop-shadow-[0_24px_32px_rgba(17,17,17,0.20)] transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        src={category.image}
        alt={category.alt}
      />

      <a
        className={[
          "relative z-20 flex min-h-[58px] items-center justify-center rounded-2xl border border-dashed px-4 text-center text-xs font-black uppercase transition-all duration-300 ease-out hover:-translate-y-0.5",
          dark
            ? "border-[#FFC400]/60 bg-black/30 text-white hover:bg-[#FFC400] hover:text-[#111111]"
            : "border-[#E30613]/30 bg-white/80 text-[#E30613] hover:border-transparent hover:bg-[#E30613] hover:text-white",
        ].join(" ")}
        href={category.href}
        target="_blank"
        rel="noopener"
      >
        Quero essa categoria
      </a>
    </article>
  );
}
