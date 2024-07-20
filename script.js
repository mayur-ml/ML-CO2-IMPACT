document.getElementById('footprintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const gpu = parseFloat(document.getElementById('gpu').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const inferenceHours = parseFloat(document.getElementById('inferenceHours').value);
    const cloudProvider = document.getElementById('cloudProvider').value;

    // Carbon footprint calculation (example values)
    const trainingFootprint = gpu * hours * 0.3; // kg CO2 per hour
    const inferenceFootprint = gpu * inferenceHours * 0.1; // kg CO2 per hour
    const totalFootprint = trainingFootprint + inferenceFootprint;

    // Energy consumption calculation (example values)
    const energyConsumed = totalFootprint * 0.5; // kWh (example conversion)

    // Additional analogies
    const trees = totalFootprint / 21.77; // Number of trees needed to absorb the CO2
    const waste = totalFootprint / 2.68; // Amount of waste burned in kg to emit the same CO2

    document.getElementById('result').innerText = `Total Carbon Footprint: ${totalFootprint.toFixed(2)} kg CO2`;
    document.getElementById('analogy').innerText = `This is equivalent to driving a car for ${(totalFootprint / 0.25).toFixed(2)} kilometers.`;
    document.getElementById('energy').innerText = `Energy Consumed: ${energyConsumed.toFixed(2)} kWh`;
    document.getElementById('trees').innerText = `Equivalent to planting ${trees.toFixed(2)} trees.`;
    document.getElementById('waste').innerText = `Equivalent to burning ${waste.toFixed(2)} kg of waste.`;

    generateSummaryCanvas(totalFootprint, energyConsumed, trees, waste, cloudProvider);
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const canvas = document.getElementById('summaryCanvas');
    const link = document.createElement('a');
    link.download = 'carbon-footprint-summary.png';
    link.href = canvas.toDataURL();
    link.click();
});

function generateSummaryCanvas(totalFootprint, energyConsumed, trees, waste, cloudProvider) {
    const canvas = document.getElementById('summaryCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 600;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#4CAF50';
    ctx.font = '30px Arial';
    ctx.fillText('AI Carbon Footprint Summary', 50, 50);

    ctx.fillStyle = '#000000';
    ctx.font = '20px Arial';
    ctx.fillText(`Total Carbon Footprint: ${totalFootprint.toFixed(2)} kg CO2`, 50, 100);
    ctx.fillText(`Equivalent to driving ${(totalFootprint / 0.25).toFixed(2)} km`, 50, 150);
    ctx.fillText(`Energy Consumed: ${energyConsumed.toFixed(2)} kWh`, 50, 200);
    ctx.fillText(`Equivalent to planting ${trees.toFixed(2)} trees`, 50, 250);
    ctx.fillText(`Equivalent to burning ${waste.toFixed(2)} kg of waste`, 50, 300);

    ctx.fillStyle = '#4CAF50';
    ctx.font = '24px Arial';
    ctx.fillText('I will responsibly train and infer AI models.', 50, 400);
    ctx.fillText(`Cloud Provider: ${cloudProvider}`, 50, 450);

    // Add images or icons to make it more beautiful
    const treeImg = new Image();
    treeImg.src = 'trees.png'; // Ensure you have this image
    treeImg.onload = function() {
        ctx.drawImage(treeImg, 50, 500, 50, 50);
    };

    const wasteImg = new Image();
    wasteImg.src = 'waste-.png'; // Ensure you have this image
    wasteImg.onload = function() {
        ctx.drawImage(wasteImg, 150, 500, 50, 50);
    };

    const energyImg = new Image();
    energyImg.src = 'energy.png'; // Ensure you have this image
    energyImg.onload = function() {
        ctx.drawImage(energyImg, 250, 500, 50, 50);
    };

    const carImg = new Image();
    carImg.src = 'car.png'; // Ensure you have this image
    carImg.onload = function() {
        ctx.drawImage(carImg, 350, 500, 50, 50);
    };
}
