function FindProxyForURL(url, host) {
	var homeIP = "192.168.56.1";
	var comIP = "10.218.36.189";
	// var myIP = myIpAddress();
	var realProxy = "PROXY ";
	
	if (shExpMatch(url, "*dc.sina.com.cn*") || shExpMatch(url, "*cd.sina.com.cn*") || shExpMatch(url, "*tmp.sina.com.cn*")) {
		
		return "PROXY 10.218.36.155";
		// if ( myIP.indexOf("192.168") > -1 ) {
		// 	realProxy += homeIP;
		// } else {
		// 	realProxy += comIP;
		// }
		// // alert(myIP+"-"+realProxy);
		// return realProxy;
	}

	return "DIRECT";
}


/*a、 isPlainHostName(host)，本例演示判断是否为本地主机，如 http: //myservername/

的方式访问，如果是直接连接，否则使用代理 function FindProxyForURL(url, host) {
	if (isPlainHostName(host))
		return "DIRECT";
	else
		return "PROXY proxy:80";
}

b、 dnsDomainIs(host, "")、 localHostOrDomainIs(host, "")，本例演示判断访问主机

是否属于某个域和某个域名，如果属于.company.com域的主机名，而域名不是
www.company.com和 home.company.com的直接连接，否则使用代理访问。

function FindProxyForURL(url, host) {
	if ((isPlainHostName(host) ||
		dnsDomainIs(host, ".company.com")) && !localHostOrDomainIs(host, "www.company.com") && !localHostOrDomainIs(host, "home.company.com"))

		return "DIRECT";
	else
		return "PROXY proxy:80";
}

c、 isResolvable(host)，本例演示主机名能否被 dns服务器解析，如果能直接访问，否

则就通过代理访问。

function FindProxyForURL(url, host) {
	if (isResolvable(host))
		return "DIRECT";
	else
		return "PROXY proxy:80";
}

d、 isInNet(host, "", "")，本例演示访问 IP是否在某个子网内，如果是就直接访问，

否则就通过代理，例子演示访问清华 IP段的主页不用代理。

function FindProxyForURL(url, host) {
	if (isInNet(host, "166.111.0.0", "255.255.0.0"))
		return "DIRECT";
	else
		return "PROXY proxy:80";
}

e、 shExpMatch(host, "")，本例演示根据主机域名来改变连接类型，本地主机、 * .edu、

* .com分别用不同的连接方式。

function FindProxyForURL(url, host) {
	if (isPlainHostName(host))
		return "DIRECT";
	else if (shExpMatch(host, "*.com"))
		return "PROXY comproxy:80";
	else if (shExpMatch(host, "*.edu"))
		return "PROXY eduproxy:80";
	else
		return "PROXY proxy:80";
}

f、 url.substring()，本例演示根据不同的协议来选择不同的代理， http、 https、 ftp、

gopher分别使用不同的代理。

function FindProxyForURL(url, host) {
	if (url.substring(0, 5) == "http:") {
		return "PROXY proxy:80";
	} else if (url.substring(0, 4) == "ftp:") {
		return "PROXY fproxy:80";
	} else if (url.substring(0, 7) == "gopher:") {
		return "PROXY gproxy";
	} else if (url.substring(0, 6) == "https:") {
		return "PROXY secproxy:8080";
	} else {
		return "DIRECT";
	}
}

g、 dnsResolve(host)，本例演示判断访问主机是否某个 IP，如果是就使用代理，否则直

接连接。
unction FindProxyForURL(url, host) {
	if (dnsResolve(host) == "166.111.8.237") {
		return "PROXY secproxy:8080";
	} else {
		return "PROXY proxy:80";
	}
}

h、 myIpAddress()，本例演示判断本地 IP是否某个 IP，如果是就使用代理，否则直接使

用连接。

function FindProxyForURL(url, host) {
	if (myIpAddress() == "166.111.8.238") {
		return "PROXY proxy:80";
	} else {
		return "DIRECT";
	}
}

i、 dnsDomainLevels(host)，本例演示访问主机的域名级数是几级，就是域名有几个点

如果域名中有点，就通过代理访问，否则直接连接。

function FindProxyForURL(url, host) {
	if (dnsDomainLevels(host) > 0) { // if number of dots in host > 0
		return "PROXY proxy:80";
	}
	return "DIRECT";
}

j、 weekdayRange()，本例演示当前日期的范围来改变使用代理，如果是 GMT时间周三

到周六，使用代理连接，否则直接连接。

function FindProxyForURL(url, host) {
	if (weekdayRange("WED", "SAT", "GMT"))
		return "PROXY proxy:80";
	else
		return "DIRECT";
}

k、最后一个例子是演示随机使用代理，这样可以好好利用代理服务器。

function FindProxyForURL(url, host) {
	return randomProxy();
}

function randomProxy() {
	switch (Math.floor(Math.random() * 5)) {
		case 0:
			return "PROXY proxy1:80";
			break;
		case 1:
			return "PROXY proxy2:80";
			break;
		case 2:
			return "PROXY proxy3:80";
			break;
		case 3:
			return "PROXY proxy4:80";
			break;
		case 4:
			return "PROXY proxy5:80";
			break;
	}
}*/
