import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "flask",
    "git",
    "cplusplus",
    "css3",
    "github",
    "html5",
    "git",
    "keras",
    "javascript",
    "mediapipe",
    "react",
    "sqlite",
    "numpy",
    "open",
    "pandas",
    "python",
    "react",
    "scikit",
    "tensorflow",
  ];
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={6}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
