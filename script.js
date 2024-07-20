document.getElementById('footprintForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Calculate the carbon footprint here and update the result div
    const gpuFactor = parseFloat(document.getElementById('gpu').value);
    const trainingHours = parseFloat(document.getElementById('hours').value);
    const inferenceHours = parseFloat(document.getElementById('inferenceHours').value);

    const co2Emission = (trainingHours + inferenceHours) * gpuFactor;
    const energyConsumption = co2Emission * 0.5; // Example factor
    const treesEquivalent = co2Emission * 0.01; // Example factor
    const trashEquivalent = co2Emission * 0.02; // Example factor

    document.getElementById('result').innerHTML = `
        <h3>Results</h3>
        <p>CO2 Emission: ${co2Emission.toFixed(2)} kg</p>
        <p>Energy Consumption: ${energyConsumption.toFixed(2)} kWh</p>
        <p>Trees Equivalent: ${treesEquivalent.toFixed(2)}</p>
        <p>Trash Equivalent: ${trashEquivalent.toFixed(2)} kg</p>
    `;

    // Update the canvas for visual representation
    const ctx = document.getElementById('summaryCanvas').getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(10, 10, 150, 150);

    ctx.fillStyle = '#ffffff';
    ctx.font = '16px Arial';
    ctx.fillText('CO2:', 20, 50);
    ctx.fillText(`${co2Emission.toFixed(2)} kg`, 20, 70);
    ctx.fillText('Energy:', 20, 90);
    ctx.fillText(`${energyConsumption.toFixed(2)} kWh`, 20, 110);

    // Increment and update the report generated count
    let reportCount = parseInt(localStorage.getItem('reportCount')) || 0;
    reportCount += 1;
    localStorage.setItem('reportCount', reportCount);
    document.getElementById('reportCount').textContent = reportCount;
});

// Set the initial report count from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const reportCount = parseInt(localStorage.getItem('reportCount')) || 0;
    document.getElementById('reportCount').textContent = reportCount;
});
