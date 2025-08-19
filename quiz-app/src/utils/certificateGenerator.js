export const generateCertificateImage = (playerName, subject, score, total, grade) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = 800;
  canvas.height = 600;
  // Create certificate background
  ctx.fillStyle = '#f8f8ff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw border
  ctx.strokeStyle = '#4b0082';
  ctx.lineWidth = 8;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Certificate Title
  ctx.font = 'bold 40px serif';
  ctx.fillStyle = '#4b0082';
  ctx.textAlign = 'center';
  ctx.fillText('Certificate of Achievement', canvas.width / 2, 100);

  // Subtitle
  ctx.font = 'italic 24px serif';
  ctx.fillStyle = '#333';
  ctx.fillText('Presented to', canvas.width / 2, 170);

  // Player Name
  ctx.font = 'bold 32px serif';
  ctx.fillStyle = '#222';
  ctx.fillText(playerName, canvas.width / 2, 220);

  // Subject and Score
  ctx.font = '20px serif';
  ctx.fillStyle = '#333';
  ctx.fillText(`For outstanding performance in ${subject}`, canvas.width / 2, 270);
  ctx.fillText(`Score: ${score} / ${total} (${grade})`, canvas.width / 2, 310);

  // Date
  const dateStr = new Date().toLocaleDateString();
  ctx.font = '18px serif';
  ctx.fillStyle = '#555';
  ctx.textAlign = 'right';
  ctx.fillText(`Date: ${dateStr}`, canvas.width - 60, canvas.height - 60);

  // Signature line
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 100, canvas.height - 100);
  ctx.lineTo(canvas.width / 2 + 100, canvas.height - 100);
  ctx.stroke();

  ctx.font = '16px serif';
  ctx.fillStyle = '#333';
  ctx.textAlign = 'center';
  ctx.fillText('Signature', canvas.width / 2, canvas.height - 80);
  
  return canvas.toDataURL();
};