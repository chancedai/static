function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*dc.sina.com.cn*")||shExpMatch(url, "*cd.sina.com.cn*")||shExpMatch(url, "*tmp.sina.com.cn*")) {
		return "PROXY 10.218.36.143";
		// return "PROXY 192.168.1.2";
	}
	
	if (shExpMatch(url, "*slide.news.sina.com.cn*")) {
		return "PROXY 10.73.48.235";
		// return "PROXY 192.168.1.2";
	}
	return "DIRECT";
}
