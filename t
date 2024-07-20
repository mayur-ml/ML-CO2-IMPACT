<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Carbon Footprint Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>AI Carbon Footprint Calculator</h1>
    </header>
    <main>
        <section class="calculator">
            <h2>Calculate Your Carbon Footprint</h2>
            <form id="footprintForm">
                <label for="gpu">Select GPU:</label>
                <select id="gpu" name="gpu">
                    <option value="0.5">NVIDIA Tesla V100</option>
                    <option value="0.6">NVIDIA Tesla P100</option>
                    <option value="0.8">NVIDIA RTX 2080 Ti</option>
                    <option value="0.9">NVIDIA A100</option>
                    <option value="0.7">NVIDIA RTX 3090</option>
                    <option value="0.65">NVIDIA Tesla K80</option>
                    <option value="0.75">NVIDIA RTX 3080</option>
                    <option value="0.55">NVIDIA GTX 1080 Ti</option>
                    <option value="0.85">NVIDIA Quadro RTX 8000</option>
                    <option value="0.77">NVIDIA RTX 3070</option>
                    <option value="0.68">NVIDIA Tesla T4</option>
                    <option value="0.72">NVIDIA RTX 3060</option>
                    <option value="0.62">NVIDIA GTX 1070</option>
                    <option value="0.52">NVIDIA GTX 1060</option>
                    <option value="0.87">NVIDIA Quadro GV100</option>
                    <option value="0.73">NVIDIA RTX 3050</option>
                    <option value="0.61">NVIDIA GTX 1050 Ti</option>
                    <option value="0.78">NVIDIA Quadro RTX 5000</option>
                </select>

                <label for="hours">Training Hours:</label>
                <input type="number" id="hours" name="hours" min="0" required>

                <label for="inferenceHours">Inference Hours:</label>
                <input type="number" id="inferenceHours" name="inferenceHours" min="0" required>

                <label for="cloudProvider">Select Cloud Provider:</label>
                <select id="cloudProvider" name="cloudProvider">
                    <option value="AWS">AWS</option>
                    <option value="GCP">GCP</option>
                    <option value="Azure">Azure</option>
                </select>

                <button type="submit">Calculate</button>
            </form>
            <div id="result"></div>
        </section>
        <section class="analysis">
            <h2>Environmental Impact</h2>
            <p id="analogy"></p>
            <p id="energy"></p>
            <p id="trees"></p>
            <p id="waste"></p>
            <button id="downloadButton">Download Summary</button>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 AI Carbon Footprint Calculator</p>
    </footer>
    <canvas id="summaryCanvas" style="display:none;"></canvas>
    <script src="script.js"></script>
</body>
</html>
