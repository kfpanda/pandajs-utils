/*! protocol - v2.0.1 - 2014-03-11 */WSProtocol=function(){var e=null,t=function(){var e=null;if(window.XMLHttpRequest)e=new XMLHttpRequest,e.overrideMimeType&&e.overrideMimeType("text/xml");else{if(!window.ActiveXObject)return null;try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}}return e?e:(alert("Giving up :( Cannot create an XMLHTTP instance"),null)},r=function(){},a=function(e){var t={};return t.targetNSpace=e.targetNSpace,t.url=e.url,t.method=e.method,t.failure=e.failure,t.complete=e.complete,t.type=e.type,t.resultWrapper=e.resultWrapper,t.dataType=e.dataType,t.scope=e.scope,$.isFunction(t.resultWrapper)||(t.resultWrapper=n),t},n=function(e){var t={};return $.isEmptyObject(e)?t:(t.data=((e["soap:Body"]||{})["ns2:"+(e.method||"")+"Response"]||{})["return"],t)},o=function(r){e||(e=t());var a;a='<?xml version="1.0" encoding="utf-8"?>',a+='<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',a+=' xmlns:xsd="http://www.w3.org/2001/XMLSchema" ',a+=' xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">',a+="<soap:Body>",a+="<"+r.method+">";for(var n in r.parameter)a+="<"+n+">"+r.parameter[n]+"</"+n+">";a+="</"+r.method+">",a+="</soap:Body>",a+="</soap:Envelope>",e.open(r.type||"POST",r.url,!0),e.onreadystatechange=function(){var t={};if(4==e.readyState)if(200==e.status){var a=e.responseText;try{t=$.xml2json(a),t.method=r.method,$.isFunction(r.resultWrapper)&&(t=r.resultWrapper(t)),t.status="success"}catch(n){t.status="error",t.msg="xml parse error."}}else t.status="error",t.msg="There was a problem with the request.";var o=t.status||"error";if("success"===o)$.isFunction(r.afterSuccess)&&r.afterSuccess(r,t,o),$.isFunction(r.success)&&r.success.call(r.scope,r,t,o);else if(4==e.readyState){var s=function(){};o="error",s(t,o)}$.isFunction(r.complete)&&r.complete.call(r.scope,r,o,e)},e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),e.setRequestHeader("SOAPAction",r.targetNSpace+r.method),e.send(a)};Protocol.registerRequest("WS",{type:"IMClient",getOptions:a,validateOptions:r,request:o})}();