//Can thay doi ten bien ctx va myChart de khac voi chart1.js
const ctx2 = document.getElementById('doughnut').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80','80-90'],
        datasets: [{
            label: 'Giá các sản phẩm',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});