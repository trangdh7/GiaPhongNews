import React from "react";
import { useParams } from "react-router-dom";
import leadershipData from "../data/leaderApi";
import styles from "../styles/LeaderDetail.module.css";

const LeaderDetail = () => {
  const { name } = useParams();
  const leader = leadershipData.find((d) => d.name === name);

  if (!leader) {
    return <div>Leader not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <h1 className={styles.name}>Đồng chí {leader.name}</h1>
        <div className={styles.profile}>
          <img src={leader.image} alt={leader.name} />
          <ul>
            <li>
              <strong>Ngày sinh:</strong> {leader.birthDate}
            </li>
            <li>
              <strong>Quê quán:</strong> {leader.hometown}
            </li>
            <li>
              <strong>Dân tộc:</strong> {leader.ethnicity}
            </li>
            <li>
              <strong>Chuyên môn:</strong> {leader.profession}
            </li>
            <li>
              <strong>Lý luận chính trị:</strong> {leader.politicalTheory}
            </li>
            <li>
              <strong>Chức vụ:</strong>
              <ul className={styles.subList}>
                {leader.positions.map((pos, idx) => (
                  <li key={idx}>{pos}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.timelineSection}>
        <h2>TÓM TẮT QUÁ TRÌNH CÔNG TÁC</h2>
        <ul>
          {leader.timeline.map((entry, idx) => (
            <li key={idx}>
              <strong>{entry.year}:</strong> {entry.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderDetail;
