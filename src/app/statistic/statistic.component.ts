import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent implements OnInit {
  chartOptions: any

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getStatistics().subscribe(data => {
      let sells = data.map(current => {
        return {
          x: new Date(current.x),
          y: current.y
        }
      })
      sells = sells.sort((a, b) => a.x.getTime() - b.x.getTime())
      this.chartOptions = {
        theme: "light2",
        animationEnabled: true,
        zoomEnabled: true,
        title: {
          text: "Statistic"
        },
        axisY: {
          labelFormatter: (e: any) => {
            var suffixes = ["", "K", "M", "B", "T"];
            var value = e.value;

            // Bestimme das Order für die Suffixes
            var order = Math.max(Math.floor(Math.log(Math.abs(value)) / Math.log(1000)), 0);
            if (order > suffixes.length - 1)
              order = suffixes.length - 1;

            var suffix = suffixes[order];
            // Berechne den Wert mit dem entsprechenden Suffix und erhalte das Vorzeichen
            var formattedValue = (value / Math.pow(1000, order)).toFixed(2);
            return "€" + formattedValue + suffix;
          }

        },
        data: [{
          type: "line",
          xValueFormatString: "DD.MM.YYYY",
          yValueFormatString: "#.###.##€",
          dataPoints: sells
        }]
      }
    })
  }
}
