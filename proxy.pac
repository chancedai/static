function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*dc.sina.com.cn*")||shExpMatch(url, "*cd.sina.com.cn*")||shExpMatch(url, "*tmp.sina.com.cn*")) {
		return "PROXY 10.218.36.107";
		// return "PROXY 192.168.56.1";
	}

	return "DIRECT";
}
