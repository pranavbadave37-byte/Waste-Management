function updateSensors() {
  const sensor1 = document.getElementById('sensor1');
  const sensor2 = document.getElementById('sensor2');

  if (sensor1 && sensor2) {
    const dryBin = Math.random() > 0.5 ? "Full" : "Empty";
    const wetBin = Math.random() > 0.5 ? "Full" : "Empty";
    sensor1.textContent = dryBin;
    sensor2.textContent = wetBin;
  }
}

setInterval(updateSensors, 3000);
updateSensors();
