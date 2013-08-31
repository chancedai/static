function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*dc.sina.com.cn*")||shExpMatch(url, "*cd.sina.com.cn*")) {
		// return "PROXY 10.218.36.195";
		return "PROXY 192.168.1.6";
	}
	return "DIRECT";
}
