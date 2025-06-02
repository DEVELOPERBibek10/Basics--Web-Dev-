const salesDatas = [
  {
    name: "Rahul",
    actualSales: 120,
    salesTarget: 150,
  },
  {
    name: "Priya",
    actualSales: 180,
    salesTarget: 190,
  },
  {
    name: "Amrit",
    actualSales: 80,
    salesTarget: 150,
  },
];

const salesReport = [];
salesDatas.forEach(function (Data) {
  salesReport.push({
    name: Data.name,
    sold: Data.actualSales,
    salesPercentage: calcSalesPercent(Data.actualSales, Data.salesTarget),
    performance: EvalPerformance(Data.actualSales, Data.salesTarget),
    bonusAmount: calcBonusAmount(Data.actualSales, Data.salesTarget),
  });
});

console.log("\n----------Sales Reoprt----------\n");
salesReport.forEach(function (report) {
  console.log(`Name: ${report.name}`);
  console.log(`Units Sold: ${report.sold}`);
  console.log(`Sales Percentage: ${report.salesPercentage}%`);
  console.log(`Performance: ${report.performance}`);
  console.log(`Bonus Amount: Rs.${report.bonusAmount}\n`);
});

function calcSalesPercent(actualSales, salesTarget) {
  let salesPercent = Math.floor((actualSales / salesTarget) * 100);
  return salesPercent;
}

function EvalPerformance(actualSales, salesTarget) {
  let salesPercent = Math.floor((actualSales / salesTarget) * 100);
  if (salesPercent >= 90) {
    return "High Performer";
  } else if (salesPercent >= 70 && salesPercent < 90) {
    return "Average Performer";
  } else {
    return "Low Performer";
  }
}

function calcBonusAmount(actualSales, salesTarget) {
  let salesPercent = Math.floor((actualSales / salesTarget) * 100);
  let BonusRate;
  if (salesPercent >= 90) {
    BonusRate = 0.2;
  } else if (salesPercent >= 70 && salesPercent < 90) {
    BonusRate = 0.1;
  } else {
    BonusRate = 0.05;
  }

  return actualSales * BonusRate;
}
