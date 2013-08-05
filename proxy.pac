function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*dc.sina.com.cn*")||shExpMatch(url, "*cd.sina.com.cn*")) {
		return "PROXY 10.218.36.206";
	}
	return "DIRECT";
}
