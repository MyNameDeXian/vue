var isNavtive = false;
// isNavtive = true;
// var ipaddress = "https://epad.gdnybank.com:8445"; //生产
// var ipaddress = "https://epadtest.gdnybank.com:8454"; //uat
// var ipaddress = "https://epadtest.gdnybank.com:8452"; //准生产
 var ipaddress = "http://11.8.121.66:7001"; //
import $ from './jquery-2.1.1.js';
//通用alert
function navtiveAlert(msg) {
	//	alert(123);
	if (isNavtive) {
		var Tool, NTUI;
		if (NTUI) {
			Tool = NTUI;
		} else if (parent.NTUI) {
			Tool = parent.NTUI;
		} else if (top.NTUI) {
			Tool = top.NTUI;
		}
		// alert(Tool);

		Tool.openNTMbsDialog(null, null, msg, '确定');
	} else {
		alert(msg);
	}
}

function getReqBusNo(obj, url, textcode, callback, errorcallback, isJuhua, projectname, pwdTitle, fingerTitle) {
	if (url) {

	} else {
		url = "txCtrl";
	}
	// alert(isJuhua);
	if (isJuhua == undefined) {
		isJuhua = 0;
	}


	if (projectname == undefined) {
		projectname = 'msap3/'; //updated on 20160706 by Alvin
	}
	if (pwdTitle == undefined) {
		pwdTitle = "";
	}

	if (fingerTitle == undefined) {
		fingerTitle = "";
	}
	var hrf=location.href;
	if(location.href.indexOf("#")>0){
		hrf= location.href.split("#")[0];
	}

	if(location.href.indexOf("?")>0){
		hrf= location.href.split("?")[0];
	}

	if (isNavtive) {
		var reqTool, NTHttReq;
		if (NTHttReq) {
			reqTool = NTHttReq;
		} else if (parent.NTHttReq) {
			reqTool = parent.NTHttReq;
		} else if (top.NTHttReq) {
			reqTool = top.NTHttReq;
		}
		reqTool.commit(function(json) {
			//json = json.replace(/null/g, '""');
			//			alert(json);
			try {
				var msg = (new Function('', 'return' + json))();
				callback(msg);
			} catch (e) {
				navtiveAlert(e.message);
				//json = json.replace(/null/g, '""');
				//var msg = (new Function('', 'return' + json))();
				//Updated by Alvin to disable sucessful callback function
				//otherwise it may be called twice
				//callback(msg);
			}

		}, function(json) {
			//			alert(json);
			try {
				var msg = (new Function('', 'return' + json))();
				//				if (msg.tips.message == "该交易需要先登录") {
				//					navtiveAlert("该交易需要先登录");
				//					top.location.href = "../../homePage/html/homepage.html";
				//					return;
				//				}
				errorcallback(msg);
			} catch (e) {
				//navtiveAlert(json);
			}
		}, 'post', projectname + url + '?txcode=' + textcode, isJuhua, ipaddress, JSON.stringify(obj), pwdTitle, fingerTitle, hrf);

	} else {
		obj.HEADKEY = {
			"user_id": "009420",
			"branch_id": "3200"
		};
		$.ajax({
			type: "post",
			url: ipaddress + "/" + projectname + url + "?txcode=" + textcode,
			data: JSON.stringify(obj),
			headers: {
				"device_id": "12345"
			},
			contentType: "application/json;",
			timeout: 20000,
			dataType: "json",
			success: function(msg) {
				//				msg = JSON.stringify(msg);
				//				msg = msg.replace(/null/g, '""');
				//				var obj = (new Function('', 'return' + msg))();
				callback(msg);
			},
			error: function(msg) {
				errorcallback(msg);
			}
		});
	}

}

//通用请求方法
//obj请求参数json对象
//url controller地址 默认 txCtrl
//textcode 交易码
//callback 成功回调
//errorcallback 失败回调
//isJuhua 是否出loading框 1否，0是
//projectname 项目名 不写即是默认值
//
export function httpRequest(obj, url, textcode, callback, errorcallback, isJuhua, projectname, pwdTitle, fingerTitle) {

	getReqBusNo({}, "", "COM000010", function(data) {
		console.log(data);
		if (data.data.bus_seq_no == "" && data.data.bus_seq_no == null && data.data.bus_seq_no == undefined) {
			navtiveAlert("获取业务流水号失败,请重试");
		} else {
			//alert(data.data.bus_seq_no);
			obj.bus_seq_no=data.data.bus_seq_no;
			getReqBusNo(obj,url,textcode,function(data){console.log(data);callback(data)},errorcallback,isJuhua,projectname,pwdTitle,fingerTitle);
		}
	}, function(json) {
		// navtiveAlert(json.tips.message);
		console.log(json);
	},isJuhua,projectname,pwdTitle,fingerTitle);


}



