const MONTH_NAMES=["January","February","March","April","May","June","July","August","September","October","November","December"],DAYS=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function app(){return{showDatepicker:!1,datepickerValue:"",month:"",year:"",no_of_days:[],blankdays:[],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],initDate(){let t=new Date(2020,11,1);this.month=t.getMonth(),this.year=t.getFullYear(),this.datepickerValue=new Date(this.year,this.month,t.getDate()).toDateString()},isToday(t){const e=new Date,a=new Date(this.year,this.month,t);return e.toDateString()===a.toDateString()},encMonth(){this.month++,12===this.month&&(this.month=0,this.year++)},decMonth(){this.month--,-1===this.month&&(this.month=11,this.year--)},getDateValue(t){let e=new Date(this.year,this.month,t);this.datepickerValue=e.toDateString(),this.$refs.date.value=e.getFullYear()+"-"+("0"+e.getMonth()).slice(-2)+"-"+("0"+e.getDate()).slice(-2),console.log(this.$refs.date.value),this.showDatepicker=!1},getNoOfDays(){let t=new Date(this.year,this.month+1,0).getDate(),e=new Date(this.year,this.month).getDay(),a=[];for(var h=1;h<=e;h++)a.push(h);let n=[];for(h=1;h<=t;h++)n.push(h);this.blankdays=a,this.no_of_days=n}}}
