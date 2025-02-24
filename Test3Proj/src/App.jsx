`use client`
import { useState } from "react";
import styles from "./App.module.css";
import AdditionalInfoComponent from "./components/additionalInfoComponent";
// 
import GoalListComponent from "./components/goalListComponent";

export default function App() {
  const addGoal = (newGoal) => {
    setGoalList([...goalMainList, newGoal]);
  };
  const [goalMainList, setGoalList] = useState([
    { title: "Learn Html", description: "Learn basic tags" },
    { title: "Learn Css", description: "Learn basic css" },
    { title: "Learn JavaScript", description: "Learn basic JS" },
  ]);
  return (
    <div className={styles.page}>
      <main className={styles .main}>
        <div>          
          <AdditionalInfoComponent addGoal={addGoal}/>
          <GoalListComponent goalList={goalMainList} />
        </div>
      </main>
      <footer className={styles.footer}>VladChe (c) 2025</footer>
    </div>
  );
}
