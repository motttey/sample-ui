import React from 'react';
import styles from './LabIntroduction.module.css';

interface ProfessorProfile {
  name: string;
  title: string;
  bio: string;
  avatarSrcUrl?: string;
}

interface Props {
  labName: string;
  professor: ProfessorProfile;
  department: string;
  researchThemes: Array<string>;
  message: string;
}

const LabIntroduction = ({
  labName,
  professor,
  department,
  researchThemes,
  message,
}: Props) => {
  const heroImageUrl = '/lab_members.jpg';
  const professorAvatarUrl = professor.avatarSrcUrl ?? 'https://placehold.jp/1f3a5f/ffffff/160x160.png?text=Professor';

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Ikanaihouga Mashi University</p>
        <h1 className={styles.labName}>{labName}</h1>
        <div className={styles.titleRule} />
      </header>

      <section className={styles.heroSection} aria-label="研究室メンバー集合写真">
        <img src={heroImageUrl} alt={`${labName} メンバー集合写真`} className={styles.heroImage} />
      </section>

      <section className={styles.infoGrid}>
        <div className={styles.infoPanel}>
          <p className={styles.sectionLabel}>Department</p>
          <h2 className={styles.department}>{department}</h2>

          <div className={styles.themeBlock}>
            <p className={styles.sectionLabel}>Research Themes</p>
            <div className={styles.themeTags}>
              {researchThemes.map((theme) => (
                <span key={theme} className={styles.themeTag}>
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className={styles.professorCard} aria-label="教授紹介">
          <img src={professorAvatarUrl} alt={`${professor.name} ${professor.title}`} className={styles.professorAvatar} />
          <div className={styles.professorBody}>
            <h2 className={styles.professorName}>{professor.name}</h2>
            <p className={styles.professorTitle}>{professor.title}</p>
            <p className={styles.professorBio}>{professor.bio}</p>
          </div>
        </aside>
      </section>

      <section className={styles.messageSection}>
        <p className={styles.sectionLabel}>研究室からのメッセージ</p>
        <blockquote className={styles.message}>{message}</blockquote>
      </section>
    </article>
  );
};

export default LabIntroduction;
