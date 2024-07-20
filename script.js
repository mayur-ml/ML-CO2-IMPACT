document.getElementById('footprintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve values from the form
    const gpuFactor = parseFloat(document.getElementById('gpu').value);
    const trainingHours = parseFloat(document.getElementById('hours').value);
    const inferenceHours = parseFloat(document.getElementById('inferenceHours').value);

    // Calculate carbon footprint and equivalents
    const co2Emission = (trainingHours + inferenceHours) * gpuFactor;
    const energyConsumption = co2Emission * 0.5; // Example factor: 0.5 kWh per kg CO2
    const treesEquivalent = co2Emission * 0.01; // Example factor: 1 tree offsets 100 kg CO2
    const trashEquivalent = co2Emission * 0.02; // Example factor: 1 kg CO2 equals 2 kg of trash

    // Convert CO2 emission to driving distance (example factor: 0.2 kg CO2 per km)
    const kilometersEquivalent = co2Emission / 0.2; // in kilometers

    // Update the result div
    document.getElementById('result').innerHTML = `
        <h3>Results</h3>
        <p>CO2 Emission: ${co2Emission.toFixed(2)} kg</p>
        <p>Energy Consumption: ${energyConsumption.toFixed(2)} kWh</p>
    `;

    // Update summary details with calculated values
    document.getElementById('miles').textContent = kilometersEquivalent.toFixed(2);
    document.getElementById('kwh').textContent = energyConsumption.toFixed(2);
    document.getElementById('treesCount').textContent = treesEquivalent.toFixed(2);
    document.getElementById('trash').textContent = trashEquivalent.toFixed(2);

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
