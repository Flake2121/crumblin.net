const letters = document.querySelectorAll("#title span");
const repelDistance = 40; 
const moveAmount = 5;  

document.addEventListener("mousemove", (e) => {
  letters.forEach(letter => {
    const rect = letter.getBoundingClientRect();
    const letterX = rect.left + rect.width / 2;
    const letterY = rect.top + rect.height / 2;

    const dx = letterX - e.clientX;
    const dy = letterY - e.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < repelDistance) {
      const angle = Math.atan2(dy, dx);
      const x = Math.cos(angle) * moveAmount;
      const y = Math.sin(angle) * moveAmount;
      letter.style.transform = `translate(${x}px, ${y}px)`;
    } else {
      letter.style.transform = "translate(0, 0)";
    }
  });
});
