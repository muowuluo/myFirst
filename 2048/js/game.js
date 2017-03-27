function game() {

}
game.prototype = {
	bord: [
		[0, 0, 0, 0],
		[2, 0, 0, 0],
		[4, 0, 0, 0],
		[0, 0, 0, 0]
	],
	chatArr: ['2', '4']
}

//随机生成随机数
game.prototype.RandNumber = function() {

	var str = this.chatArr[Math.ceil(Math.random() * this.chatArr.length) - 1];
	for(var i = 0; i < 16; i++) {
		var row = Math.ceil(Math.random() * 4) - 1;
		var col = Math.ceil(Math.random() * 4) - 1;
		console.log(row + ':' + col);
		if(this.bord[row][col] == 0) {
			this.bord[row][col] = parseInt(str);
			break;
		}

		//判断游戏结束
	}
}

//绘制页面
game.prototype.DrowCell = function() {
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			if(this.bord[i][j] > 0) {
				var span = $('<span></span>');
				span.addClass('sp' + i + j);
				span.css('background', this.getBg(this.bord[i][j]));
				span.html(this.bord[i][j]);
				$('#cell' + i + j).append(span);
			}
		}
	}
}

/*
 * summary:fsd
 */
game.prototype.MoveUp = function() {

	this.animatUp();
	//随机生成一个
	//判断游戏是否结束
}

game.prototype.animatUp = function() {
	//先向上移动，上方向
	//第一行保持不变
	//第一列开始向上移动
	//   console.log(this.bord[1][0]+this.bord[2][0]+this.bord[3][0]);
	var arrs = new Array();
	arrs.push(this.bord[i][0]);
	console.log(arrs)
	for(var i = 0; i < 4; i++) {
		//   	var thisNumber=parseInt($('#cell'+i+'0').find('span').html());
	    //i=0 第一个一般不做处理
	    if(i==1){
	    	
	    }
	}

}

game.prototype.getBg = function(number) {
	console.log(number);
	switch(parseInt(number)) {
		case 2:
			return "#eee4da";
			break;
		case 4:
			return "#eee4da";
			break;
		case 8:
			return "#f26179";
			break;
		case 16:
			return "#f59563";
			break;
		case 32:
			return "#f67c5f";
			break;
		case 64:
			return "#f65e36";
			break;
		case 128:
			return "#edcf72";
			break;
		case 256:
			return "#edcc61";
			break;
		case 512:
			return "#9c0";
			break;
		case 1024:
			return "#3365a5";
			break;
		case 2048:
			return "#09c";
			break;
		case 4096:
			return "#a6bc";
			break;
		case 8192:
			return "#93c";
			break;
	}
	return "black";
}