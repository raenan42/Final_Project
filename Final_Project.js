let episodes = []

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('./Final_Project.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        episodes = await response.json();
        console.log(`Loaded ${episodes.length} items`)

        showCharts();
        drawCharts(episodes);
    } catch (error) {
    console.error('Loading failed:', error);
    }
});

function showCharts(episodes) {
    document.querySelector('.chart-box').innerHTML =
     `
                <div class="chart-box">
                    <figure class="chart-figure">
                        <canvas id="draw-chart"></canvas>
                        <figcaption>Chart of Episode Ratings Over Time.</figcaption>
                    </figure>
                </div>
            `;
}

function drawCharts(episodes) {
  if (typeof Chart === 'undefined') {
    document.querySelector('.chart-box').innerHTML =
      '<p class="error">Chart.js did not load, so the charts can\'t be drawn.</p>';
 return;
    }

new Chart(document.queryselector('#draw-chart'), {
    type: 'line',
    data: {
        labels: episodes.episodeNumber,
        datasets: [{label: 'Rating', data: episodes.episodeRating}]
    },
    options: {
        plugins: {title: {display: true, text: 'Episode Ratings over Time'} },
            scales: {
                x: {title: {display: true, text: 'Episode Number'} },
            y: {title: {display: true, text: 'Episode Ratings'}, beginAtZero: false}
        }
    }
    }) 
  };