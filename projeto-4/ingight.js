document.addEventListener("DOMContentLoaded", () => {
    const createChart = (id, type, labels, data) => {
        new Chart(document.getElementById(id), {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: id,
                    data: data,
                    backgroundColor: [
                        '#00e0e4', '#38ff7d', '#ffa500', '#ff5c5c', '#888'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: { labels: { color: '#ccc' } }
                },
                scales: {
                    x: { ticks: { color: '#ccc' } },
                    y: { ticks: { color: '#ccc' } }
                }
            }
        });
    };

    createChart("graficoStatus", "bar", ["Aprovado", "Reprovado", "Cancelado", "Cadastro", "Mesa"], [41, 23, 19, 9, 8]);
    createChart("graficoProduto", "bar", ["Cartão Fidelidade", "Homologação Crédito"], [100, 0]);
    createChart("graficoScore", "bar", [200, 400, 600, 800, 1000], [5, 2, 11, 9, 6]);
    createChart("graficoLimite", "bar", ["2k", "4k", "6k", "8k", "10k", "12k"], [2, 23, 13, 12, 11, 4]);
    createChart("graficoPropostas", "line", ["Jul", "Ago", "Set", "Out", "Nov", "Dez", "Jan"], [9, 57, 90, 67, 5, 2, 1]);
});