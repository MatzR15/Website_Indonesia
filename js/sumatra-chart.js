const ctx = document.getElementById("bevolkingChart").getContext("2d");

const bevolkingChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Javanen",
      "Bataks",
      "Minangkabau",
      "Maleiers",
      "Acehnezen",
      "Lampungers",
      "Overig",
    ],
    datasets: [
      {
        label: "% van bevolking",
        data: [30, 20, 14, 12, 7, 5, 12],
        backgroundColor: [
          "rgba(60, 120, 90, 0.75)",
          "rgba(90, 160, 110, 0.75)",
          "rgba(130, 190, 130, 0.75)",
          "rgba(170, 210, 150, 0.75)",
          "rgba(210, 170, 90, 0.75)",
          "rgba(200, 130, 70, 0.75)",
          "rgba(160, 160, 160, 0.75)",
        ],
        borderColor: [
          "rgba(60, 120, 90, 1)",
          "rgba(90, 160, 110, 1)",
          "rgba(130, 190, 130, 1)",
          "rgba(170, 210, 150, 1)",
          "rgba(210, 170, 90, 1)",
          "rgba(200, 130, 70, 1)",
          "rgba(160, 160, 160, 1)",
        ],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.parsed.y + "%";
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 40,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          font: {
            family: "Helvetica, sans-serif",
            size: 13,
          },
          color: "#444",
        },
        grid: {
          color: "rgba(0,0,0,0.06)",
        },
      },
      x: {
        ticks: {
          font: {
            family: "Helvetica, sans-serif",
            size: 13,
          },
          color: "#444",
        },
        grid: {
          display: false,
        },
      },
    },
  },
});