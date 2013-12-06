function FindProxyForURL(url, host) {
	var homeIP = "192.168.56.1";
	var comIP = "10.218.36.189";
	var realProxy = "PROXY ";
	if (shExpMatch(url, "*dc.sina.com.cn*") || shExpMatch(url, "*cd.sina.com.cn*") || shExpMatch(url, "*tmp.sina.com.cn*")) {

		if (myIpAddress().indexOf("192.168") > -1) {
			realProxy += homeIP;
		} else {
			realProxy += comIP;
		}
		return realProxy;
	}

	return "DIRECT";
}
