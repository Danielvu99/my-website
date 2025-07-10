var amHistoryJson = {"data":[{"id":1192,"year":2023,"qishu":"173","date":"2023-06-22","num":"40,10,08,31,09,25,36","shengxiao":"鼠,马,猴,鸡,羊,兔,龙","wuxing":"金,金,火,金,金,土,木"},{"id":1191,"year":2023,"qishu":"172","date":"2023-06-21","num":"38,40,03,31,33,08,12","shengxiao":"虎,鼠,牛,鸡,羊,猴,龙","wuxing":"火,金,土,金,土,火,水"},{"id":1190,"year":2023,"qishu":"171","date":"2023-06-20","num":"39,35,48,47,41,09,10","shengxiao":"牛,蛇,龙,蛇,猪,羊,马","wuxing":"金,木,土,土,水,金,金"},{"id":1189,"year":2023,"qishu":"170","date":"2023-06-19","num":"15,31,34,24,05,01,10","shengxiao":"牛,鸡,马,龙,猪,兔,马","wuxing":"火,金,土,金,木,金,金"},{"id":1188,"year":2023,"qishu":"169","date":"2023-06-18","num":"46,42,02,26,32,30,04","shengxiao":"马,狗,虎,虎,猴,狗,鼠","wuxing":"火,水,金,土,金,火,土"},{"id":1187,"year":2023,"qishu":"168","date":"2023-06-17","num":"18,29,21,33,42,49,12","shengxiao":"狗,猪,羊,羊,狗,兔,龙","wuxing":"土,火,木,土,水,水,水"},{"id":1186,"year":2023,"qishu":"167","date":"2023-06-16","num":"49,31,01,15,18,32,46","shengxiao":"兔,鸡,兔,牛,狗,猴,马","wuxing":"水,金,金,火,土,金,火"},{"id":1185,"year":2023,"qishu":"166","date":"2023-06-15","num":"27,41,07,04,25,17,06","shengxiao":"牛,猪,鸡,鼠,兔,猪,狗","wuxing":"水,水,火,土,土,土,木"},{"id":1184,"year":2023,"qishu":"165","date":"2023-06-14","num":"14,22,01,05,40,16,17","shengxiao":"虎,马,兔,猪,鼠,鼠,猪","wuxing":"木,木,金,木,金,火,土"},{"id":1183,"year":2023,"qishu":"164","date":"2023-06-13","num":"15,42,04,26,02,30,10","shengxiao":"牛,狗,鼠,虎,虎,狗,马","wuxing":"火,水,土,土,金,火,金"}],"msg":"","code":1};
var xgHistoryJson = {"data":[{"id":1763,"year":2022,"qishu":"099","date":"2022-12-01","num":"39,18,42,27,14,32,43","shengxiao":"鼠,鸡,鸡,鼠,牛,羊,猴","wuxing":"金,水,木,水,火,土,木"},{"id":1762,"year":2022,"qishu":"098","date":"2022-11-29","num":"12,18,22,40,28,31,07","shengxiao":"兔,鸡,蛇,猪,猪,猴,猴","wuxing":"木,水,金,水,火,金,火"},{"id":1761,"year":2022,"qishu":"097","date":"2022-11-26","num":"25,29,28,44,14,43,10","shengxiao":"虎,狗,猪,羊,牛,猴,蛇","wuxing":"土,火,火,火,火,木,水"},{"id":1760,"year":2022,"qishu":"096","date":"2022-11-24","num":"28,25,19,14,03,12,11","shengxiao":"猪,虎,猴,牛,鼠,兔,龙","wuxing":"火,土,水,火,土,木,水"},{"id":1759,"year":2022,"qishu":"095","date":"2022-11-22","num":"10,46,13,32,11,06,39","shengxiao":"蛇,蛇,虎,羊,龙,鸡,鼠","wuxing":"水,土,木,土,水,火,金"},{"id":1758,"year":2022,"qishu":"094","date":"2022-11-19","num":"47,46,27,06,39,11,15","shengxiao":"龙,蛇,鼠,鸡,鼠,龙,鼠","wuxing":"土,土,水,火,金,水,火"},{"id":1757,"year":2022,"qishu":"093","date":"2022-11-17","num":"33,27,32,01,09,35,45","shengxiao":"马,鼠,羊,虎,马,龙,马","wuxing":"土,水,土,金,金,木,火"},{"id":1756,"year":2022,"qishu":"092","date":"2022-11-15","num":"17,18,44,38,32,49,19","shengxiao":"狗,鸡,羊,牛,羊,虎,猴","wuxing":"土,水,火,金,土,水,水"},{"id":1755,"year":2022,"qishu":"091","date":"2022-11-13","num":"33,05,19,26,18,12,46","shengxiao":"马,狗,猴,牛,鸡,兔,蛇","wuxing":"土,木,水,水,水,木,土"},{"id":1754,"year":2022,"qishu":"090","date":"2022-11-10","num":"11,29,18,12,14,30,31","shengxiao":"龙,狗,鸡,兔,牛,鸡,猴","wuxing":"水,火,水,木,火,金,金"}],"msg":"","code":1};
const numsAll =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];
//今日推荐 1
var config={
    jinrituijian1_title: '★★今日推荐{num}期★★',
    jinrituijian1 : [
        {'html':'绝杀半波【绝杀半波】<br>【39中37期！牛逼】<em class="red">点击查看</em>','href':'https://www.567451.com','img':'./imges/dingjian.png'},//
        {'html':'人五人六【黑白中特】<br>【21中21期！牛逼】<em class="red">点击查看</em>','href':'https://www.567426.com','img':'./imges/dingjian.png'},//
        {'html':'候车月台【平特三字】<br>【13中13期！牛逼】<em class="red">点击查看</em>','href':'https://www.567496.com','img':'./imges/dingjian.png'},//
        {'html':'玉食锦衣【七肖七码】<br>【16中12期！爆中】<em class="red">点击查看</em>','href':'https://www.567445.com','img':'./imges/dingjian.png'},//
        {'html':'灯红酒绿【三行中特】<br>【11中11期！稳赚】<em class="red">点击查看</em>','href':'https://www.567494.com','img':'./imges/niubi.png'},//
        {'html':'野马归途【①肖平特】 <br>【15中15期！稳赚】<em class="red">点击查看</em>','href':'https://www.567498.com','img':'./imges/niubi.png'},//
        {'html':'满城灯火【六肖中特】<br>【19中19期！稳赚】<em class="red">点击查看</em>','href':'https://www.567482.com','img':'./imges/niubi.png'},//
        {'html':'霸气侧漏【复式连肖】<br>【15中15期！稳赚】<em class="red">点击查看</em>','href':'https://www.567442.com','img':'./imges/niubi.png'},//
        {'html':'善财难舍【一肖一码】<br>【10中06期！爆中】<em class="red">点击查看</em>','href':'https://www.567453.com','img':'./imges/mashen.png'},//
        {'html':'仙姿玉貌【一肖三码】<br>【14中13期！爆中】<em class="red">点击查看</em>','href':'https://www.567431.com','img':'./imges/mashen.png'},//
        {'html':'超尘出俗【36码围特】<br>【09中09期！很稳】<em class="red">点击查看</em>','href':'https://www.567490.com','img':'./imges/mashen.png'},//
        {'html':'濮阳拒枪【四组三联】<br>【15中11期！爆中】<em class="red">点击查看</em>','href':'https://www.567425.com','img':'./imges/mashen.png'},//
    ],
	//今日推荐 1
    jinrituijian2_title: '★★今日推荐{num}期★★',
    jinrituijian2 : [
        {'html':'绝世高手【一肖中特】<br>【45中39期！牛逼】<em class="red">点击查看</em>','href':'https://www.567451.com','img':'./imges/dingjian.png'},//
        {'html':'物产丰富【家野中特】<br>【32中32期！牛逼】<em class="red">点击查看</em>','href':'https://www. 567426.com','img':'./imges/dingjian.png'},//
        {'html':'高低不平【单双中特】<br>【24中24期！牛逼】<em class="red">点击查看</em>','href':'https://www.567496.com','img':'./imges/dingjian.png'},//
        {'html':'远近闻名【五尾中特】<br>【19中18期！爆中】<em class="red">点击查看</em>','href':'https://www.567445.com','img':'./imges/dingjian.png'},//
        {'html':'西游论坛【10码中特】<br>【17中17期！稳赚】<em class="red">点击查看</em>','href':'https://www.567494.com','img':'./imges/niubi.png'},//
        {'html':'毫不介意【六肖中特】 <br>【28中28期！稳赚】<em class="red">点击查看</em>','href':'https://www.567498.com','img':'./imges/niubi.png'},//
        {'html':'无拘无束【大小中特】<br>【16中16期！稳赚】<em class="red">点击查看</em>','href':'https://www.567482.com','img':'./imges/niubi.png'},//
        {'html':'挺身而出【平特一尾】<br>【22中20期！稳赚】<em class="red">点击查看</em>','href':'https://www.567442.com','img':'./imges/niubi.png'},//
        {'html':'非同寻常【两波中特】<br>【33中33期！爆中】<em class="red">点击查看</em>','href':'https://www.567453.com','img':'./imges/mashen.png'},//
        {'html':'今日闲情【复式连肖】<br>【20中20期！爆中】<em class="red">点击查看</em>','href':'https://www.567431.com','img':'./imges/mashen.png'},//
        {'html':'饿殍遍野【单双中特】<br>【13中13期！很稳】<em class="red">点击查看</em>','href':'https://www.567490.com','img':'./imges/mashen.png'},//
        {'html':'仁人志士【绝杀四肖】<br>【26中24期！爆中】<em class="red">点击查看</em>','href':'https://www.567425.com','img':'./imges/mashen.png'},//
    ],
	//澳门单双
	am_danshuang_title :'暴富单双 882298.com',
	am_danshuang_href :'https://www.hc974.com',
	//澳门平特一肖
	am_pingteyixiao_title :'澳门平特一肖 882298.com',
	am_pingteyixiao_href :'https://www.hc974.com',
	//澳门心水资料(1)
	am_xinshui_title :'原创心水资料区',
	am_xinshui_href : 'https://www.hc974.com',
	am_xinshui:[
        {'html':'期:笔墨书香|家禽野兽【10中10】免费公开','href':'https://www.886194.com'},//
        {'html':'期:回春大地|三字平特【08中08】高手资料','href':'https://www.789438.com'},//
        {'html':'期:另眼相看|阴阳中特【16中12】精英送富','href':'https://www.789004.com'},//
        {'html':'期:小鱼规律|一尾平特【14中13】提前公开','href':'https://www.886294.com'},//
        {'html':'期:天道轮回|琴棋书画【14中13】大胆跟踪','href':'https://www.886539.com'},//
        {'html':'期:边上冲梯|前后中特【12中11】更新最早','href':'https://www.886041.com'},//
        {'html':'期:勿剪之惠|单双三肖【12中11】特码资料','href':'https://www.886503.com'},//
        {'html':'期:天墉城主|七肖中特【12中10】长跟必赚','href':'https://www.886540.com'},//
        {'html':'期:山高水长|文武中特【24中21】稳中资料','href':'https://www.886542.com'},//
        {'html':'期:黔驴技穷|天地生肖【23中20】绝对好料','href':'https://www.886537.com'},//
        {'html':'期:正中下怀|左右中特【28中24】中到黑庄','href':'https://www.886614.com'},//
        {'html':'期:锦绣山河|吉美凶丑【18中14】已公开料','href':'https://www.886642.com'},//
    ],
	//澳门大小中特
	am_daxiao_title :'澳门大小中特√ 882298.com',
	am_daxiao_href :'https://www.hc980.com',
	//澳门心水资料(2)
	am_xinshui_title_2 :'原创心水资料区 882298.com',
	am_xinshui_2:[
        {'html':'期:【慕容神飞】<em class="red">【男女中特】</em> 已公开!','href':'https://www.567451.com'},//
        {'html':'期:【才华出众】<em class="red">【春夏秋冬】</em> 已公开!','href':'https://www.567426.com'},//
        {'html':'期:【会游的鱼】<em class="red">【双波中特】</em> 已公开!','href':'https://www.567496.com'},//
        {'html':'期:【小乖总裁】<em class="red">【特头单双】</em> 已公开!','href':'https://www.567445.com'},//
        {'html':'期:【双龙抢注】<em class="red">【合数中特】</em> 已公开!','href':'https://www.567494.com'},//
        {'html':'期:【大话王家】<em class="red">【平特一肖】</em> 已公开!','href':'https://www.567498.com'},//
        {'html':'期:【王牌对决】<em class="red">【左右中特】</em> 已公开!','href':'https://www.567482.com'},//
        {'html':'期:【龙飞传说】<em class="red">【三字平特】</em> 已公开!','href':'https://www.567442.com'},//
        {'html':'期:【老兵传奇】<em class="red">【四行中特】</em> 已公开!','href':'https://www.567453.com'},//
        {'html':'期:【专职游民】<em class="red">【买啥开啥】</em> 已公开!','href':'https://www.567431.com'},//
        {'html':'期:【低调小点】<em class="red">【笔画生肖】</em> 已公开!','href':'https://www.567490.com'},//
        {'html':'期:【精心制作】<em class="red">【发财八肖】</em> 已公开!','href':'https://www.567425.com'},//
    ],
	//澳门心水资料(3)
	am_xinshui_title_3 :'原创心水资料区 882298.com',
	am_xinshui_3:[
        {'html':'期:【江湖情画】<em class="red">【②码中特】</em> 已公开!','href':'https://www.567451.com'},//
        {'html':'期:【谦尊而光】<em class="red">【赌王３肖】</em> 已公开!','href':'https://www.567426.com'},//
        {'html':'期:【开心赚钱】<em class="red">【四码赢家】</em> 已公开!','href':'https://www.567496.com'},//
        {'html':'期:【桃色玫瑰】<em class="red">【精彩②行】</em> 已公开!','href':'https://www.567445.com'},//
        {'html':'期:【达观天下】<em class="red">【③肖中奖】</em> 已公开!','href':'https://www.567494.com'},//
        {'html':'期:【桃花村长】<em class="red">【一码中特】</em> 已公开!','href':'https://www.567498.com'},//
        {'html':'期:【鲜花掌声】<em class="red">【精准一头】</em> 已公开!','href':'https://www.567482.com'},//
        {'html':'期:【联联不设】<em class="red">【三肖六码】</em> 已公开!','href':'https://www.567442.com'},//
        {'html':'期:【精英组合】<em class="red">【霸王一波】</em> 已公开!','href':'https://www.567453.com'},//
        {'html':'期:【尽欢朝夕】<em class="red">【澳门六肖】</em> 已公开!','href':'https://www.567431.com'},//
        {'html':'期:【生龙活虎】<em class="red">【三尾称王】</em> 已公开!','href':'https://www.567490.com'},//
        {'html':'期:【六合叶子】<em class="red">【九肖连准】</em> 已公开!','href':'https://www.567425.com'},//
    ],
	//《澳门六合彩》独家12码
	dujia12ma_title : '澳门独家12码 882298.com',
	dujia12ma_href : 'https://www.hc980.com',
	//《澳门六合彩》神算六肖爆特
	am_shensuan6xiao_title: '澳门六肖爆特 882298.com',
	am_shensuan6xiao_href: 'https://www.hc980.com',
	// 《澳门六合彩》必中家野
	am_jiaqinyeshou_title: '传奇家野 882298.com',
	am_jiaqinyeshou_href: 'https://www.hc980.com',
	//全网更新最早免费资料 1
    am_ziliao_1:[
        {'name':'天空彩票','title':'<span style="color:blue">期:澳门推荐【二肖四码】已更新</span>','href':'https://www.886342.com'},//
        {'name':'专业公式','title':'<span style="color:red">期:热门推荐【一三五码】已更新</span>','href':'https://www.886894.com'},//
        {'name':'大陆仔网','title':'<span style="color:green">期:实战高手【一波爆中】已更新</span>','href':'https://www.886872.com'},//
        {'name':'创富澳门','title':'<span style="color:brown">期:纵横六合【三中二=】已更新</span>','href':'https://www.886843.com'},//
        {'name':'澳门霸王','title':'<span style="color:chocolate">期:牛逼大师【一肖五码】已更新</span>','href':'https://www.886851.com'},//
        {'name':'广东会友','title':'<span style="color:darkBlue">期:诸葛神算【必爆一码】已更新</span>','href':'https://www.886830.com'},//
        {'name':'醉仙大师','title':'<span style="color:deepPink">期:金牌马神【三肖中特】已更新</span>','href':'https://www.886930.com'},//
        {'name':'东方心经','title':'<span style="color:MediumSlateBlue">期:实力品牌【十码来料】已更新</span>','href':'https://www.886949.com'},//
        {'name':'八仙过海','title':'<span style="color:darkMagenta">期:长跟必赚【独平一码】已更新</span>','href':'https://www.886907.com'},//
        {'name':'专业跑狗','title':'<span style="color:black">期:期期公开【跑狗解特】已更新</span>','href':'https://www.886147.com'},//
        {'name':'破码澳门','title':'<span style="color:OliveDrab">期:规律公式【无错九肖】已更新</span>','href':'https://www.886942.com'},//
        {'name':'东方心经','title':'<span style="color:red">期:罗盘推算【四肖八码】已更新</span>','href':'https://www.886173.com'},//
    ],
	//全网更新最早免费资料2 
    am_ziliao_2:[
        {'name':'三国风云','title':'<span style="color:blue">期:澳门推荐【平特一尾】已更新</span>','href':'https://www.567425.com'},//
        {'name':'抓码王報','title':'<span style="color:red">期:热门推荐【三字平特】已更新</span>','href':'https://www.567490.com'},//
        {'name':'绝杀密報','title':'<span style="color:green">期:实战高手【八肖中特】已更新</span>','href':'https://www.567431.com'},//
        {'name':'福利传真','title':'<span style="color:brown">期:纵横六合【④肖中特】已更新</span>','href':'https://www.567453.com'},//
        {'name':'神算策略','title':'<span style="color:chocolate">期:牛逼大师【三半单双】已更新</span>','href':'https://www.567442.com'},//
        {'name':'富婆传密','title':'<span style="color:darkBlue">期:诸葛神算【单双中特】已更新</span>','href':'https://www.567482.com'},//
        {'name':'馬會圖報','title':'<span style="color:deepPink">期:金牌马神【七尾中特】已更新</span>','href':'https://www.567451.com'},//
        {'name':'曾道人報','title':'<span style="color:MediumSlateBlue">期:实力品牌【肉菜草肖】已更新</span>','href':'https://www.567498.com'},//
        {'name':'密门仙机','title':'<span style="color:darkMagenta">期:长跟必赚【家野两肖】已更新</span>','href':'https://www.567494.com'},//
        {'name':'一夜暴富','title':'<span style="color:black">期:期期公开【单双四肖】已更新</span>','href':'https://www.567445.com'},//
        {'name':'美酒佳人','title':'<span style="color:OliveDrab">期:规律公式【稳定九肖】已更新</span>','href':'https://www.567496.com'},//
        {'name':'独出心裁','title':'<span style="color:red">期:罗盘推算【天地中特】已更新</span>','href':'https://www.567426.com'},//
    ],
}



$(function(){
	var qishu =0;
	for(var d in amHistoryJson.data) {
		if(d==0){
			qishu = parseInt(amHistoryJson.data[d].qishu)+1;
		}
	}
	//展示今日推荐1
	var html_="";
	html_ +='<li class="title1">'+config.jinrituijian1_title.replace("\{num\}",qishu)+'</li>';
	for (var index in config.jinrituijian1) {
		var d=config.jinrituijian1[index];
		html_ +='<li><a href="'+d.href+'" target="_blank"><img src="'+d.img+'">'+d.html+'</a></li>';
	}
	$("#jinrituijian1").html(html_);
	//展示今日推荐2
	html_="";
	html_ +='<li class="title1">'+config.jinrituijian2_title.replace("\{num\}",qishu)+'</li>';
	for (var index in config.jinrituijian2) {
		var d=config.jinrituijian2[index];
		html_ +='<li><a href="'+d.href+'" target="_blank"><img src="'+d.img+'">'+d.html+'</a></li>';
	}
	$("#jinrituijian2").html(html_);
	//展示澳门单双
	html_="";
	html_ +='<li class="title3">'+config.am_danshuang_title+'</li>';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			var q = qishu+1;
			html_+='<li>'+q+'期:单双→<a href="'+config.am_danshuang_href+'" target="_blank"><button class="btns">点击平台注册</button></a> 開:<span class="red">00</span>准</li>';
		}
		html_+='<li>'+qishu+'期:单双→<em class="red">【'+danshuang(num[6])+'】</em>開:<span class="red">'+shengxiao[6]+''+num[6]+'</span>准</li>';
	}	
	$("#am_danshuang").html(html_);
	
	//展示澳门平特一肖
	html_="";
	html_ +='<li class="title3">'+config.am_pingteyixiao_title+'</li>';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			var q = qishu+1;
			html_+='<li>'+q+'期:平特一肖→<a href="'+config.am_pingteyixiao_href+'" target="_blank"><button class="btns">点击平台注册</button></a> 開:<span class="red">00</span>准</li>';
		}
		html_+='<li>'+qishu+'期:平特一肖→<em class="red">【'+shengxiao[6]+shengxiao[6]+shengxiao[6]+'】</em>開:<span class="red">'+shengxiao[6]+num[6]+'</span>准</li>';
	}	
	$("#am_pingteyixiao").html(html_);
	//澳门心水资料
	html_="";
	html_ +='<li class="title3">'+config.am_xinshui_title+'</li>';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			var q = qishu+1;
			html_+='<li>'+q+'期:<a href="'+config.am_xinshui_href+'" target="_blank"><button class="btns">点击平台注册</button></a> 開:<span class="red">00</span>准</li>';
			for(var index in config.am_xinshui) {
				var d=config.am_xinshui[index];
				html_+='<li>'+q+'<a href="'+d.href+'" target="_blank">'+d.html+'</a></li>';
			}
		}
	}	
	$("#am_xinshui").html(html_);
	
	//展示澳门大小中特
	html_="";
	html_ +='<li class="title3">'+config.am_daxiao_title+'</li>';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			var q = qishu+1;
			html_+='<li>'+q+'期:大小中特→<a href="'+config.am_danshuang_href+'" target="_blank"><button class="btns">点击平台注册</button></a> 開:<span class="red">00</span>准</li>';
		}
		html_+='<li>'+qishu+'期:大小中特→<em class="red">【'+daxiao(num[6])+'】</em>開:<span class="red">'+shengxiao[6]+num[6]+'</span>准</li>';
	}	
	$("#am_daxiao").html(html_);
	
	//澳门薪水资料(2)
	html_="";
	html_ +='<li class="title3">'+config.am_xinshui_title_2+'</li>';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			var q = qishu+1;
			//html_+='<li>'+q+'期:<a href="'+config.am_pingteyixiao_href+'" target="_blank"><button class="btns">点击平台注册</button></a> 開:<span class="red">00</span>准</li>';
			for(var index in config.am_xinshui_2) {
				var d=config.am_xinshui_2[index];
				html_+='<li>'+q+'<a href="'+d.href+'" target="_blank">'+d.html+'</a></li>';
			}
		}
	}	
	$("#am_xinshui_2").html(html_);
	
	//澳门薪水资料3)
	html_="";
	html_ +='<li class="title3">'+config.am_xinshui_title_3+'</li>';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			var q = qishu+1;
			for(var index in config.am_xinshui_3) {
				var d=config.am_xinshui_3[index];
				html_+='<li>'+q+'<a href="'+d.href+'" target="_blank">'+d.html+'</a></li>';
			}
		}
	}	
	$("#am_xinshui_3").html(html_);
	
	//《澳门六合彩》独家12码
	html_="";
	html_ +='<li class="title3">'+config.dujia12ma_title+'</li>';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		num =arrStringToArrInt(num);
		var numR= removeValues(numsAll,num);
		var arr9Arr = getRandomArrayItems(numR,11);
		arr9Arr.push(num[6]);
		arr9Arr=shuffle(arr9Arr);		
		var arr9Arr_=arr9Arr.toString().replace(num[6],"<em>"+num[6]+"</em>")
		if(d==0){
			var q = qishu+1;
			html_+=q+'期:【独家12码】開:<span class="red">？00</span>准<br><a href="'+config.dujia12ma_href+'" target="_blank"><button class="btns">点击平台注册</button></a>';
		}		
		html_+='<li>'+qishu+'期:【独家12码】開:<span class="red">'+shengxiao[6]+num[6]+'</span>准<br>【'+arr9Arr_+'】</li>';
	}
	$("#dujia12ma").html(html_);
	
	html_="";
	html_ +='<li class="title3">'+config.am_shensuan6xiao_title+'</li>';
	html_ +='<table style="width:100%">';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		var sx =["虎","牛","鼠","猪","狗","鸡","猴","羊","马","蛇","龙","兔"];
		var sx_= removeValues(sx,shengxiao[6]);
		var sxArr=getRandomArrayItems(sx_,5);
		sxArr.push(shengxiao[6]);
		sxArr=shuffle(sxArr);
		var sxArr_=sxArr.toString().replace(shengxiao[6],"<em>"+shengxiao[6]+"</em>")
		if(d==0){
			var q = qishu+1;
			html_+='<tr><td>'+q+'期</td><td><a href="'+config.am_shensuan6xiao_href+'" target="_blank"><button class="btns">点击平台注册</button></a></td><td>开:<span class="red">？00</span></td></tr>';
		}		
		html_+='<tr><td>'+qishu+'期</td><td>'+sxArr_+'</td><td><span class="red">'+shengxiao[6]+num[6]+'</span></td></tr>';
	}
	html_ +='</table>';
	$("#am_shensuan6xiao").html(html_);
	//
	html_="";
	html_ +='<li class="title3">'+config.am_jiaqinyeshou_title+'</li>';
	html_ +='<table style="width:100%">';
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			var q = qishu+1;
			html_+=q+'期:家野中特 <a href="'+config.am_shensuan6xiao_href+'" target="_blank"><button class="btns">点击平台注册</button></a> 開:<span class="red">00</span>中';
		}		
		html_+='<li>'+qishu+'期:家野中特<em class="red">【'+qinshou(shengxiao[6])+'】</em>開:<span class="red">'+shengxiao[6]+''+num[6]+'</span>中</li>';
	}
	html_ +='</table>';
	$("#am_jiaqinyeshou").html(html_);
	
	
	html_="";
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			for(var index in config.am_ziliao_1) {
				var d_=config.am_ziliao_1[index];
				var qi = qishu+1;
				html_+='<li><span class="f_r">'+d_.name+'</span><a href="'+d_.href+'"  target="_blank">'+qi+d_.title+'</a></li>';
			}
		}
	}
		
	$("#am_ziliao_1").html(html_);
	
	html_="";
	for(var d in amHistoryJson.data) {
		var qishu = parseInt(amHistoryJson.data[d].qishu);
		if(isNaN(qishu)){continue;}
		var shengxiao = amHistoryJson.data[d].shengxiao.split(",");
		var num = amHistoryJson.data[d].num.split(",");
		if(d==0){
			for(var index in config.am_ziliao_2) {
				var d_=config.am_ziliao_2[index];
				var qi = qishu+1;
				html_+='<li><span class="f_r">'+d_.name+'</span><a href="'+d_.href+'"  target="_blank">'+qi+d_.title+'</a></li>';
			}
		}
	}
		
	$("#am_ziliao_2").html(html_);
	
	
});



function shuffle(arr) {
  var length = arr.length,
    randomIndex,
    temp;
  while (length) {
    randomIndex = Math.floor(Math.random() * (length--));
    temp = arr[randomIndex];
    arr[randomIndex] = arr[length];
    arr[length] = temp
  }
  return arr;
}

var daxiao =function(n){
	if(n<25){
		return '小数小数';
	}else{
		return '大数大数';
	}
};
var danshuang =function(n){
	if(n%2==0){
		return '双双双';
	}else{
		return '单单单';
	}
};

function arrStringToArrInt(arr){
	var res =new Array();
	for(var item of arr) {
		 res.push(parseInt(item));
	}
	return res;
}

function removeValues(arr,removeArr) {	
    var new_arr = new Array();
	for(var item of arr) {
		if(!removeArr.includes(item)){
		  new_arr.push(item);
		}
	}
	return new_arr;
}

var qinshou =function(name){
	if("养马牛猪狗鸡羊".indexOf(name)>-1){
		return "家禽家禽";
	}
	if("猴蛇龙兔虎鼠".indexOf(name)>-1){
		return "野兽野兽";
	}
};

function getRandomArrayItems(arr,n) {
	var testArray =arr;
	var res =new Array();
	for (var i = 0; i < n; ++i) {
	    var random = Math.floor(Math.random() * testArray.length);
	    if(res.includes(testArray[random])){
	        continue;
	    }
	    res.push(testArray[random]);
	    testArray.splice(random,1);
	}
	return res;        
}

