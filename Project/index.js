var chart = new CanvasJS.Chart("chartContainer",
	{
    //  width:700,
      title: {
				text: "GNPA Trend",
                horizontalAlign: "left",
							fontSize:15,

			},
      subtitles:[
		{
			text: "Home Loans",
            fontColor:"white",
            backgroundColor:"blue",
            padding:6,
            verticalAlign:"top",
            horizontalAlign:"right",

		},
        {
            text: "Gold Loans",
            fontColor:"white",
            backgroundColor:"blue",
            padding:6,
            verticalAlign:"top",
            horizontalAlign:"right",
		},
        {
			text: "Term Loans",
            fontColor:"white",
            backgroundColor:"blue",
            padding:6,
            verticalAlign:"top",
            horizontalAlign:"right",

		},

		],
		axisY: {
			labelFormatter: function (e) {
				return CanvasJS.formatNumber(e.value);
			},
			includeZero: true
		},
      backgroundColor: "transparent",
	axisX:{
  	lineThickness: 0,
    tickThickness: 0
  },
  axisY:{
  	//lineThickness: 0,
    gridThickness: 0,
    tickLength: 0
  },
      axisX: {
				labelMaxWidth:100,
                interval:1,
        		labelAngle:0,
			  },

      dataPointMaxWidth: 10,
		data: [
		{

			type: "column",
			color:"#b8b5ff",
          indexLabelMaxWidth: 40,
			dataPoints: [
				{ y: 55, label: "Jan" },
			{ y: 65, label: "Feb" },
			{ y: 38, label: "Mar" },
			{ y: 58, label: "Apr" },
			{ y: 60, label: "May" },
			{ y: 42, label: "Jun" },
			{ y: 50, label: "Jul" },
			{ y: 70, label: "Aug" },
			{ y: 53, label: "Sept" },
			{ y: 63, label: "Oct"},
			{ y: 42, label: "Nov"},
			{ y: 75, label: "Dec"},
			]
		}
		]
	});
	chart.render();


	chart = new CanvasJS.Chart("chartContainer1",
		{
	     // width:700,
	      title: {
					text: "GNPA Trend",
	                horizontalAlign: "left",
								fontSize:15,
				},
	      subtitles:[
			{
				text: "GNPA",
	            fontColor:"white",
	            backgroundColor:"blue",
	            padding:6,
	            verticalAlign:"top",
	            horizontalAlign:"right",
							borderRadius:"50",

			},
	        {
	            text: "SMA",
	            fontColor:"white",
	            backgroundColor:"blue",
	            padding:6,
	            verticalAlign:"top",
	            horizontalAlign:"right",
			},
	        {
				text: "Recoveries",
	            fontColor:"white",
	            backgroundColor:"blue",
	            padding:6,
	            verticalAlign:"top",
	            horizontalAlign:"right",
			},
			],
			axisY: {
				labelFormatter: function (e) {
					return CanvasJS.formatNumber(e.value);
				},
				includeZero: true
			},
	      backgroundColor: "transparent",
		axisX:{
	  	lineThickness: 0,
	    tickThickness: 0
	  },
	  axisY:{
	  	//lineThickness: 0,
	    gridThickness: 0,
	    tickLength: 0
	  },
	      axisX: {
					labelMaxWidth:100,
	                interval:1,
	        		labelAngle:0,
				  },

	      dataPointMaxWidth: 10,
			data: [
			{

				type: "column",
				color:"blue",
	          indexLabelMaxWidth: 40,
				dataPoints: [
					{ y: 55, label: "Jan" },
				{ y: 65, label: "Feb" },
				{ y: 38, label: "Mar" },
				{ y: 58, label: "Apr" },
				{ y: 60, label: "May" },
				{ y: 42, label: "Jun" },
				{ y: 50, label: "Jul" },
				{ y: 70, label: "Aug" },
				{ y: 53, label: "Sept" },
				{ y: 63, label: "Oct"},
				{ y: 42, label: "Nov"},
				{ y: 75, label: "Dec"},
				]
			}
			]
		});
		chart.render();
