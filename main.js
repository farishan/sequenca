var app = new Vue({
	el: '#app',
	data: function(){
		return {
			listLength: 0,
			min: 0,
			max: 0,
			list: []
		}
	},
	mounted(){

	},
	methods: {
		generate(){
			if(this.listLength<100){
				if(this.listLength%2==0){
					this.listLength++;
				}
				this.list = oasbtn(this.min, this.max, this.listLength);
				console.log(this.list)
			}
		}
	}
});

// oasbtn = Odd Arithmetic Sequence Between Two Number
function oasbtn(a, b, l){
	var a = parseInt(a);
	var b = parseInt(b);
	var l = parseInt(l);
	var r = [];
	var d = b-((b+a)/2);
	if(l%2 == 0){
		r = false;
	}else{
		var k = 0;
		for (var i = 0; i <= l; i++) {
			if(i%2==1 && i>3){
				k++;
			}
		}
		var nd = d/(k+1);
		for (var i = 0; i < l; i++) {
			r.push(a + nd*i);
		}
	}
	return r;
}