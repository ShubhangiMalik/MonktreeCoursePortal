

$('#sidebarCollapse').on('click', function () {
  $('#sidebar').slideToggle("slow", "linear", function () {
    $('.text').toggleClass('addMargin');
    $('#sidebarCollapse').toggleClass('addMargin');
  });
});



// topic.textContent = "Topic1"
// score.textContent = localStorage.getItem("resultValue")
// duration.textContent = localStorage.getItem("timeTaken")

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Correct(in %)", "Incorrect(in %)", "Unattempted (in %)"],
    datasets: [{
      backgroundColor: [
        "	#00FF00",
        "#FF0000",
        "#dbdbdb"
      ],
      data: [70,20,10]
    }]
  }
});