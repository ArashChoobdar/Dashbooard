/*
Template Name: HTML Dashboard - Bootstrap Theme
Author: Arkaphic
Website: https://Arkaphic.ir
Contact: +989158781101
File: Apex chart
*/

Apex.chart = {
	fontFamily: 'inherit',
	locales: [{
		"name": "fa",
		"options": {
			"months": ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
			"shortMonths": ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
			"days": ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
			"shortDays": ["ی", "د", "س", "چ", "پ", "ج", "ش"],
			"toolbar": {
				"exportToSVG": "دریافت SVG",
				"exportToPNG": "دریافت PNG",
				"exportToCSV": "دریافت CSV",
				"menu": "فهرست",
				"selection": "انتخاب",
				"selectionZoom": "بزرگنمایی قسمت انتخاب شده",
				"zoomIn": "بزرگ نمایی",
				"zoomOut": "کوچک نمایی",
				"pan": "جا به جایی",
				"reset": "بازنشانی بزرگ نمایی"
			}
		}
	}],
	defaultLocale: "fa"
}

//  line chart datalabel

var options = {
	chart: {
		height: 380,
		type: 'line',
		zoom: {
			enabled: false
		},
		toolbar: {
			show: false
		}
	},
	colors: ['#3b5de7', '#eeb902'],
	dataLabels: {
		enabled: true,
	},
	stroke: {
		width: [3, 3],
		curve: 'straight'
	},
	series: [{
			name: "بالا - 1399",
			data: [26, 24, 32, 36, 33, 31, 33]
		},
		{
			name: "پایین - 1399",
			data: [14, 11, 16, 12, 17, 13, 12]
		}
	],
	title: {
		text: 'میانگین دمای بالا و پایین',
		align: 'right'
	},
	grid: {
		row: {
			colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.2
		},
		borderColor: '#f1f1f1'
	},
	markers: {
		style: 'inverted',
		size: 6
	},
	xaxis: {
		categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
		title: {
			text: 'ماه'
		}
	},
	yaxis: {
		title: {
			text: 'دما'
		},
		min: 5,
		max: 40
	},
	legend: {
		position: 'top',
		horizontalAlign: 'right',
		floating: true,
		offsetY: -35,
		offsetX: -5
	},
	responsive: [{
		breakpoint: 600,
		options: {
			chart: {
				toolbar: {
					show: false
				}
			},
			legend: {
				show: false
			},
		}
	}]
}

var chart = new ApexCharts(
	document.querySelector("#line_chart_datalabel"),
	options
);

chart.render();


//  line chart datalabel

var options = {
	chart: {
		height: 380,
		type: 'line',
		zoom: {
			enabled: false
		},
		toolbar: {
			show: false,
		}
	},
	colors: ['#3b5de7', '#ff715b', '#45cb85'],
	dataLabels: {
		enabled: false
	},
	stroke: {
		width: [3, 4, 3],
		curve: 'straight',
		dashArray: [0, 8, 5]
	},
	series: [{
			name: "مدت جلسه",
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
		},
		{
			name: "نمایش صفحه",
			data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
		},
		{
			name: 'مجموع بازدید',
			data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
		}
	],
	title: {
		text: 'آمار صفحه',
		align: 'right'
	},
	markers: {
		size: 0,

		hover: {
			sizeOffset: 6
		}
	},
	xaxis: {
		categories: ['01 آذر', '02 آذر', '03 آذر', '04 آذر', '05 آذر', '06 آذر', '07 آذر', '08 آذر', '09 آذر',
			'10 آذر', '11 آذر', '12 آذر'
		],
	},
	tooltip: {
		y: [{
			title: {
				formatter: function (val) {
					return val + " (دقیقه)"
				}
			}
		}, {
			title: {
				formatter: function (val) {
					return val + " در هر جلسه"
				}
			}
		}, {
			title: {
				formatter: function (val) {
					return val;
				}
			}
		}]
	},
	grid: {
		borderColor: '#f1f1f1',
	},
	legend: {
		offsetY: 7
	}
}

var chart = new ApexCharts(
	document.querySelector("#line_chart_dashed"),
	options
);

chart.render();

//   spline_area

var options = {
	chart: {
		height: 350,
		type: 'area',
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 3,
	},
	series: [{
		name: 'سری 1',
		data: [34, 40, 28, 52, 42, 109, 100]
	}, {
		name: 'سری 2',
		data: [32, 60, 34, 46, 34, 52, 41]
	}],
	colors: ['#45cb85', '#eeb902'],
	xaxis: {
		type: 'datetime',
		categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
	},
	grid: {
		borderColor: '#f1f1f1',
	},
	tooltip: {
		x: {
			format: 'yyyy/MM/dd HH:mm'
		},
	}
}

var chart = new ApexCharts(
	document.querySelector("#spline_area"),
	options
);

chart.render();

// column chart

var options = {
	chart: {
		height: 350,
		type: 'bar',
		toolbar: {
			show: false,
		}
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '45%',
			endingShape: 'rounded'
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	series: [{
		name: 'سود خالص',
		data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
	}, {
		name: 'درآمد',
		data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
	}, {
		name: 'جریان نقدینگی',
		data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
	}],
	colors: ['#45cb85', '#3b5de7', '#eeb902'],
	xaxis: {
		categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
	},
	yaxis: {
		title: {
			text: 'هزار تومان'
		}
	},
	grid: {
		borderColor: '#f1f1f1',
	},
	fill: {
		opacity: 1

	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + ' هزار تومان';
			}
		}
	},
	legend: {
		offsetY: 7
	}
}

var chart = new ApexCharts(
	document.querySelector("#column_chart"),
	options
);

chart.render();


// column chart with datalabels

var options = {
	chart: {
		height: 350,
		type: 'bar',
		toolbar: {
			show: false,
		}
	},
	plotOptions: {
		bar: {
			dataLabels: {
				position: 'top', // top, center, bottom
			},
		}
	},
	dataLabels: {
		enabled: true,
		formatter: function (val) {
			return val + "%";
		},
		offsetY: -25,
		style: {
			fontSize: '12px',
			colors: ["#304758"]
		}
	},
	series: [{
		name: 'تورم',
		data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8]
	}],
	colors: ['#3b5de7'],
	grid: {
		borderColor: '#f1f1f1',
	},
	xaxis: {
		categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
		position: 'top',
		labels: {
			offsetY: -50
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		},
		crosshairs: {
			fill: {
				type: 'gradient',
				gradient: {
					colorFrom: '#D8E3F0',
					colorTo: '#BED1E6',
					stops: [0, 100],
					opacityFrom: 0.4,
					opacityTo: 0.5,
				}
			}
		},
		tooltip: {
			enabled: true,
			offsetY: -35
		}
	},
	fill: {
		gradient: {
			shade: 'light',
			type: "horizontal",
			shadeIntensity: 0.25,
			gradientToColors: undefined,
			inverseColors: true,
			opacityFrom: 1,
			opacityTo: 1,
			stops: [50, 0, 100, 100]
		},
	},
	yaxis: {
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false,
		},
		labels: {
			show: false,
			formatter: function (val) {
				return val + "%";
			}
		}

	},
	title: {
		text: 'تورم ماهانه در ایران، 1394',
		floating: true,
		offsetY: 330,
		align: 'center',
		style: {
			color: '#444'
		}
	},
}

var chart = new ApexCharts(
	document.querySelector("#column_chart_datalabel"),
	options
);

chart.render();



// Bar chart

var options = {
	chart: {
		height: 350,
		type: 'bar',
		toolbar: {
			show: false,
		}
	},
	plotOptions: {
		bar: {
			horizontal: true,
		}
	},
	dataLabels: {
		enabled: false
	},
	series: [{
		name: 'سری 1',
		data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
	}],
	colors: ['#45cb85'],
	grid: {
		borderColor: '#f1f1f1',
	},
	xaxis: {
		categories: ['ایران', 'کانادا', 'بریتانیا', 'هلند', 'ایتالیا', 'فرانسه', 'ژاپن', 'ایالات متحده', 'چین', 'هند'],
	}
}

var chart = new ApexCharts(
	document.querySelector("#bar_chart"),
	options
);

chart.render();


// Mixed chart

var options = {
	chart: {
		height: 350,
		type: 'line',
		stacked: false,
		toolbar: {
			show: false
		}
	},
	stroke: {
		width: [0, 2, 4],
		curve: 'smooth'
	},
	plotOptions: {
		bar: {
			columnWidth: '50%'
		}
	},
	colors: ['#45cb85', '#eeb902', '#3b5de7'],
	series: [{
		name: 'تیم الف',
		type: 'column',
		data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
	}, {
		name: 'تیم ب',
		type: 'area',
		data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
	}, {
		name: 'تیم ج',
		type: 'line',
		data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
	}],
	fill: {
		opacity: [0.85, 0.25, 1],
		gradient: {
			inverseColors: false,
			shade: 'light',
			type: "vertical",
			opacityFrom: 0.85,
			opacityTo: 0.55,
			stops: [0, 100, 100, 100]
		}
	},
	labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
	markers: {
		size: 0
	},
	xaxis: {
		type: 'datetime'
	},
	yaxis: {
		title: {
			text: 'امتیاز',
		},
	},
	tooltip: {
		shared: true,
		intersect: false,
		y: {
			formatter: function (y) {
				if (typeof y !== "undefined") {
					return y.toFixed(0) + " امتیاز";
				}
				return y;

			}
		}
	},
	grid: {
		borderColor: '#f1f1f1'
	},
	legend: {
		offsetY: 7
	}
}

var chart = new ApexCharts(
	document.querySelector("#mixed_chart"),
	options
);

chart.render();


//  Radial chart

var options = {
	chart: {
		height: 380,
		type: 'radialBar',
	},
	plotOptions: {
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px',
				},
				value: {
					fontSize: '16px',
				},
				total: {
					show: true,
					label: 'مجموع',
					formatter: function (w) {
						// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
						return 249
					}
				}
			}
		}
	},
	series: [44, 55, 67, 83],
	labels: ['کامپیوتر', 'تبلت', 'لپ تاپ', 'موبایل'],
	colors: ['#3b5de7', '#45cb85', '#eeb902', '#ff715b']
}

var chart = new ApexCharts(
	document.querySelector("#radial_chart"),
	options
);

chart.render();


// pie chart

var options = {
	chart: {
		height: 320,
		type: 'pie',
	},
	series: [44, 55, 41, 17, 15],
	labels: ["سری 1", "سری 2", "سری 3", "سری 4", "سری 5"],
	colors: ["#45cb85", "#3b5de7", "#ff715b", "#0caadc", "#eeb902"],
	legend: {
		show: true,
		position: 'bottom',
		horizontalAlign: 'center',
		verticalAlign: 'middle',
		floating: false,
		fontSize: '14px',
		offsetX: 0,
	},
	responsive: [{
		breakpoint: 600,
		options: {
			chart: {
				height: 240
			},
			legend: {
				show: false
			},
		}
	}]
}

var chart = new ApexCharts(
	document.querySelector("#pie_chart"),
	options
);

chart.render();


// Donut chart

var options = {
	chart: {
		height: 320,
		type: 'donut',
	},
	series: [44, 55, 41, 17, 15],
	labels: ["سری 1", "سری 2", "سری 3", "سری 4", "سری 5"],
	colors: ["#45cb85", "#3b5de7", "#ff715b", "#0caadc", "#eeb902"],
	legend: {
		show: true,
		position: 'bottom',
		horizontalAlign: 'center',
		verticalAlign: 'middle',
		floating: false,
		fontSize: '14px',
		offsetX: 0,
	},
	responsive: [{
		breakpoint: 600,
		options: {
			chart: {
				height: 240
			},
			legend: {
				show: false
			},
		}
	}]
}

var chart = new ApexCharts(
	document.querySelector("#donut_chart"),
	options
);

chart.render();