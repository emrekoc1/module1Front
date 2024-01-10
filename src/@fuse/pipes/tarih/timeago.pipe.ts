import { PipeTransform, Pipe, ChangeDetectorRef, NgZone } from "@angular/core";

@Pipe({ name: 'timeago' })
export class TimeAgo implements PipeTransform {
    private timer: number;
	constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}
    transform(value1:string,value:string) {
		this.removeTimer();
        let d = new Date(parseInt(value));

        var tarih = d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		let now = new Date();
		let seconds = Math.round(Math.abs((now.getTime() - d.getTime())/1000));
		let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) *1000;
		this.timer = this.ngZone.runOutsideAngular(() => {
			if (typeof window !== 'undefined') {
				return window.setTimeout(() => {
					this.ngZone.run(() => this.changeDetectorRef.markForCheck());
				}, timeToUpdate);
			}
			return null;
		});
		let minutes = Math.round(Math.abs(seconds / 60));
		let hours = Math.round(Math.abs(minutes / 60));
		let days = Math.round(Math.abs(hours / 24));
		let months = Math.round(Math.abs(days/30.416));
        let years = Math.round(Math.abs(days/365));
        var html = '<a class="" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'"></a>'
		if (Number.isNaN(seconds)){
			return '';
		} else if (seconds <= 45) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">az önce</a>'
		} else if (seconds <= 90) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">1 dakika önce</a>'
		} else if (minutes <= 45) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">'+minutes + ' dakika önce'+'</a>' ;
		} else if (minutes <= 90) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'"> 1 saat önce</a>' ;
		} else if (hours <= 22) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">'+hours + ' saat önce'+'</a>' ;
		} else if (hours <= 36) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">1 gün önce</a>'
		} else if (days <= 25) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">'+days + ' gün önce'+'</a>' ;
		} else if (days <= 45) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">1 ay önce</a>'
		} else if (days <= 345) {
			return  '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">'+months + ' ay önce'+'</a>'
		} else if (days <= 545) {
			return '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">1 yıl önce</a>'
		} else { // (days > 545)
			return   '<a class="clock_style" data-toggle="tooltip" data-placement="bottom" title="'+tarih+'">'+years + ' yıl önce'+'</a>'
		}
	}
	ngOnDestroy(): void {
		this.removeTimer();
	}
	private removeTimer() {
		if (this.timer) {
			window.clearTimeout(this.timer);
			this.timer = null;
		}
	}
	private getSecondsUntilUpdate(seconds:number) {
		let min = 60;
		let hr = min * 60;
		let day = hr * 24;
		if (seconds < min) { // less than 1 min, update every 2 secs
			return 2;
		} else if (seconds < hr) { // less than an hour, update every 30 secs
			return 30;
		} else if (seconds < day) { // less then a day, update every 5 mins
			return 300;
		} else { // update every hour
			return 3600;
		}
	}
    
   
}