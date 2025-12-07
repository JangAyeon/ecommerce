const SECTIONS = [
  "section1",
  "section2",
  "section3",
  "section4",
  "section5",
  "section6",
  "section7",
  "section8",
  "section9",
];

const Header = ({ activeSectionIndex }: { activeSectionIndex: number }) => {
  console.log("header activeIndex", activeSectionIndex);
  //   const activeIndex = 0; // TODO: 스크롤 기반으로 나중에 교체

  return (
    <nav
      id="parallax__nav"
      className="
        relative
        backdrop-blur-[10px] bg-white
        px-4 py-6
        shadow-[0_8px_32px_rgba(0,0,0,0.1)]
   transition-transform duration-200
        hover:bg-white/95
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]

        after:content-['']
        after:absolute after:-bottom-[30px] after:left-0 after:right-0
        after:h-[50px]
        after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.5)_40%,rgba(255,255,255,0)_100%)]
        after:backdrop-blur-[8px]
        after:pointer-events-none after:-z-10

        md:px-3 md:py-4
      "
    >
      <ul className="flex flex-row gap-10 m-0 p-0  md:gap-10">
        {SECTIONS.map((label, idx) => {
          const isActive = idx === activeSectionIndex;
          // console.log("header isActive", isActive, idx, activeIndex);

          return (
            <li key={label} className="list-none">
              <a
                href={`#${label}`}
                className={`
                  nav-dot
                  ${isActive ? "nav-dot--active" : ""}
                `}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
