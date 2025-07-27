import styles from './ProjectsStyles.module.css';
import weather from '../../assets/Weather_App.png';
import expensify from '../../assets/Expensify.png';
import bone from '../../assets/Bone_frac.png';
import Train from '../../assets/train.png';
import Ttt from '../../assets/tic_tac_toe.png';
import music from '../../assets/music.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/AK-2022-dev/WhetherApp"
          h3="Weathora"
          p="Weather Forcasting  App"
        />
        <ProjectCard
          src={expensify}
          link="https://github.com/AK-2022-dev/Expensify_App"
          h3="Expensify"
          p="Expense Manager App"
        />
        <ProjectCard
          src={bone}
          link="https://github.com/AK-2022-dev/bone_fracture"
          h3="BoneSecure"
          p="Bone Fracture Detection App"
        />
        <ProjectCard
          src={music}
          link="https://github.com/AK-2022-dev/music_playerV-0.12"
          h3="Harmoni"
          p="Music Player App"
        />
        <ProjectCard
          src={Train}
          link="https://github.com/AK-2022-dev/Train_ticket-booking-system"
          h3="YatraCheck"
          p="Train Booking  System "
        />
        <ProjectCard
          src={Ttt}
          link="https://github.com/AK-2022-dev/Tic_Tac_Toe_Game"
          h3="Tic_Tac_Toe"
          p="TicTacToe Game "
        />
      </div>
    </section>
  );
}

export default Projects;
