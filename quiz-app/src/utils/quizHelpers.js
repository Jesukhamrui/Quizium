export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const determineGrade = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage < 30) {
    return { grade: "Needs Improvement", message: "Keep studying!", color: "#ff6b6b" };
  } else if (percentage < 50) {
    return { grade: "Fair", message: "You're making progress!", color: "#ffa726" };
  } else if (percentage < 70) {
    return { grade: "Good", message: "Well done!", color: "#66bb6a" };
  } else if (percentage < 90) {
    return { grade: "Excellent", message: "Great work!", color: "#42a5f5" };
  } else {
    return { grade: "Outstanding", message: "Perfect performance!", color: "#ab47bc" };
  }
};