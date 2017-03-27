$(document).ready(function(e) {
	newgame();
});

var bord = new Array();

function newgame() {
	//初始化棋盘格
	init();
	//在随机两个各自声称的数字
	//  generateOneNumber();
	//  generateOneNumber();
}

function init() {
	bord = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];
	console.log(bord);
	generateOneNumber();
}

//随机在格子上生成一个随机数 2或者4
function generateOneNumber() {
	var chatStr = getChat();
	getCell(getChat());
	getCell(getChat());
	DrowCell();
	console.log(bord);
}

//随机生成2或4
function getChat() {
	var chatArr = ['2', '4'];
	return chatArr[Math.ceil(Math.random() * 2) - 1];

}

//2或者4棋盘上的位置
function getCell(str) {
	for(var i = 0; i < 16; i++) {
		var row = Math.ceil(Math.random() * 4) - 1;
		var col = Math.ceil(Math.random() * 4) - 1;
		console.log(row + ':' + col);
		if(bord[row][col]==0){
			bord[row][col]=str;
			break;
		}
		
		//判断游戏结束
	}
}

//绘制页面
function DrowCell(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(bord[i][j]>0){
				$('#cell'+i+j).html(bord[i][j]);
			}
		}
	}
}
