function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*dc.sina.com.cn/*")) {
		return "PROXY 192.168.1.6";
	}
	return "DIRECT";
}
