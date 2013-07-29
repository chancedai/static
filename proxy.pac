function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*dc.sina.com.cn*")) {
		return "PROXY 10.218.36.52";
	}
	return "DIRECT";
}
