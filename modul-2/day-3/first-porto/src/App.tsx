import ExperienceCard from "./components/ExperienceCard";
// import ReusableText from "./components/ReusableText"
import HeaderProfile from "./components/HeaderProfile"
import SkillBadge from "./components/SkillBadge"
export default function App() {
  const skills: string[] = ["React", "Typescript", "PostgreSQL"];
  return (
    <div className="cv-container">
        {/* <div>
          <ReusableText name="Budi" age={25}></ReusableText>
          <ReusableText name="Siti" age={22}></ReusableText>
        </div> */}

        <HeaderProfile name="John Doe" role="Fullstack Developer"></HeaderProfile>

        <h3>Skills</h3>
        <div className="skill-container">
          {skills.map((skill, index) => {
            const isLast = index === skills.length -1;
            const label = isLast ? skill : `${skill}, `;

            return <SkillBadge key={index} skillName={label} />;
          })
        }

        <h3>Work Experience</h3>
        <ExperienceCard
          role="FrontEnd Engineer"
          company="Tech Innovator Inc"
          period="2024-present"
          description="lorem ipsum dorem"
        />

        <ExperienceCard
          role="Backend Engineer"
          company="Tech Innovator Inc"
          period="2022-2024"
          description="lorem ipsum dorem"
        />

        
        </div>
    </div>
  )
}
