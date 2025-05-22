import React from "react";
import { Link } from "react-router-dom";
import leadershipData from "../data/leaderApi"; // Correct path to the leadership data
import styles from "../styles/Leadership.module.css";

const Leadership = () => {
  if (!Array.isArray(leadershipData)) {
    console.error("leadershipData is not an array:", leadershipData);
    return <div>Error loading data</div>;
  }

  // Categorize leaders by their level
  const topLeader = leadershipData.find((d) => d.level === 0);
  const secondLevel = leadershipData.filter((d) => d.level === 1);
  const thirdLevel = leadershipData.filter((d) => d.level === 3);
  const fourthLevel = leadershipData.filter((d) => d.level === 4);

  return (
    <div className={styles.wrapper}>
      {/* Level 0 */}
      <section className={styles.section}>
        <h3>
          President of the Provincial Party Committee <br />
          Chủ tịch Tỉnh ủy
        </h3>
        {topLeader && (
          <div className={styles.centered}>
            <div className={styles.person}>
              <Link
                to={`/leader/${topLeader.name}`}
                className="text-decoration-none text-dark fw-bold"
              >
                <img src={topLeader.image} alt={topLeader.name} />
              </Link>
              <h4>
                <Link
                  to={`/leader/${topLeader.name}`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  {topLeader.name}
                </Link>
              </h4>
              <p style={{ whiteSpace: "pre-line" }}>{topLeader.position}</p>
            </div>
          </div>
        )}
      </section>

      {/* Level 1 */}
      <section className={styles.section}>
        <h3>
          President and Vice Presidents of the Provincial People's Committee
          <br />
          Chủ tịch và Phó Chủ tịch UBND Tỉnh <br />
          (Nhiệm kỳ 2021–2026)
        </h3>
        <div className={styles.grid}>
          {secondLevel.map((person) => (
            <div key={person.name} className={styles.person}>
              <Link
                to={`/leader/${person.name}`}
                className="text-decoration-none text-dark fw-bold"
              >
                <img src={person.image} alt={person.name} />
              </Link>
              <h4>
                <Link
                  to={`/leader/${person.name}`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  {person.name}
                </Link>
              </h4>
              <p style={{ whiteSpace: "pre-line" }}>{person.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Level 3 */}
      <section className={styles.section}>
        <h3>
          Provincial People's Committee Members - Local Departments
          <br />
          Các Ban, Bộ phận cấp xã, phường <br />
          (Nhiệm kỳ 2021–2026)
        </h3>
        <div className={styles.grid}>
          {thirdLevel.map((person) => (
            <div key={person.name} className={styles.person}>
              <Link
                to={`/leader/${person.name}`}
                className="text-decoration-none text-dark fw-bold"
              >
                <img src={person.image} alt={person.name} />
              </Link>
              <h4>
                <Link
                  to={`/leader/${person.name}`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  {person.name}
                </Link>
              </h4>
              <p style={{ whiteSpace: "pre-line" }}>{person.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Level 4 */}
      <section className={styles.section}>
        <h3>
          Village or Hamlet Leaders <br />
          Các Trưởng xóm, tổ trưởng dân phố <br />
          (Nhiệm kỳ 2021–2026)
        </h3>
        <div className={styles.grid}>
          {fourthLevel.map((person) => (
            <div key={person.name} className={styles.person}>
              <Link
                to={`/leader/${person.name}`}
                className="text-decoration-none text-dark fw-bold"
              >
                <img src={person.image} alt={person.name} />
              </Link>
              <h4>
                <Link
                  to={`/leader/${person.name}`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  {person.name}
                </Link>
              </h4>
              <p style={{ whiteSpace: "pre-line" }}>{person.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leadership;
